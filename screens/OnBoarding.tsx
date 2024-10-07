import { View, Text, SafeAreaView, StatusBar, Image, ImageStyle } from 'react-native'
import React from 'react'
import { Nu16Reg, Nu18Reg, Nu28Black, RoundBtn, SSBar, ViewColCenter, ViewColEvenlyCenter } from '../assets/Class'
import styles, { vw } from '../assets/stylesheet'
import { appleIcon, googleColorIcon, mailIcon } from '../assets/svgXml'
import clrStyle from '../assets/componentStyleSheet'
import { showInDeverlopFnc } from '../assets/component'
import { useNavigation } from '@react-navigation/native'

export default function OnBoarding() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={[styles.flex1, styles.marginHorizontal8vw,]}>
            <StatusBar barStyle='dark-content' backgroundColor={clrStyle.white} />
            <ViewColEvenlyCenter style={[styles.flex1]}>
                <Image source={require('../assets/image/logo.png')} resizeMethod='resize' resizeMode='contain' style={[styles.w100, styles.h30vh] as ImageStyle} />
                <ViewColCenter style={[styles.gap2vw]}>
                    <Nu28Black>Khám phá ứng dụng</Nu28Black>
                    <Nu16Reg style={[styles.textCenter]}>Bạn có thể tạo tài khoản mới bằng các liên kết dưới đây:</Nu16Reg>
                </ViewColCenter>
                <ViewColCenter style={[styles.gap2vw, styles.w100,]}>
                    <RoundBtn title='Tiếp tục với Google' icon={googleColorIcon(vw(6), vw(6))} onPress={showInDeverlopFnc} textColor='white' bgColor={clrStyle.blue100} textClass={Nu18Reg} border customStyle={[styles.borderRadius100]} />
                    <RoundBtn title='Tiếp tục với Apple' icon={appleIcon(vw(6), vw(6))} onPress={showInDeverlopFnc} textColor='white' bgColor={clrStyle.blue100} textClass={Nu18Reg} border customStyle={[styles.borderRadius100]} />
                    <RoundBtn title='Tiếp tục với email' icon={mailIcon(vw(6), vw(6), clrStyle.white)} onPress={() => { navigation.navigate('Login' as never) }} textColor='white' bgColor={clrStyle.blue100} textClass={Nu18Reg} border customStyle={[styles.borderRadius100]} />
                </ViewColCenter>
            </ViewColEvenlyCenter>
        </SafeAreaView>
    )
}