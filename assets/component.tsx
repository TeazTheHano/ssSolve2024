// system imports
import React, { Component, ComponentType, ReactElement, ReactNode, useContext, useEffect, useRef, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image, FlatList, ImageBackground, Alert, Share, StatusBar, ImageStyle, Platform, PermissionsAndroid } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from "react-native";

// style import
import styles from "./stylesheet";
import { vw, vh, vmax, vmin } from './stylesheet';
import Svg, { SvgXml } from 'react-native-svg';

// SVG import
import { goldStar, lockIcon, noStar, peopleIcon, savedIcon, searchIcon, shareIcon, unSavedIcon, } from "./svgXml";
import clrStyle, { componentStyle } from "./componentStyleSheet";

// font import 

// ____________________END OF IMPORT_______________________


// UNIVERSE FUNCTION________________________________________

export const marginBottomForScrollView = (time?: number) => {
    return (
        <View style={[styles.h10vh]} />
    )
}

export const statusBarTransparency = (lightContent: boolean = true, margin: boolean = false) => {
    let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0
    return (
        <View>
            <StatusBar barStyle={lightContent ? 'light-content' : 'dark-content'}
                backgroundColor='rgba(0,0,0,0)'
                translucent={true}
            />
            {margin ? <View style={{ width: vw(100), height: statusBarHeight }}></View> : null}
        </View>
    )
}

// share fnc 

export const onShare = async () => {
    try {
        const result = await Share.share({
            message:
                'React Native | A framework for building native apps using React',
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error: any) {
        Alert.alert(error.message);
    }
};

export const ListGen = (data: string | Array<string | string[]>, FontClass1st: ComponentType<any>, useColor: string = clrStyle.white, FontClass2nd: ComponentType<any> = FontClass1st, bullet1st: string = '1', bullet2nd: string = '-', textIndent2nd: any = 0) => {
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

                : data.map((item, index) => {
                    if (typeof item === 'string') {
                        return (
                            <View key={index} style={[styles.flexRow, styles.w100]}>
                                <FontClass1st style={{ color: useColor }}>{bulletMark(bullet1st, index)} </FontClass1st>
                                <FontClass1st style={{ color: useColor }}>{item}</FontClass1st>
                            </View>
                        )
                    } else if (Array.isArray(item)) {
                        return (
                            <View key={index} style={[styles.w100, { paddingLeft: textIndent2nd }]}>
                                {item.map((subItem, subIndex) => {
                                    return (
                                        <View key={subIndex} style={[styles.flexRow]}>
                                            <FontClass2nd style={{ color: useColor }}>{bulletMark(bullet2nd, subIndex)} </FontClass2nd>
                                            <FontClass2nd style={{ color: useColor }}>{subItem}</FontClass2nd>
                                        </View>
                                    )
                                })}
                            </View>
                        )
                    }
                })}
        </View>
    )
}


/**
 * Formats a number by adding suffixes for thousands, millions, and billions.
 * @param num - The number to be formatted.
 * @param changeToChar - Whether to change the number to a character (K, M, B) or not.
 * @returns The formatted number as a string.
 */
export function formatNumber(num: number, changeToChar: boolean = true) {
    if (changeToChar) {
        if (num >= 1_000_000_000) {
            return `${(num / 1_000_000_000).toFixed(2)}B`;
        } else if (num >= 1_000_000) {
            return `${(num / 1_000_000).toFixed(2)}M`;
        } else if (num >= 1_000) {
            return `${(num / 1_000).toFixed(2)}K`;
        } else {
            return num.toString();
        }
    } else {
        return new Intl.NumberFormat('de-DE').format(num);
    }
}

// img picker and camera.
// require >>>> react-native-image-picker <<<< package
import { CameraOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';

const defaultCameraOptions: CameraOptions = {
    mediaType: 'photo',
    quality: 1,
};

export const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Camera Permission',
                    message: 'This app needs camera access to take pictures',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn(err);
            return false;
        }
    } else {
        return true;
    }
};

export const openCamera = async (saveImgFnc: any, options = defaultCameraOptions) => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
        console.log('Camera permission denied');
        return;
    }

    launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.errorCode) {
            console.log('ImagePicker Error: ', response.errorMessage);
            Alert.alert('Error', response.errorMessage || response.errorCode);
        } else if (response.assets && response.assets.length > 0) {
            saveImgFnc(response.assets[0].uri);
        }
    });
};

export const openGallery = async (saveImgFnc: any, options = defaultCameraOptions) => {
    launchImageLibrary(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.errorCode) {
            console.log('ImagePicker Error: ', response.errorMessage);
            Alert.alert('Error', response.errorMessage || response.errorCode);
        } else if (response.assets && response.assets.length > 0) {
            saveImgFnc(response.assets[0].uri);
        }
    });
}

// export async function searchEngine(keyword: string, dataBank: SetFormat[] | Desk[] | Card[], type: 'set' | 'desk' | 'card') {
//     keyword = keyword.trim();
//     let result: SetFormat[] | Desk[] | Card[] = [];
//     const regex = new RegExp(`\\b${keyword}`, 'i');

//     if (type === 'set' && dataBank as SetFormat[]) {
//         result = dataBank.filter((item): item is SetFormat =>
//             (item as SetFormat).name !== undefined && regex.test((item as SetFormat).name)
//         );
//     } else if (type === 'desk' && dataBank as Desk[]) {
//         result = dataBank.filter((item): item is Desk =>
//             (item as Desk).title !== undefined && regex.test((item as Desk).title)
//         );
//     } else if (type === 'card' && dataBank as Card[]) {
//         result = dataBank.filter((item): item is Card =>
//             (item as Card).front !== undefined && regex.test((item as Card).front)
//         );
//     }

//     if (keyword === '') {
//         return [];
//     }

//     return result;
// }

export const onRefresh = React.useCallback(() => {
    // setRefreshing(true);
    // setTimeout(() => {
    //     setRefreshing(false);
    //     navigation.reset({
    //         index: 0,
    //         routes: [{ name: 'Home' as never }],
    //     });
    // }, 1000);
}, []);

export const showInDeverlopFnc = () => {
    return Alert.alert('This function is in development')
}

// END OF UNIVERSE FUNCTION________________________________________