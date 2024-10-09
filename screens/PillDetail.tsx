import { View, Text, TouchableOpacity, Image, ImageStyle, ScrollView, StatusBar, Platform, ActivityIndicator, Alert, TextInput } from 'react-native'
import React, { ComponentType, useContext, useEffect } from 'react'
import { addToCart, CurrentCache, currentEditItemInCart, RootContext } from '../data/store'
import { CartFormat, PillFormat } from '../data/interfaceFormat'
import { Nu16Bold, Nu16BoldLH1p5, Nu16Reg, Nu16RegLH1p5, Nu18Black, Nu18Reg, RoundBtn, SSBar, SSBarWithSaveArea, TopBarSS, TopNav2, ViewCol, ViewColBetweenCenter, ViewColCenter, ViewRow, ViewRowBetweenCenter, ViewRowCenter } from '../assets/Class'
import { useNavigation } from '@react-navigation/native'
import styles, { vh, vw } from '../assets/stylesheet'
import clrStyle from '../assets/componentStyleSheet'
import { heartIcon, minusIcon, pillOrderIcon, plusIcon, qrIcon, sharpLeftArrow } from '../assets/svgXml'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function PillDetail({ route }: any) {
    const navigation = useNavigation()
    const [CurrentCache, dispatch] = useContext(RootContext)
    const [paramPill, setParamPill] = React.useState<PillFormat>()
    const [scrolled, setScrolled] = React.useState(false)
    const [currentNumOnCart, setCurrentNumOnCart] = React.useState<number>(0)

    const insets = useSafeAreaInsets();
    const statusBarHeight = (Platform.OS === 'ios' ? insets.top : (StatusBar.currentHeight || 0)) + vw(2)

    useEffect(() => {
        if (route.params) {
            setParamPill(route.params.pill)
        }
    }, [route.params])

    const ListGen = (data: string | Array<string | string[]>, FontClass1st: ComponentType<any>, useColor: string = clrStyle.black, FontClass2nd: ComponentType<any> = FontClass1st, bullet1st: string = '1', bullet2nd: string = '-', textIndent2nd: any = 0) => {
        function bulletMark(bullet: string, index: number) {
            let i = index == 0 ? 0 : index % 2 == 0 ? index / 2 : index
            if (bullet === 'a') {
                function abullet(i: number) {
                    let charNum = 26, charStart = 97
                    let char = String.fromCharCode(charStart + i % charNum)
                    if (i >= charNum) {
                        return String.fromCharCode(charStart + Math.floor(i / charNum) - 1) + char + '.'
                    } else {
                        return char + '.'
                    }
                }
                return abullet(i)

            } else if (bullet === 'A') {
                function Abullet(i: number) {
                    let charNum = 26, charStart = 65
                    let char = String.fromCharCode(charStart + i % charNum)
                    if (i >= charNum) {
                        return String.fromCharCode(charStart + Math.floor(i / charNum) - 1) + char + '.'
                    } else {
                        return char + '.'
                    }
                }
                return Abullet(i)

            } else if (bullet === 'I') {
                // make bullet as a roman number
                function Ibullet(i: number) {
                    let romanNum = {
                        1: 'I',
                        2: 'II',
                        3: 'III',
                        4: 'IV',
                        5: 'V',
                        6: 'VI',
                        7: 'VII',
                        8: 'VIII',
                        9: 'IX',
                        10: 'X',
                        100: 'C',
                        1000: 'M',
                        500: 'D',
                        50: 'L',
                        5000: 'V',
                    }

                    let roman = ''
                    let num = i + 1
                    let romanNumArr = Object.keys(romanNum).map(Number).sort((a, b) => b - a)

                }
                return Ibullet(i)

            } else if (bullet === '1') {
                return i + 1 + '.'

            } else {
                return bullet
            }

        }

        return (
            <View>
                {typeof data == 'string' ?

                    <FontClass1st>{data}</FontClass1st>

                    : (() => {
                        const elements = [];
                        for (const [index, item] of data.entries()) {
                            if (typeof item === 'string') {
                                elements.push(
                                    <View key={index} style={[styles.flexRow, styles.paddingBottom2vw, styles.w100]}>
                                        <FontClass1st style={{ color: useColor }}>{bulletMark(bullet1st, index)} </FontClass1st>
                                        <FontClass1st style={{ color: useColor }}>{item}</FontClass1st>
                                    </View>
                                );
                            } else if (Array.isArray(item)) {
                                const subElements = [];
                                for (const [subIndex, subItem] of item.entries()) {
                                    subElements.push(
                                        <View key={subIndex} style={[styles.flexRow, styles.paddingBottom1vw]}>
                                            <FontClass2nd style={{ color: useColor }}>{bulletMark(bullet2nd, subIndex)} </FontClass2nd>
                                            <FontClass2nd style={{ color: useColor }}>{subItem}</FontClass2nd>
                                        </View>
                                    );
                                }
                                elements.push(
                                    <View key={index} style={[styles.w100, { paddingLeft: textIndent2nd }]}>
                                        {subElements}
                                    </View>
                                );
                            }
                        }
                        return elements;
                    })()}
            </View>
        )
    }


    class ParaGener extends React.Component<{ title: string, para: string | (string | string[])[] | undefined, bullet1?: string, bullet2?: string }> {
        render() {
            if (this.props.para !== undefined && this.props.para.length > 0) {
                let bu1 = this.props.bullet1 ? this.props.bullet1 : '•'
                let bu2 = this.props.bullet2 ? this.props.bullet2 : '-'
                return (
                    <ViewCol style={[styles.gap4vw, styles.paddingBottom2vw]}>
                        <Nu18Black>{this.props.title}</Nu18Black>
                        {ListGen(this.props.para, Nu16BoldLH1p5, clrStyle.black, Nu16RegLH1p5, bu1, bu2, vw(5))}
                    </ViewCol>
                )
            } else {
                return <View />
            }
        }
    }

    function dispatchAddToCart(item: CartFormat) {
        dispatch(addToCart(item))
    }
    function dispatchEditCart(item: CartFormat) {
        dispatch(currentEditItemInCart(item))
    }

    return (
        <SSBar barContentStyle='dark-content' trans barColor={'rgba(0,0,0,0)'} notMargin bgColor={clrStyle.blue30} >
            {
                paramPill ?
                    <>
                        <ScrollView
                            stickyHeaderIndices={[1]}
                            style={[styles.flex1]}
                            onScroll={(e) => {
                                if (e.nativeEvent.contentOffset.y > vh(30)) {
                                    setScrolled(true)
                                } else {
                                    setScrolled(false)
                                }
                                console.log(e.nativeEvent.contentOffset.y);
                            }}
                            scrollEventThrottle={16} // Add this line to ensure smooth scrolling
                        >
                            <TopNav2
                                backGoundImage={paramPill.pill_imgAddress ? paramPill.pill_imgAddress[0] : undefined}
                                containerStyle={[styles.h30vh]}
                            />
                            <ViewRowBetweenCenter style={[styles.bgcolorWhite, styles.shadowW0H1Black, styles.paddingBottom2vw, { borderBottomRightRadius: vw(5), borderBottomLeftRadius: vw(5), paddingTop: scrolled ? statusBarHeight : vw(2) }]}>
                                <TouchableOpacity
                                    onPress={() => navigation.goBack()}
                                    style={[styles.padding2vw, styles.marginHorizontal2vw]}>
                                    {sharpLeftArrow(vw(6), vw(6), clrStyle.black)}
                                </TouchableOpacity>
                                <Nu18Black style={[styles.flex1, styles.marginRight4vw, { color: clrStyle.black }]}>{paramPill.pill_name}</Nu18Black>
                            </ViewRowBetweenCenter>

                            <ViewCol style={[styles.paddingH6vw, styles.gap4vw, styles.paddingV4vw]}>
                                <ViewRowBetweenCenter style={[styles.flex1]}>
                                    <ViewRowCenter>
                                        {qrIcon(vw(9), vw(9))}
                                        <Nu16Reg>Mã: {paramPill.pill_id}</Nu16Reg>
                                    </ViewRowCenter>
                                    <TouchableOpacity
                                        onPress={() => { }}
                                        style={[styles.bgcolorWhite, styles.borderRadius100, styles.padding2vw]}>
                                        {heartIcon(vw(7), vw(7), paramPill.pill_favorite ? clrStyle.red : null)}
                                    </TouchableOpacity>
                                </ViewRowBetweenCenter>
                                {/* >> */}

                                <ViewRowBetweenCenter style={[styles.flex1]}>
                                    <Nu18Black style={[styles.flex1, { color: clrStyle.red }]}>{paramPill.pill_sellPrice} vnđ/vỉ</Nu18Black>
                                    <Nu16Reg style={[styles.flex1, styles.textRight]}>{paramPill.pill_packKind}</Nu16Reg>
                                </ViewRowBetweenCenter>
                                {/* >> */}

                                <ParaGener title={paramPill.pill_name + ` là thuốc gì?`} para={paramPill.pill_description} />
                                {/* >> */}

                                <ParaGener title='Chỉ định' para={paramPill.pill_indication} />
                                {/* >> */}

                                <ParaGener title='Chống chỉ định' para={paramPill.pill_contraindication} />
                                {/* >> */}

                                <ParaGener title='Thành phần' para={paramPill.pill_ingredient} />
                                {/* >> */}

                                <ParaGener title='Cách dùng' para={paramPill.pill_use} />
                                {/* >> */}

                                <ParaGener title='Liều lượng/ Liều dùng' para={paramPill.pill_dosage} />
                                {/* >> */}

                                <ParaGener title='Cơ chế tác dụng/ Dược lý học' para={paramPill.pill_pharmacology} />
                                {/* >> */}

                                <ParaGener title='Dược động học/ Dược động học' para={paramPill.pill_pharmacokinetics} />
                                {/* >> */}

                                <ParaGener title='Tác dụng phụ' para={paramPill.pill_sideEffects} />
                                {/* >> */}

                                <ParaGener title='Tương tác' para={paramPill.pill_interactions} />
                                {/* >> */}

                                <ParaGener title='Cảnh báo' para={paramPill.pill_precautions} />
                                {/* >> */}

                                <ParaGener title='Quá liều & quên liều' para={paramPill.pill_overdose} />
                                {/* >> */}

                                <ParaGener title='Xử lý quá liều' para={paramPill.pill_overdose_handling} />
                                {/* >> */}

                            </ViewCol>
                        </ScrollView>
                        <ViewRowBetweenCenter style={[styles.w100, styles.paddingH6vw, styles.paddingV3vw, { backgroundColor: clrStyle.blue50, paddingBottom: insets.bottom ? insets.bottom : vw(3) }]}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (currentNumOnCart > 0) {
                                        setCurrentNumOnCart(currentNumOnCart - 1)
                                    }
                                }}>
                                {minusIcon(vw(8), vw(8))}
                            </TouchableOpacity>
                            <ViewColCenter style={[styles.borderRadius10, { backgroundColor: clrStyle.green100, minWidth: vw(12), height: vw(12) }]}>
                                <TextInput
                                    keyboardType='numeric'
                                    onChangeText={(text) => {
                                        if (text == '') {
                                            setCurrentNumOnCart(0)
                                        } else {
                                            setCurrentNumOnCart(parseInt(text))
                                        }
                                    }}
                                    style={[styles.h100, styles.w100, styles.textCenter]}
                                    returnKeyLabel='done'
                                >
                                    <Nu18Reg style={[styles.w100]}>{currentNumOnCart}</Nu18Reg>
                                </TextInput>
                            </ViewColCenter>
                            <TouchableOpacity
                                onPress={() => {
                                    setCurrentNumOnCart(currentNumOnCart + 1)
                                }}>
                                {plusIcon(vw(8), vw(8))}
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => addItemToCart(CurrentCache, paramPill, currentNumOnCart, dispatchEditCart, dispatchAddToCart, () => navigation.navigate('BottomTab', { screen: 'Cart' }))}
                                style={[styles.paddingH8vw, styles.flexColCenter, styles.borderRadius10, { backgroundColor: clrStyle.blue100, height: vw(12) }]}>
                                <Nu18Reg style={{ color: clrStyle.pri4 }}>Thêm vào giỏ</Nu18Reg>
                            </TouchableOpacity>
                        </ViewRowBetweenCenter>
                    </>
                    :
                    <ViewColCenter style={[styles.flex1, styles.padding2vw]}>
                        <Nu18Reg>Đang tải dữ liệu</Nu18Reg>
                        <ActivityIndicator size='large' color={clrStyle.blue100} />
                    </ViewColCenter>
            }
        </SSBar >

    )
}

export function addItemToCart(
    CurrentCache: CurrentCache,
    paramPill: PillFormat,
    currentNumOnCart: number,
    editCartFnc: (item: CartFormat) => void,
    addToCartFnc: (item: CartFormat) => void,
    navFnc: () => void
) {
    const cart = CurrentCache.cart;
    const itemIndex = cart.findIndex((item) => item.pill.pill_id === paramPill.pill_id);

    if (paramPill.pill_quantity === 0) {
        return Alert.alert('Hết hàng', 'Xin lỗi, sản phẩm này đã hết hàng', [{ text: 'OK' }]);
    } else if (paramPill.pill_quantity < currentNumOnCart) {
        return Alert.alert('Số lượng không đủ', 'Xin lỗi, số lượng sản phẩm này không đủ', [{ text: 'OK' }]);
    }

    const newItem: CartFormat = { pill: paramPill, orderQuantity: currentNumOnCart };

    if (itemIndex >= 0) {
        if (cart[itemIndex].orderQuantity === currentNumOnCart) {
            return Alert.alert('Đã có trong giỏ hàng', 'Bạn có muốn tiến tới thanh toán không?', [
                { text: 'OK' },
                { text: 'Xem giỏ hàng', onPress: () => navFnc() },
            ]);
        }
        editCartFnc(newItem);
        Alert.alert('Đã cập nhật giỏ hàng', 'Bạn có muốn tiến tới thanh toán không?', [
            { text: 'OK' },
            { text: 'Xem giỏ hàng', onPress: () => navFnc() },
        ]);
    } else {
        if (newItem.orderQuantity == 0) {
            return Alert.alert('Số lượng không hợp lệ', 'Xin lỗi, số lượng sản phẩm phải lớn hơn 0', [{ text: 'OK' }]);
        }
        addToCartFnc(newItem);
        Alert.alert('Đã thêm vào giỏ hàng', 'Bạn có muốn tiến tới thanh toán không?', [
            { text: 'OK' },
            { text: 'Xem giỏ hàng', onPress: () => navFnc() },
        ]);
    }

}