import { View, Text, Button, ScrollView, Dimensions, Image, ImageStyle, TouchableOpacity, Alert, FlatList } from 'react-native'
import React, { useCallback, useEffect, useRef } from 'react'
import { Nu14Reg, Nu16Black, Nu16Bold, Nu16Reg, Nu18Black, Nu18Reg, RoundBtn, SSBarWithSaveArea, TopBarSS, ViewCol, ViewColCenter, ViewRow, ViewRowBetweenCenter, ViewRowEvenlyCenter, ViewRowStartCenter } from '../assets/Class'
import styles, { vh, vw } from '../assets/stylesheet';
import clrStyle from '../assets/componentStyleSheet';
import { currentEditItemInCart, currentRemoveItemInCart, RootContext } from '../data/store';

import { CartFormat, OrderFormat, PillFormat } from '../data/interfaceFormat';
import { checkIcon, clockIcon, locationIcon, minusIcon, pillOrderIcon, plusIcon, unCheckIcon } from '../assets/svgXml';
import { useNavigation } from '@react-navigation/native';
import { factoryData } from '../data/factoryData';
// import RenderOrderList from './compoScreen/RenderOrderList';

export default function Cart() {
  const navigation = useNavigation()
  const [CurrentCache, dispatch] = React.useContext(RootContext)
  const [showHistory, setShowHistory] = React.useState(true)
  const [orderQuantityArray, setOrderQuantityArray] = React.useState<number[]>([])
  const [selectedPill, setSelectedPill] = React.useState<boolean[]>([])
  const [totalPay, setTotalPay] = React.useState<number>(0)

  const OrderHistoryCategory = ['Chờ lấy hàng', 'Đã nhận', 'Đã hủy']
  const [orderHistorySelectCategory, setOrderHistorySelectCategory] = React.useState<number>(0)
  const [orderHistoryData, setOrderHistoryData] = React.useState<OrderFormat[][]>([])

  useEffect(() => {
    let temp: number[] = []
    CurrentCache.cart.forEach((item) => {
      temp.push(item.orderQuantity)
    })
    setOrderQuantityArray(temp)
  }, [CurrentCache.cart])

  useEffect(() => {
    let selectTemp: boolean[] = []
    CurrentCache.cart.forEach((item) => {
      selectTemp.push(false)
    })
    setSelectedPill(selectTemp)
  }, [orderQuantityArray.length])

  useEffect(() => {
    let total = 0
    CurrentCache.cart.forEach((item, index) => {
      if (selectedPill[index]) {
        total += item.pill.pill_sellPrice * orderQuantityArray[index]
      }
    })
    setTotalPay(total)
  }, [orderQuantityArray, selectedPill])

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

  function handlePurchase(item: CartFormat[], total: number, selected: boolean[]) {
    if (selected.filter((item) => item).length > 0) {
      let orderList: CartFormat[] = []
      item.forEach((item, index) => {
        if (selected[index]) {
          orderList.push(item)
        }
      })
      navigation.navigate('Purchase', { cart: orderList, totalPay: total })
    } else {
      Alert.alert('Vui lòng chọn ít nhất 1 sản phẩm để thanh toán!', '', [{ text: 'OK' }]);
    }
  }

  class CartCheckOut extends React.Component {
    render(): React.ReactNode {
      return (
        CurrentCache.cart.length > 0 ?
          <>
            <ScrollView style={[styles.paddingH6vw, styles.flex1]} contentContainerStyle={[styles.gap4vw]}>
              <InCartItemRender data={CurrentCache.cart} editFnc={cartEditCartItem} removeFnc={cartRemoveCartItem} handleFnc={handleQuantityChange} quantityArr={orderQuantityArray} sellectArr={selectedPill} handleSellect={handleSelectChange} />
            </ScrollView>
            <ViewRowBetweenCenter style={[styles.w100vw, styles.paddingH6vw, styles.paddingV4vw, { backgroundColor: clrStyle.blue50 }]}>
              <TouchableOpacity
                style={[styles.flexRowCenter]}
                onPress={() => {
                  const allSelected = selectedPill.every((item) => item);
                  const newSelectedPill = selectedPill.map(() => !allSelected);
                  setSelectedPill(newSelectedPill);
                }}>
                {selectedPill.every((item) => item) ? checkIcon(vw(8), vw(8)) : unCheckIcon(vw(8), vw(8))}
                <Nu14Reg>Tất cả</Nu14Reg>
              </TouchableOpacity>
              <Nu14Reg>Tổng: <Nu18Black style={{ color: clrStyle.red }}>{totalPay}</Nu18Black></Nu14Reg>
              <RoundBtn
                title={`Thanh toán (${selectedPill.filter((item) => item).length})`}
                bgColor={clrStyle.red}
                onPress={() => {
                  handlePurchase(CurrentCache.cart, totalPay, selectedPill);
                }}
                customStyle={[styles.flexRowCenter, { width: 'fit-content' }]}
              />
            </ViewRowBetweenCenter>
          </>
          :
          <ViewColCenter style={[styles.paddingH6vw, styles.flex1]}>
            <Nu18Reg>Giỏ hàng trống</Nu18Reg>
          </ViewColCenter>
      )
    }
  }

  const renderOrderItem = useCallback(({ item, index }: { item: OrderFormat, index: number }) => {
    return (
      <TouchableOpacity
        disabled={item.order_id.startsWith('PP')}
        onPress={() => navigation.navigate('OrderDetail' as never, { orderData: item } as never)}
      >
        <ViewCol style={[styles.padding10, styles.borderRadius16, styles.gap3vw, styles.alignSelfCenter, { width: vw(86), backgroundColor: clrStyle.green50, borderWidth: 2, borderColor: clrStyle.green100, }]}>
          <ViewRowStartCenter style={[styles.gap1vw]}>
            {pillOrderIcon(vw(6), vw(6))}
            <Nu16Bold numberOfLines={1} style={[styles.flex1]}>{item.order_id}</Nu16Bold>
          </ViewRowStartCenter>
          <ViewRow style={[styles.gap1vw]}>
            {locationIcon(vw(5), vw(5), clrStyle.grey30)}
            <Nu14Reg numberOfLines={2} style={[styles.flex1, { color: clrStyle.grey30 }]}>{factoryData.pillPortList.find(ix => ix.pillport_id === item.order_pillPort_id)?.pillport_address}</Nu14Reg>
          </ViewRow>
          <ViewRowStartCenter style={[styles.gap1vw]}>
            {clockIcon(vw(5), vw(5), clrStyle.grey30)}
            <Nu14Reg numberOfLines={2} style={[styles.flex1, { color: clrStyle.grey30 }]}>{item.order_date.toString().slice(0, 10)}</Nu14Reg>
          </ViewRowStartCenter>
          <Nu14Reg numberOfLines={1} style={[styles.flex1, { color: clrStyle.grey50 }]}>({item.order_item_quantity.reduce((a, b) => a + b, 0)}) <Nu16Bold style={[styles.flex1, { color: clrStyle.red }]}>{item.order_total}</Nu16Bold> vnđ</Nu14Reg>
        </ViewCol>
      </TouchableOpacity>
    )
  }, [orderHistoryData[orderHistorySelectCategory]]);
  const OrderItemRenderMemo = React.memo(renderOrderItem);
  function renderMemOrder(item: OrderFormat, index: number) {
    return <OrderItemRenderMemo item={item} index={index} />
  }


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      let orderHistoryDataTemp: OrderFormat[][] = []
      OrderHistoryCategory.forEach((cate) => {
        let temp: OrderFormat[] = []
        CurrentCache.DATA.orderList.forEach((item) => {
          if (item.order_status === cate) {
            temp.push(item)
          }
        })
        orderHistoryDataTemp.push(temp)
      })
      setOrderHistoryData(orderHistoryDataTemp)
      console.log(orderHistoryDataTemp);
    });

    return () => {
      unsubscribe();
    };
  }, [navigation])

  class OrderHistory extends React.Component {
    render(): React.ReactNode {
      return (
        <ViewCol style={[styles.flex1, styles.paddingH6vw, styles.gap4vw]}>
          <ViewRowEvenlyCenter>
            <TouchableOpacity
              onPress={() => setOrderHistorySelectCategory(0)}>
              <Nu16Black style={[{ color: orderHistorySelectCategory == 0 ? clrStyle.blue100 : clrStyle.grey50 }]}>{OrderHistoryCategory[0]}</Nu16Black>
              <View style={[styles.borderRadius100, styles.alignSelfCenter, styles.marginTop1vw, styles.bgcolorBlack, { width: vw(1), height: vw(1), opacity: orderHistorySelectCategory == 0 ? 1 : 0 }]} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setOrderHistorySelectCategory(1)}>
              <Nu16Black style={[{ color: orderHistorySelectCategory == 1 ? clrStyle.blue100 : clrStyle.grey50 }]}>{OrderHistoryCategory[1]}</Nu16Black>
              <View style={[styles.borderRadius100, styles.alignSelfCenter, styles.marginTop1vw, styles.bgcolorBlack, { width: vw(1), height: vw(1), opacity: orderHistorySelectCategory == 1 ? 1 : 0 }]} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setOrderHistorySelectCategory(2);
                console.log(orderHistorySelectCategory);
                console.log(orderHistoryData[orderHistorySelectCategory]);

              }}>
              <Nu16Black style={[{ color: orderHistorySelectCategory == 2 ? clrStyle.blue100 : clrStyle.grey50 }]}>{OrderHistoryCategory[2]}</Nu16Black>
              <View style={[styles.borderRadius100, styles.alignSelfCenter, styles.marginTop1vw, styles.bgcolorBlack, { width: vw(1), height: vw(1), opacity: orderHistorySelectCategory == 2 ? 1 : 0 }]} />
            </TouchableOpacity>
          </ViewRowEvenlyCenter>

          {
            orderHistoryData[orderHistorySelectCategory].length > 0 ?
              <FlatList
                data={orderHistoryData[orderHistorySelectCategory].sort((a, b) => new Date(b.order_date).getTime() - new Date(a.order_date).getTime())}

                showsHorizontalScrollIndicator={false}

                decelerationRate="fast"

                contentContainerStyle={[styles.gap4vw, styles.marginBottom8vw]}
                renderItem={({ item, index }) => renderMemOrder(item, index)}
                keyExtractor={(_, index) => index.toString()}
              />
              :
              <ViewColCenter style={[styles.flex1]} >
                <Nu18Reg>Lịch sử trống</Nu18Reg>
              </ViewColCenter >
          }
        </ViewCol>
      )
    }
  }

  return (
    <SSBarWithSaveArea>
      <TopBarSS
        title='Giỏ thuốc'
        subTitle={'Kiểm tra lại trước khi thực hiện thanh toán!'}
        unenableSearch
      />
      <View style={[styles.flex1]}>
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

        {showHistory ? <CartCheckOut /> : <OrderHistory />}

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