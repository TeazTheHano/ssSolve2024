import { View, Text, Button, ScrollView, Dimensions, Image, ImageStyle, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Nu14Reg, Nu16Bold, Nu16Reg, Nu18Reg, RoundBtn, SSBarWithSaveArea, TopBarSS, ViewCol, ViewColCenter, ViewRow, ViewRowBetweenCenter } from '../assets/Class'
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import styles, { vh, vw } from '../assets/stylesheet';
import clrStyle from '../assets/componentStyleSheet';
import { currentEditItemInCart, currentRemoveItemInCart, RootContext } from '../data/store';

import QRCode from "react-qr-code";
import { CartFormat, PillFormat } from '../data/interfaceFormat';
import { checkIcon, minusIcon, plusIcon, unCheckIcon } from '../assets/svgXml';

export default function Cart() {
  const sheetRef = useRef<BottomSheetMethods>(null)
  const [CurrentCache, dispatch] = React.useContext(RootContext)
  const [showHistory, setShowHistory] = React.useState(true)
  const [orderQuantityArray, setOrderQuantityArray] = React.useState<number[]>([])
  const [selectedPill, setSelectedPill] = React.useState<boolean[]>([])

  const value = 'https://www.google.com';

  useEffect(() => {
    let temp: number[] = []
    let selectTemp: boolean[] = []
    CurrentCache.cart.forEach((item) => {
      temp.push(item.orderQuantity)
      selectTemp.push(false)
    })
    setOrderQuantityArray(temp)
    setSelectedPill(selectTemp)
  }, [CurrentCache.cart])

  function handleQuantityChange(index: number, plus: boolean) {
    let temp = [...orderQuantityArray];
    const currentItem = CurrentCache.cart[index];

    if (plus) {
      if (temp[index] >= currentItem.pill.pill_quantity) {
        Alert.alert('Số lượng thuốc trong kho không đủ!', '', [{ text: 'OK' }]);
        return;
      } else {
        temp[index] += 1;
      }
    } else {
      if (temp[index] <= 1) {
        Alert.alert('Bạn có chắc chắn muốn xoá sản phẩm này khỏi giỏ hàng?', '', [
          { text: 'Hủy' },
          {
            text: 'Xoá',
            onPress: () => dispatch(currentRemoveItemInCart(currentItem.pill)),
          },
        ]);
        return;
      } else {
        temp[index] -= 1;
      }
    }

    setOrderQuantityArray(temp);
    dispatch(currentEditItemInCart({ ...currentItem, orderQuantity: temp[index] }));
  }

  function handleSelectChange(index: number) {
    setSelectedPill(prevSelectedPill => {
      const newSelectedPill = [...prevSelectedPill];
      newSelectedPill[index] = !newSelectedPill[index];
      return newSelectedPill;
    });
  }

  const { height, width } = Dimensions.get("window");

  function cartEditCartItem(item: CartFormat) {
    dispatch(currentEditItemInCart(item))
  }

  function cartRemoveCartItem(item: PillFormat) {
    dispatch(currentRemoveItemInCart(item))
  }

  return (
    <SSBarWithSaveArea>
      <TopBarSS
        title='Giỏ thuốc'
        subTitle={'Kiểm tra lại trước khi thực hiện thanh toán!'}
        unenableSearch
      />
      <View style={[styles.flex1]}>
        {/* <QRCode size={Math.min(height, width)} value={value} /> */}

        <ViewRow style={[styles.w100, styles.paddingH6vw, styles.marginVertical6vw]}>
          <RoundBtn
            title='Giỏ thuốc'
            customStyle={[styles.flex1, styles.justifyContentCenter, styles.borderRadius4vw]}
            bgColor={showHistory ? clrStyle.blue50 : clrStyle.white}
            textClass={Nu18Reg}
            textColor={clrStyle.blue100}
            onPress={() => setShowHistory(!showHistory)}
          />
          <RoundBtn
            title='Lịch sử'
            customStyle={[styles.flex1, styles.justifyContentCenter, styles.borderRadius4vw]}
            bgColor={!showHistory ? clrStyle.blue50 : clrStyle.white}
            textClass={Nu18Reg}
            textColor={clrStyle.blue100}
            onPress={() => setShowHistory(!showHistory)}
          />
        </ViewRow>

        {
          showHistory ?
            CurrentCache.cart.length > 0 ?
              <>
                <ScrollView style={[styles.paddingH6vw, styles.flex1]} contentContainerStyle={[styles.gap4vw]}>
                  <InCartItemRender data={CurrentCache.cart} editFnc={cartEditCartItem} removeFnc={cartRemoveCartItem} handleFnc={handleQuantityChange} quantityArr={orderQuantityArray} sellectArr={selectedPill} handleSellect={handleSelectChange} />
                </ScrollView>
                <ViewRowBetweenCenter style={[styles.w100, { backgroundColor: clrStyle.blue50 }]}>
                  <RoundBtn
                    title='Thanh toán'
                    onPress={() => {
                      sheetRef.current?.open()
                    }}
                    customStyle={[styles.marginHorizontal6vw, styles.marginBottom6vw]}
                  />
                </ViewRowBetweenCenter>
              </>
              :
              <ViewColCenter style={[styles.paddingH6vw, styles.flex1]}>
                <Nu18Reg>Giỏ hàng trống</Nu18Reg>
              </ViewColCenter>
            : <ViewColCenter style={[styles.paddingH6vw, styles.flex1]}>
              <Nu18Reg>Lịch sử trống</Nu18Reg>
            </ViewColCenter>
        }

      </View>
    </SSBarWithSaveArea >
  )
}

export class InCartItemRender extends React.Component<{ data: CartFormat[], editFnc: (item: CartFormat) => void, removeFnc: (item: PillFormat) => void, handleFnc: (index: number, plus: boolean) => void, quantityArr: number[], sellectArr: boolean[], handleSellect: (index: number) => void }> {
  render() {
    return (
      <>
        {this.props.data.map((item, index) => (
          <ViewRowBetweenCenter key={index} style={[styles.borderRadius4vw, styles.bgcolorWhite, styles.gap2vw]}>
            <TouchableOpacity
              onPress={() => { this.props.handleSellect(index) }}>
              {this.props.sellectArr[index] ? checkIcon(vw(8), vw(8)) : unCheckIcon(vw(8), vw(8))}
            </TouchableOpacity>
            <ViewRow style={[styles.flex1, styles.alignItemsCenter, styles.gap2vw, styles.bgcolorWhite, styles.shadowW0H0Black, styles.padding10, styles.borderRadius4vw]}>
              <View style={[styles.w20vw, styles.h20vw, styles.borderRadius16, styles.overflowHidden,]}>{item.pill.pill_imgAddress ? <Image source={item.pill.pill_imgAddress[0]} resizeMethod='resize' resizeMode='contain' style={[styles.w100, styles.h100, styles.borderRadius4vw] as ImageStyle} /> : <Text>null</Text>}</View>
              <ViewCol style={[styles.flex1, styles.gap1vw]}>
                <Nu14Reg numberOfLines={1}>{item.pill.pill_name}</Nu14Reg>
                <ViewRowBetweenCenter>
                  <Nu16Bold style={{ color: clrStyle.red }}>đ {item.pill.pill_sellPrice}</Nu16Bold>
                  <ViewRowBetweenCenter style={[styles.borderRadius10, { borderWidth: 0.5, borderColor: clrStyle.grey30 }]}>
                    <TouchableOpacity
                      style={[styles.padding1vw]}
                      onPress={() => { this.props.handleFnc(index, false) }}
                    >
                      {minusIcon(vw(4), vw(4))}
                    </TouchableOpacity>
                    <View style={[{ borderLeftWidth: 0.5, borderRightWidth: 0.5, borderColor: clrStyle.grey30 }]}>
                      <Nu16Reg style={[styles.paddingH10,]}>{this.props.quantityArr[index]}</Nu16Reg>
                    </View>
                    <TouchableOpacity
                      style={[styles.padding1vw]}
                      onPress={() => { this.props.handleFnc(index, true) }}
                    >
                      {plusIcon(vw(4), vw(4))}
                    </TouchableOpacity>
                  </ViewRowBetweenCenter>
                </ViewRowBetweenCenter>
              </ViewCol>
            </ViewRow>
          </ViewRowBetweenCenter>
        ))}
      </>
    );
  }
}