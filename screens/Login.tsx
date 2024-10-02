import { View, Text, SafeAreaView, TouchableOpacity, Alert, ImageStyle, Image, StatusBar } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { InputCardVer1, Nu18Reg, Nu24Black, Nu24Bold, RoundBtn, ViewColCenter, ViewColEvenlyCenter, ViewRowBetweenCenter, ViewRowCenter, WorkSan10Reg, WorkSan12Bold, WorkSan12Reg, WorkSan14Reg, WorkSan16Bold } from '../assets/Class'
import styles, { vw } from '../assets/stylesheet'
import clrStyle from '../assets/componentStyleSheet'
import { SvgXml } from 'react-native-svg'
import { getUser, saveUser } from '../data/storageFunc'
import { useNavigation } from '@react-navigation/native'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, User } from "firebase/auth";
import { appleIcon, googleColorIcon } from '../assets/svgXml'
import { showInDeverlopFnc } from '../assets/component'
import { RootContext, setUser } from '../data/store'

export default function Login() {
    const navigation = useNavigation()
    const auth = getAuth()
    const [CurrentCache, dispatch] = React.useContext(RootContext);

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [emailType, setEmailType] = React.useState('email')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [userName, setUserName] = React.useState('')
    // TODO: change and make fnc to upload image
    const [avtURL, setAvtURL] = React.useState("https://cdn.oneesports.gg/cdn-data/2024/07/ZenlessZoneZero_Agent_EllenJoe.jpg")

    const [isShowSignUp, setIsShowSignUp] = React.useState(false)
    const [isHidePassword, setIsHidePassword] = React.useState(true)
    const [isRememberLogin, setIsRememberLogin] = React.useState(false)

    function showPass() {
        setIsHidePassword(!isHidePassword)
    }

    async function signUpHandle(email: string, password: string, confirmPassword: string, userName: string, avtURL: string) {
        email = email.trim()
        password = password.trim()
        confirmPassword = confirmPassword.trim()
        userName = userName.trim()

        if (password !== confirmPassword) {
            return Alert.alert('Mật khẩu không khớp')
        }
        if (email === '' || password === '' || confirmPassword === '' || userName === '') {
            return Alert.alert('Vui lòng điền đủ thông tin')
        }
        if (password.length < 8) {
            return Alert.alert('Mật khẩu phải có ít nhất 8 ký tự')
        }
        if (!email.includes('@')) {
            return Alert.alert('Email không hợp lệ')
        }
        try {
            // TODO: firebase auth
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    let user = auth.currentUser;
                    if (user) {
                        updateProfile(user, {
                            displayName: userName,
                            photoURL: avtURL,
                        })
                            .then(() => {
                                console.log("User profile updated.");
                            })
                            .catch((error) => {
                                console.error("Error updating profile:", error);
                            });
                    }
                })
                .then(() => {
                    let user = {
                        email: email,
                        name: userName,
                        password: password,
                        imgAddress: avtURL
                    }
                    saveUser(user)
                    dispatch(setUser(user));
                })
                .then(() => {
                    return navigation.navigate('BottomTab' as never)
                })

        } catch (error) {
            console.log(error)
        }
    }

    async function signInHandle(email: string, password: string) {
        email = email.trim()
        password = password.trim()
        if (email === '' || password === '') {
            return Alert.alert('Vui lòng điền đủ thông tin')
        }
        try {
            await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential;

                    if (user.user.email) {
                        let userObj = {
                            email: user.user.email,
                            name: user.user.displayName ? user.user.displayName : user.user.email,
                            password: password,
                            imgAddress: user.user.photoURL ? user.user.photoURL : ''
                        }
                        saveUser(userObj)
                        dispatch(setUser(userObj));
                    } else {
                        return Alert.alert('Email hoặc mật khẩu bạn nhập chưa đúng')
                    }
                }).then(() => {
                    return navigation.navigate('BottomTab' as never)
                })
        } catch (error) {
            console.log(error)
            return Alert.alert('Email hoặc mật khẩu bạn nhập chưa đúng')
        }
    }
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();
    const ref_input5 = useRef();

    return (
        <SafeAreaView style={[styles.flex1]}>
            <StatusBar barStyle='dark-content' backgroundColor={clrStyle.white} />
            <ViewColEvenlyCenter style={[styles.flex1, styles.marginHorizontal8vw, styles.paddingV4vw]}>
                <Image source={require('../assets/image/Horizon-logo.png')} resizeMethod='resize' resizeMode='contain' style={[styles.w80, styles.alignSelfCenter, styles.h10vw] as ImageStyle} />
                <ViewColCenter style={[styles.w100, styles.gap2vw]}>
                    {
                        isShowSignUp ?
                            <>
                                <Nu24Black style={[styles.padding10]}>Đăng ký</Nu24Black>
                                <View>
                                    <WorkSan14Reg style={{ color: clrStyle.grey30 }}>Tên của bạn</WorkSan14Reg>
                                    <InputCardVer1
                                        placeholder='Nguyễn Văn A'
                                        value={userName}
                                        onChangeText={setUserName}
                                        autoCapitalize='words'
                                        textClass2={WorkSan14Reg}
                                        customStyle={[styles.marginVertical1vw, styles.padding3vw, styles.borderRadius20, { borderColor: clrStyle.grey70, backgroundColor: clrStyle.green100, }]}
                                        returnKeyType='next'
                                        onSubmitEditing={() => { if (ref_input2.current) (ref_input2.current as any).focus() }}
                                    />
                                </View>
                                <View>
                                    <WorkSan14Reg style={{ color: clrStyle.grey30 }}>Địa chỉ email hoặc số điện thoại</WorkSan14Reg>
                                    <InputCardVer1
                                        placeholder='example@gmail.com'
                                        value={email}
                                        onChangeText={setEmail}
                                        textContentType={emailType === 'phone' ? 'telephoneNumber' : 'emailAddress'}
                                        textClass2={WorkSan14Reg}
                                        customStyle={[styles.marginVertical1vw, styles.padding3vw, styles.borderRadius20, { borderColor: clrStyle.grey70, backgroundColor: clrStyle.green100, }]}
                                        inputRef={ref_input2}
                                        returnKeyType='next'
                                        onSubmitEditing={() => { if (ref_input3.current) (ref_input3.current as any).focus() }}
                                    />
                                </View>
                                <View>
                                    <WorkSan14Reg style={{ color: clrStyle.grey30 }}>Đặt mật khẩu</WorkSan14Reg>
                                    <InputCardVer1
                                        placeholder='Tối thiểu 8 ký tự'
                                        value={password}
                                        onChangeText={setPassword}
                                        textContentType='password'
                                        hideContentFnc={showPass}
                                        hideContent={isHidePassword}
                                        textClass2={WorkSan14Reg}
                                        customStyle={[styles.marginVertical1vw, styles.padding3vw, styles.borderRadius20, { borderColor: clrStyle.grey70, backgroundColor: clrStyle.green100, }]}
                                        inputRef={ref_input3}
                                        returnKeyType='next'
                                        onSubmitEditing={() => { if (ref_input4.current) (ref_input4.current as any).focus() }}
                                    />
                                </View>
                                <View>
                                    <WorkSan14Reg style={{ color: clrStyle.grey30 }}>Xác nhận mật khẩu</WorkSan14Reg>
                                    <InputCardVer1
                                        placeholder='Nhập lại mật khẩu'
                                        value={confirmPassword}
                                        onChangeText={setConfirmPassword}
                                        textContentType='password'
                                        hideContent={isHidePassword}
                                        textClass2={WorkSan14Reg}
                                        customStyle={[styles.marginVertical1vw, styles.padding3vw, styles.borderRadius20, { borderColor: clrStyle.grey70, backgroundColor: clrStyle.green100, }]}
                                        inputRef={ref_input4}
                                        returnKeyType='done'
                                        onSubmitEditing={() => { signUpHandle(email, password, confirmPassword, userName, avtURL) }}
                                    />
                                </View>
                            </> :
                            <>
                                <Nu24Black style={[styles.padding10]}>Đăng nhập</Nu24Black>
                                <View>
                                    <WorkSan14Reg style={{ color: clrStyle.grey30 }}>Địa chỉ email hoặc số điện thoại</WorkSan14Reg>
                                    <InputCardVer1
                                        textClass2={WorkSan14Reg}
                                        placeholder='example@gmail.com'
                                        value={email}
                                        onChangeText={setEmail}
                                        textContentType={emailType === 'phone' ? 'telephoneNumber' : 'emailAddress'}
                                        customStyle={[styles.marginVertical1vw, styles.padding3vw, styles.borderRadius20, { borderColor: clrStyle.grey70, backgroundColor: clrStyle.green100, }]}
                                        returnKeyType='next'
                                        onSubmitEditing={() => { if (ref_input5.current) (ref_input5.current as any).focus() }}
                                    />
                                </View>
                                <View>
                                    <WorkSan14Reg style={{ color: clrStyle.grey30 }}>Mật khẩu</WorkSan14Reg>
                                    <InputCardVer1
                                        textClass2={WorkSan14Reg}
                                        placeholder='Tối thiểu 8 ký tự'
                                        value={password}
                                        onChangeText={setPassword}
                                        textContentType='password'
                                        hideContentFnc={showPass}
                                        hideContent={isHidePassword}
                                        customStyle={[styles.marginVertical1vw, styles.padding3vw, styles.borderRadius20, { borderColor: clrStyle.grey70, backgroundColor: clrStyle.green100, }]}
                                        returnKeyType='done'
                                        onSubmitEditing={() => { signInHandle(email, password) }}
                                        inputRef={ref_input5}
                                    />
                                </View>
                                <ViewRowBetweenCenter style={[styles.w100]}>
                                    <TouchableOpacity onPress={() => { setIsRememberLogin(!isRememberLogin) }}>
                                        <ViewRowCenter style={[styles.gap1vw]}>
                                            <SvgXml xml={isRememberLogin ? `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9" stroke="#7D8792" style="stroke:#7D8792;stroke:color(display-p3 0.4902 0.5294 0.5725);stroke-opacity:1;" stroke-width="2"/><path d="M5.49994 9.5L8.99994 13L14.4999 7.5" stroke="#7D8792" style="stroke:#7D8792;stroke:color(display-p3 0.4902 0.5294 0.5725);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round"/></svg>` : `<svg width="20" height="20" viewBox="0 0 20 20" fill="#7D8792" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9" stroke="#7D8792" style="stroke:#7D8792;stroke:color(display-p3 0.4902 0.5294 0.5725);stroke-opacity:1;" stroke-width="2"/><path d="M5.49994 9.5L8.99994 13L14.4999 7.5" stroke="white" style="stroke:#7D8792;stroke:color(display-p3 0.4902 0.5294 0.5725);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round"/></svg>`} width={vw(5)} height={vw(5)} />
                                            <WorkSan14Reg style={{ color: clrStyle.grey30 }}>Ghi nhớ</WorkSan14Reg>
                                        </ViewRowCenter>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { Alert.alert(`Vui lòng liên hệ kỹ thuật viên được hỗ trợ`) }}>
                                        <WorkSan14Reg style={{ color: clrStyle.grey30 }}>Quên mật khẩu?</WorkSan14Reg>
                                    </TouchableOpacity>
                                </ViewRowBetweenCenter>
                            </>
                    }
                </ViewColCenter>
                <RoundBtn title={isShowSignUp ? 'Đăng ký' : 'Đăng nhập'} textColor={clrStyle.white} textClass={WorkSan16Bold} onPress={() => isShowSignUp ? signUpHandle(email, password, confirmPassword, userName, avtURL) : signInHandle(email, password)} customStyle={[styles.w84vw, styles.padding5vw, styles.borderRadius20, styles.justifyContentCenter, { backgroundColor: clrStyle.blue100 }]} />

                <ViewColCenter style={[styles.w100, styles.gap6vw]}>
                    <ViewColCenter style={[styles.positionRelative]}>
                        <View style={[styles.paddingH2vw, { backgroundColor: clrStyle.white }]}><WorkSan14Reg style={{ color: clrStyle.grey50 }}>Hoặc đăng nhập với </WorkSan14Reg></View>
                        <View style={[styles.w100, styles.positionAbsolute, { zIndex: -1, borderColor: clrStyle.grey50, borderBottomWidth: 1 }]}></View>
                    </ViewColCenter>
                    <ViewRowBetweenCenter style={[styles.w100, styles.gap4vw]}>
                        <RoundBtn title='Google' icon={googleColorIcon(vw(6), vw(6))} onPress={showInDeverlopFnc} textColor='white' bgColor={clrStyle.blue100} textClass={Nu18Reg} border customStyle={[styles.flex1, styles.justifyContentCenter]} />
                        <RoundBtn title='Apple' icon={appleIcon(vw(6), vw(6))} onPress={showInDeverlopFnc} textColor='white' bgColor={clrStyle.blue100} textClass={Nu18Reg} border customStyle={[styles.flex1, styles.justifyContentCenter]} />
                    </ViewRowBetweenCenter>
                    <TouchableOpacity onPress={() => setIsShowSignUp(!isShowSignUp)}>
                        <WorkSan12Reg>{isShowSignUp ? `Đã có tài khoản?` : `Chưa có tài khoản?`} <WorkSan12Bold>{isShowSignUp ? `Đăng nhập` : `Đăng ký`}</WorkSan12Bold></WorkSan12Reg>
                    </TouchableOpacity>
                </ViewColCenter>
            </ViewColEvenlyCenter>
            <Image source={require('../assets/image/loginObject.png')} resizeMethod='resize' resizeMode='contain' style={[styles.w40vw, styles.h40vw, styles.positionAbsolute, { right: -vw(15), bottom: -vw(15) }] as ImageStyle} />
        </SafeAreaView >
    )
}