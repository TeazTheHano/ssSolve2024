import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { Nu14Reg, Nu16Bold, Nu16Reg, Nu18Bold, RoundBtn, SSBarWithSaveArea, TopBarSS, ViewRow, ViewRowBetweenCenter, ViewRowStartCenter } from '../assets/Class'
import { CartFormat, OrderFormat } from '../data/interfaceFormat';
import clrStyle from '../assets/componentStyleSheet';
import styles, { vw } from '../assets/stylesheet';
import { copyIcon, walletIcon } from '../assets/svgXml';
import QRCode from 'react-qr-code';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootContext } from '../data/store';

export default function OrderDetail({ route }: any) {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets();
  const [orderData, setOrderData] = React.useState<OrderFormat>();
  const [CurrentCache, dispatch] = React.useContext(RootContext);

  useEffect(() => {
    if (route.params) {
      setOrderData(route.params.orderData)
      console.log(route.params.orderData);
      
    }
  }, [route.params])

  const [orderItem, setOrderItem] = React.useState<OrderFormat | undefined>(orderData);
  const [totalPay, setTotalPay] = React.useState<number>(0);
  const [totalQuantity, setTotalQuantity] = React.useState<number>(0);
  const [firmedCart, setFirmedCart] = React.useState<CartFormat[]>([]);
  const [paymentKind, setPaymentKind] = React.useState<string[]>(['']);
  const [selectedPayment, setSelectedPayment] = React.useState<number>(0);
  const [QRvalue, setQRvalue] = React.useState<string>(`0987654321,1:1,2:1,3:1,4:0,5:0,6:0`);

  useEffect(() => {
    if (orderData) {
      let firmCartTemp: CartFormat[] = [];
      orderData.order_item_ids.forEach((item, index) => {
        firmCartTemp.push({
          pill: CurrentCache.DATA.pillList.filter((pill) => pill.pill_id === item)[0],
          orderQuantity: orderData.order_item_quantity[index],
        });
      });
      setOrderItem(orderData);
      setQRvalue(orderData.order_id);
      setTotalQuantity(orderData.order_item_quantity.reduce((a, b) => a + b, 0));
      setTotalPay(orderData.order_total);
      setFirmedCart(firmCartTemp);
      setPaymentKind([orderData.order_paymentKind]);
    }
  }, [orderData])

  return (
    <Bill
      orderItem={orderItem!}
      QRvalue={QRvalue}
      totalPay={totalPay}
      totalQuantity={totalQuantity}
      firmedCart={firmedCart}
      paymentKind={paymentKind}
      selectedPayment={selectedPayment}
      navi={navigation}
      insets={insets}
    />
  )
}

export class Bill extends React.Component<{ orderItem: OrderFormat, QRvalue: string, totalPay: number, totalQuantity: number, firmedCart: CartFormat[], paymentKind: string[], selectedPayment: number, navi: any, insets: any }> {
  render() {
    const { orderItem, QRvalue, totalPay, totalQuantity, firmedCart, paymentKind, selectedPayment, navi, insets } = this.props;
    return (
      <SSBarWithSaveArea bgColor={clrStyle.blue30} barColor={clrStyle.blue30}>
        <TopBarSS
          title='Hoá đơn thanh toán'
          unenableSearch
          unenableRightIcon
          navigation={navi}
        />
        <ScrollView style={[styles.flex1, styles.paddingH6vw, styles.paddingTop4vw]} contentContainerStyle={[styles.gap4vw]}>
          <ViewRowBetweenCenter>
            <Nu16Reg>Mã đơn hàng: </Nu16Reg>
            <ViewRowStartCenter>
              <Nu16Bold>{orderItem?.order_id}</Nu16Bold>
              <TouchableOpacity
                onPress={() => {

                }}>
                {copyIcon(vw(6), vw(6))}
              </TouchableOpacity>
            </ViewRowStartCenter>
          </ViewRowBetweenCenter>

          <View style={[styles.wAuto, styles.alignSelfCenter, styles.bgcolorWhite, styles.padding4vw, styles.borderRadius16, styles.overflowHidden]}>
            <QRCode size={vw(62)} value={QRvalue} />
          </View>

          <Nu14Reg style={{ color: clrStyle.grey50 }}>Lưu lại mã đơn để lấy thuốc và thanh toán nhanh chóng tại máy bán thuốc pillport.</Nu14Reg>

          <ViewRowBetweenCenter>
            <Nu16Reg>Thời gian đặt đơn: </Nu16Reg>
            <Nu16Reg style={{ color: clrStyle.grey50 }}>{orderItem?.order_date.toLocaleString()}</Nu16Reg>
          </ViewRowBetweenCenter>

          <View>
            <ViewRowStartCenter>
              {walletIcon(vw(8), vw(8))}
              <Nu16Reg> Phương thức thanh toán:</Nu16Reg>
            </ViewRowStartCenter>
            <ViewRowStartCenter>
              <View style={[{ opacity: 0 }]}>{walletIcon(vw(8), vw(8))}</View>
              <Nu16Reg> <Nu14Reg style={{ color: clrStyle.grey50 }}>{paymentKind[selectedPayment]}</Nu14Reg></Nu16Reg>
            </ViewRowStartCenter>
          </View>

          <ViewRowBetweenCenter style={[]}>
            <Nu16Reg>Tổng số tiền ({totalQuantity} sản phẩm):</Nu16Reg>
            <Nu18Bold style={{ color: clrStyle.red }}>đ {totalPay}</Nu18Bold>
          </ViewRowBetweenCenter>

          {firmedCart.map((item, index) => (
            <ViewRow key={index} style={[styles.flex1, styles.gap2vw, styles.justifyContentSpaceBetween]}>
              <Nu14Reg numberOfLines={3} style={[styles.w70, { color: clrStyle.grey100 }]}>{item.pill.pill_name}</Nu14Reg>
              <Nu14Reg style={[{ color: clrStyle.grey50 }]}>x{item.orderQuantity}</Nu14Reg>
              <Nu14Reg style={{ color: clrStyle.grey50 }}>đ {item.pill.pill_sellPrice}</Nu14Reg>
            </ViewRow>
          ))}
        </ScrollView>
        <ViewRowBetweenCenter style={[styles.paddingH6vw, styles.paddingV4vw, styles.gap4vw, styles.positionRelative, { backgroundColor: clrStyle.blue80, }]}>
          <View style={[styles.positionAbsolute, styles.w100vw, { height: insets.bottom + vw(4), bottom: -(insets.bottom + vw(4)), backgroundColor: clrStyle.blue80, zIndex: 0 }]} />

          <RoundBtn
            title='Quay về trang chủ'
            bgColor={clrStyle.red}
            onPress={() => navi.navigate('BottomTab', { screen: 'Home' })}
            customStyle={[styles.justifyContentCenter, styles.borderRadius4vw, styles.paddingH6vw, styles.flex1]}
            textClass={Nu14Reg}
            textColor={clrStyle.black}
          />
          <RoundBtn
            title='Lưu đơn'
            bgColor={clrStyle.blue50}
            onPress={() => {
              Alert.alert('Lưu đơn', 'Bạn có muốn lưu hoá đơn này dưới dạng hình ảnh không?', [
                {
                  text: 'Hủy',
                  style: 'cancel',
                },
                {
                  text: 'Lưu',
                  onPress: async () => {
                    // try {
                    //     const targetPixelCount = 1080; // Any resolution you want
                    //     const pixelRatio = PixelRatio.get(); // The pixel ratio of the device
                    //     const pixels = targetPixelCount / pixelRatio;
                    //     let uri = await captureRef(viewShotRef, {
                    //         format: 'png',
                    //         quality: 1,
                    //         result: 'tmpfile',
                    //         width: pixels,
                    //         height: pixels,
                    //     });
                    //     await CameraRoll.saveAsset(uri, { type: 'photo' });
                    //     Alert.alert('Thành công', 'Hoá đơn đã được lưu vào thư viện ảnh của bạn.');
                    // } catch (error) {
                    //     Alert.alert('Lỗi', 'Không thể lưu hoá đơn. Vui lòng thử lại.');
                    // }
                  },
                },
              ]);
            }}
            customStyle={[styles.justifyContentCenter, styles.borderRadius4vw, styles.paddingH6vw, styles.flex1]}
            textClass={Nu14Reg}
            textColor={clrStyle.black}
          />
        </ViewRowBetweenCenter>
      </SSBarWithSaveArea >
    )
  }
}