import { View, Text, Image, ImageStyle, ScrollView, TouchableOpacity, Alert, PixelRatio } from 'react-native'
import React, { useEffect } from 'react'
import { Nu14Reg, Nu16Bold, Nu16Reg, Nu18Black, Nu18Bold, Nu18Reg, RoundBtn, SSBarWithSaveArea, TopBarSS, ViewCol, ViewRow, ViewRowBetweenCenter, ViewRowCenter, ViewRowStartCenter } from '../assets/Class'
import styles, { vw } from '../assets/stylesheet'
import { CartFormat, OrderFormat } from '../data/interfaceFormat'
import clrStyle from '../assets/componentStyleSheet'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { transform } from 'typescript'
import { useNavigation } from '@react-navigation/native'
import { clearCart, currentSaveOrder, RootContext } from '../data/store'
import { saveOrder } from '../data/storageFunc'
import { copyIcon, walletIcon } from '../assets/svgXml'

// import { captureRef } from 'react-native-view-shot'
// import { CameraRoll } from "@react-native-camera-roll/camera-roll";

import QRCode from 'react-qr-code'
import { Bill } from './OrderDetail'

export default function Purchase({ route }: any) {
    const navigation = useNavigation()
    const [CurrentCache, dispatch] = React.useContext(RootContext)

    const [firmedCart, setFirmedCart] = React.useState<CartFormat[]>([])
    const [totalPay, setTotalPay] = React.useState<number>(0)
    const [totalQuantity, setTotalQuantity] = React.useState<number>(0)
    const [selectedPayment, setSelectedPayment] = React.useState<0 | 1 | 2 | 3>(0)
    const [paymentKind, setPaymentKind] = React.useState<string[]>(['', 'Ví điện tử Momo', 'Chuyển khoản ngân hàng', 'Thanh toán tại máy bán thuốc'])
    const [isPurchased, setIsPurchased] = React.useState<boolean>(false)

    const [orderItem, setOrderItem] = React.useState<OrderFormat>()
    const [QRvalue, setQRvalue] = React.useState<string>('')

    const insets = useSafeAreaInsets();

    const viewShotRef = React.useRef(null);

    useEffect(() => {
        if (route.params) {
            let totalQuantity = 0
            route.params.cart.forEach((item: CartFormat) => {
                totalQuantity += item.orderQuantity
            })
            setFirmedCart(route.params.cart)
            setTotalPay(route.params.totalPay)
            setTotalQuantity(totalQuantity)
        }
    }, [route.params])

    function genOrderInfo() {
        let date = new Date()
        let outPut: OrderFormat = {
            order_id: `ORD-${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}-${Math.floor(Math.random() * 1000)}-${CurrentCache.user.email.split('@')[0]}`,
            order_date: date,
            order_status: 'Đã nhận',
            order_user_id: CurrentCache.user.email,
            order_item_ids: firmedCart.map((item) => item.pill.pill_id),
            order_item_quantity: firmedCart.map((item) => item.orderQuantity),
            order_pillPort_id: `Demo001`,
            order_total: totalPay,
            order_paymentKind: paymentKind[selectedPayment]
        }
        setOrderItem(outPut)
        saveOrder(outPut, outPut.order_id)
        dispatch(currentSaveOrder(outPut))
        let QRtemp: string = ``
        let item1ID = 'P123af';
        let item2ID = 'S789aj';
        let item3ID = 'H764ae';
        let item4ID = 'S789aj';
        let item5ID = 'P124af';
        let item6ID = 'H765ae';
        let item1Quantity = outPut.order_item_ids.includes(item1ID) ? outPut.order_item_quantity[outPut.order_item_ids.indexOf(item1ID)] : 0;
        let item2Quantity = outPut.order_item_ids.includes(item2ID) ? outPut.order_item_quantity[outPut.order_item_ids.indexOf(item2ID)] : 0;
        let item3Quantity = outPut.order_item_ids.includes(item3ID) ? outPut.order_item_quantity[outPut.order_item_ids.indexOf(item3ID)] : 0;
        let item4Quantity = outPut.order_item_ids.includes(item4ID) ? outPut.order_item_quantity[outPut.order_item_ids.indexOf(item4ID)] : 0;
        let item5Quantity = outPut.order_item_ids.includes(item5ID) ? outPut.order_item_quantity[outPut.order_item_ids.indexOf(item5ID)] : 0;
        let item6Quantity = outPut.order_item_ids.includes(item6ID) ? outPut.order_item_quantity[outPut.order_item_ids.indexOf(item6ID)] : 0;
        // setQRvalue(orderData.order_id);
        setQRvalue(`0000000000,1:${item1Quantity},2:${item2Quantity},3:${item3Quantity},4:${item4Quantity},5:${item5Quantity},6:${item6Quantity}`)
        console.log(`0000000000,1:${item1Quantity},2:${item2Quantity},3:${item3Quantity},4:${item4Quantity},5:${item5Quantity},6:${item6Quantity}`);

        dispatch(clearCart())
    }

    class CheckPurchase extends React.Component {
        render() {
            return (
                <SSBarWithSaveArea>
                    <TopBarSS
                        title='Thanh toán'
                        subTitle={'Kiểm tra lại trước khi thực hiện thanh toán!'}
                        unenableSearch
                        unenableRightIcon
                        navigation={navigation}
                    />
                    <ScrollView style={[styles.flex1, styles.paddingH6vw, styles.paddingV8vw,]}>
                        {
                            firmedCart.length > 0 && totalPay ?
                                <>
                                    {firmedCart.map((item, index) => (
                                        <ViewRowBetweenCenter key={index} style={[styles.borderRadius4vw, styles.bgcolorWhite, styles.gap2vw]}>
                                            <ViewRow style={[styles.flex1, styles.alignItemsCenter, styles.gap2vw, styles.bgcolorWhite, styles.padding10, styles.borderRadius4vw]}>
                                                <View style={[styles.w20vw, styles.h20vw, styles.borderRadius16, styles.overflowHidden,]}>{item.pill.pill_imgAddress ? <Image source={item.pill.pill_imgAddress[0]} resizeMethod='resize' resizeMode='contain' style={[styles.w100, styles.h100, styles.borderRadius4vw] as ImageStyle} /> : <Text>null</Text>}</View>
                                                <ViewCol style={[styles.flex1, styles.gap1vw]}>
                                                    <Nu14Reg numberOfLines={3}>{item.pill.pill_name}</Nu14Reg>
                                                    <ViewRowBetweenCenter>
                                                        <Nu14Reg style={{ color: clrStyle.grey50 }}>đ {item.pill.pill_sellPrice}</Nu14Reg>
                                                        <Nu14Reg>x{item.orderQuantity}</Nu14Reg>
                                                    </ViewRowBetweenCenter>
                                                </ViewCol>
                                            </ViewRow>
                                        </ViewRowBetweenCenter>
                                    ))}
                                    <ViewCol style={[styles.gap4vw, styles.marginVertical4vw]}>
                                        <ViewRowBetweenCenter style={[]}>
                                            <Nu16Reg>Tổng số tiền ({totalQuantity} sản phẩm):</Nu16Reg>
                                            <Nu18Bold style={{ color: clrStyle.red }}>đ {totalPay}</Nu18Bold>
                                        </ViewRowBetweenCenter>
                                        <View style={[styles.w100, { height: vw(2), backgroundColor: clrStyle.blue80 }]} />
                                        <Nu16Reg>Phương thức thanh toán:</Nu16Reg>
                                        {/* >>> */}
                                        <TouchableOpacity style={[styles.padding10, styles.borderRadius20, { backgroundColor: selectedPayment == 1 ? clrStyle.blue50 : clrStyle.green100 }]}
                                            onPress={() => Alert.alert('Tính năng đang phát triển')}>
                                            <ViewRowStartCenter style={[styles.gap4vw]}>
                                                <Image source={require('../assets/image/purMomo.png')} style={[styles.w15vw, styles.h15vw] as ImageStyle} />
                                                <Nu18Reg>{paymentKind[1]}</Nu18Reg>
                                            </ViewRowStartCenter>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.padding10, styles.borderRadius20, { backgroundColor: selectedPayment == 2 ? clrStyle.blue50 : clrStyle.green100 }]}
                                            onPress={() => Alert.alert('Tính năng đang phát triển')}>
                                            <ViewRowStartCenter style={[styles.gap4vw]}>
                                                <Image source={require('../assets/image/purBank.png')} style={[styles.w15vw, styles.h15vw] as ImageStyle} />
                                                <Nu18Reg>{paymentKind[2]}</Nu18Reg>
                                            </ViewRowStartCenter>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.padding10, styles.borderRadius20, { backgroundColor: selectedPayment == 3 ? clrStyle.blue50 : clrStyle.green100 }]}
                                            onPress={() => setSelectedPayment(3)}>
                                            <ViewRowStartCenter style={[styles.gap4vw]}>
                                                <Image source={require('../assets/image/purOnSite.png')} style={[styles.w15vw, styles.h15vw] as ImageStyle} />
                                                <Nu18Reg>{paymentKind[3]}</Nu18Reg>
                                            </ViewRowStartCenter>
                                        </TouchableOpacity>
                                    </ViewCol>

                                </>
                                :
                                <View style={[styles.flex1, styles.justifyContentCenter, styles.alignItemsCenter]}>
                                    <Nu18Reg>Có lỗi xảy ra, vui lòng thử lại</Nu18Reg>
                                </View>
                        }
                    </ScrollView>
                    <ViewRowBetweenCenter style={[styles.w100vw, styles.paddingH6vw, styles.paddingV4vw, styles.positionRelative, { backgroundColor: selectedPayment ? clrStyle.blue50 : 'rgba(0,0,0,0.3)' }]}>
                        <View style={[styles.positionAbsolute, styles.w100vw, { height: insets.bottom + vw(4), bottom: -(insets.bottom + vw(4)), backgroundColor: selectedPayment ? clrStyle.blue50 : 'rgba(0,0,0,0.3)', zIndex: 0 }]} />
                        <Nu14Reg>Tổng: <Nu18Black style={{ color: clrStyle.red }}>{totalPay}</Nu18Black></Nu14Reg>
                        <RoundBtn
                            title={`Thanh toán (${totalPay})`}
                            bgColor={selectedPayment ? clrStyle.red : clrStyle.grey50}
                            onPress={() => {
                                if (selectedPayment) {
                                    genOrderInfo()
                                    setIsPurchased(true)
                                }
                            }}
                            customStyle={[styles.flexRowCenter, { width: 'fit-content' }]}
                        />
                    </ViewRowBetweenCenter>
                </SSBarWithSaveArea>
            )
        }
    }



    return isPurchased ? (
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
    ) : (
        <CheckPurchase />
    )
}