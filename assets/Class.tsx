// system import
import React, { Component, useState } from 'react';
import { ImageBackground, Platform, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View, Image, ImageStyle, StatusBarStyle, ReturnKeyType, KeyboardType, FlatList } from 'react-native';

// style import
import styles from './stylesheet';
import { vw, vh } from './stylesheet';

// component import
import { imgSourceHandle, marginBottomForScrollView } from './component';

// svg import
import { cameraIcon, filterIcon, goldStar, heartIcon, imgPickerIcon, inVisibilityIcon, leftArrow, lockIcon, navBellIcon, noStar, peopleIcon, pillOrderIcon, savedIcon, searchIcon, sharpLeftArrow, unSavedIcon, visibilityIcon, xIcon } from './svgXml';
import clrStyle from './componentStyleSheet';
import { useNavigation } from '@react-navigation/native';
import { CurrentCache } from '../data/store';
import { PillFormat } from '../data/interfaceFormat';

// other import


// ____________________END OF IMPORT_______________________

// ____________________START OF UNIVERSAL CLASS_______________________


/**
 * Component that renders a view with a colored status bar.
 *
 * @component
 * @example
 * // Usage:
 * <SaveViewWithColorStatusBar
 *   StatusBarColor="#FF0000"
 *   StatusBarLightContent={true}
 *   SameColorBottom={true}
 *   StatusBarMargin={true}
 *   bgColor="#FFFFFF"
 *   StatusBarTranslucent={false}
 * >
 *   // Content goes here
 * </SaveViewWithColorStatusBar>
 *
 * @param {React.ReactNode} children - The content to be rendered inside the component.
 * @param {string} StatusBarColor - The color of the status bar.
 * @param {boolean} StatusBarLightContent - Determines if the status bar content should be light or dark.
 * @param {boolean} SameColorBottom - Determines if the bottom of the view should have the same color as the status bar.
 * @param {boolean} StatusBarMargin - Determines if a margin should be added to the top of the view to accommodate the status bar.
 * @param {string} bgColor - The background color of the view.
 * @param {boolean} StatusBarTranslucent - Determines if the status bar should be translucent.
 *
 * @returns {React.ReactNode} The rendered component.
 */
export class SaveViewWithColorStatusBar extends Component<{ children?: React.ReactNode, StatusBarColor?: string, StatusBarLightContent?: boolean, SameColorBottom?: boolean, StatusBarMargin?: boolean, bgColor?: string, StatusBarTranslucent?: boolean }> {
    render() {
        const { children, bgColor, SameColorBottom, StatusBarColor, StatusBarLightContent, StatusBarMargin, StatusBarTranslucent } = this.props;
        let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0
        return (
            <SafeAreaView style={[styles.flex1, { backgroundColor: SameColorBottom ? StatusBarColor : bgColor }]}>
                {StatusBarColor ? <View style={[styles.w100vw, styles.h50vh, styles.positionAbsolute, { backgroundColor: StatusBarColor }]} /> : null}
                <View>
                    <StatusBar barStyle={StatusBarLightContent ? 'light-content' : 'dark-content'}
                        backgroundColor={StatusBarColor ? StatusBarColor : 'rgba(0,0,0,0)'}
                        translucent={StatusBarTranslucent ? true : false}
                    />
                    {StatusBarMargin ? <View style={{ width: vw(100), height: statusBarHeight }}></View> : null}
                </View>
                <View style={[styles.flex1, { backgroundColor: bgColor ? bgColor : 'rgb(242,242,242)' }]}>
                    {children}
                </View>
            </SafeAreaView>
        )
    }
}

export class ViewRow extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexRow, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewCol extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexCol, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewRowCenter extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexRowCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColCenter extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexColCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewRowBetweenCenter extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexRowBetweenCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColBetweenCenter extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexColBetweenCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewRowEvenlyCenter extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexRowEvenlyCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColEvenlyCenter extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexColEvenlyCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColEndCenter extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexColEndCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewRowStartCenter extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexRowStartCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

export class ViewColStartCenter extends Component<{ children?: React.ReactNode, style?: any }> {
    render() {
        return (
            <View style={[styles.flexColStartCenter, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

// ____________________END OF UNIVERSAL CLASS_______________________

// ____________________START OF FONT_______________________
export class Nu28Black extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'Nunito-Black', fontSize: vw(7), lineHeight: vw(9), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class Nu24Black extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'Nunito-Black', fontSize: vw(6), lineHeight: vw(8), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class Nu20Black extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'Nunito-Black', fontSize: vw(5), lineHeight: vw(7), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class Nu18Black extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'Nunito-Black', fontSize: vw(4.5), lineHeight: vw(6), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class Nu24Bold extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'Nunito-Bold', fontSize: vw(6), lineHeight: vw(8), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class Nu20Bold extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'Nunito-Bold', fontSize: vw(5), lineHeight: vw(7), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class Nu18Bold extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'Nunito-Bold', fontSize: vw(4.5), lineHeight: vw(6), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class Nu16Bold extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'Nunito-Bold', fontSize: vw(4), lineHeight: vw(5.5), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class Nu16BoldLH1p5 extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'Nunito-Bold', fontSize: vw(4), lineHeight: vw(4 * 1.5), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class Nu14Bold extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'Nunito-Bold', fontSize: vw(3.5), lineHeight: vw(5), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class Nu20Reg extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'Nunito-Regular', fontSize: vw(5), lineHeight: vw(7), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class Nu18Reg extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'Nunito-Regular', fontSize: vw(4.5), lineHeight: vw(6), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class Nu16Reg extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'Nunito-Regular', fontSize: vw(4), lineHeight: vw(5.5), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class Nu16RegLH1p5 extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'Nunito-Regular', fontSize: vw(4), lineHeight: vw(4 * 1.5), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class Nu14Reg extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'Nunito-Regular', fontSize: vw(3.5), lineHeight: vw(5), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class Nu12Reg extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'Nunito-Regular', fontSize: vw(3), lineHeight: vw(4), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class WorkSan20Reg extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'WorkSans-Regular', fontSize: vw(5), lineHeight: vw(7), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class WorkSan18Reg extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'WorkSans-Regular', fontSize: vw(4.5), lineHeight: vw(6), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class WorkSan16Reg extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'WorkSans-Regular', fontSize: vw(4), lineHeight: vw(5.5), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class WorkSan14Reg extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'WorkSans-Regular', fontSize: vw(3.5), lineHeight: vw(5), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class WorkSan12Reg extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'WorkSans-Regular', fontSize: vw(3), lineHeight: vw(4), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class WorkSan10Reg extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'WorkSans-Regular', fontSize: vw(2.5), lineHeight: vw(3.5), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class WorkSan16Bold extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'WorkSans-Bold', fontSize: vw(4), lineHeight: vw(5.5), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class WorkSan14Bold extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'WorkSans-Bold', fontSize: vw(3.5), lineHeight: vw(5), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

export class WorkSan12Bold extends Component<{ children: React.ReactNode, style?: any, numberOfLines?: number }> {
    render() {
        const { children, style, numberOfLines } = this.props;

        return (
            <Text style={[{ color: 'black', fontFamily: 'WorkSans-Bold', fontSize: vw(3), lineHeight: vw(4), }, style]} numberOfLines={numberOfLines}>
                {children}
            </Text>
        );
    }
}

// ____________________END OF FONT_______________________

/**
 * A React component that renders a customizable status bar and its content.
 * 
 * @remarks
 * This component is designed to work with both Android and iOS platforms.
 * It allows customization of the status bar's color, content style, and translucency.
 * Additionally, it provides an option to add a margin below the status bar on Android devices.
 * 
 * @param barColor - Optional. The color of the status bar background.
 * @param trans - Optional. If true, the status bar will be translucent.
 * @param children - Optional. The content to be rendered below the status bar.
 * @param bgColor - Optional. The background color of the view containing the status bar and its content.
 * @param barContentStyle - Optional. The style of the status bar content (e.g., 'dark-content', 'light-content').
 * @param notMargin - Optional. If true, no margin will be added below the status bar on Android devices.
 * 
 * @returns A React node containing the status bar and its content.
 */
export class SSBar extends Component<{ barColor?: any, trans?: boolean, children?: React.ReactNode, bgColor?: any, barContentStyle?: StatusBarStyle, notMargin?: boolean }> {
    render(): React.ReactNode {
        let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0
        return (
            <View style={[styles.flex1, { backgroundColor: this.props.bgColor ? this.props.bgColor : clrStyle.white }]}>
                <>
                    <StatusBar
                        barStyle={this.props.barContentStyle ? this.props.barContentStyle : 'dark-content'}
                        translucent={this.props.trans ? true : false}
                        backgroundColor={this.props.barColor ? this.props.barColor : 'white'} />
                    {Platform.OS === 'android' && !this.props.notMargin ? <View style={{ height: statusBarHeight * 1.5 }}></View> : null}
                </>
                {this.props.children}
            </View>
        )
    }
}

export class SSBarWithSaveArea extends Component<{ barColor?: any, trans?: boolean, children?: React.ReactNode, bgColor?: any, barContentStyle?: StatusBarStyle, margin?: boolean }> {
    render(): React.ReactNode {
        let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0
        return (
            <SafeAreaView style={[styles.flex1, { backgroundColor: this.props.bgColor ? this.props.bgColor : clrStyle.white }]}>
                <StatusBar
                    barStyle={this.props.barContentStyle ? this.props.barContentStyle : 'dark-content'}
                    translucent={this.props.trans ? true : false}
                    backgroundColor={this.props.barColor ? this.props.barColor : 'white'} />
                {Platform.OS === 'android' && this.props.margin ? <View style={{ height: statusBarHeight }}></View> : null}
                {this.props.children}
            </SafeAreaView>
        )
    }
}

export class InputCardVer1 extends Component<{
    customStyle?: any
    value: any
    onChangeText: (input: any) => void
    hideContent?: boolean,
    hideContentFnc?: (value: boolean) => void,
    textContentType?: string | undefined
    title?: string
    textClass1?: React.ComponentType<any>
    textClass2?: React.ComponentType<any>
    placeholder?: string
    titleColor?: string
    placeholderColor?: string
    valueColor?: string
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined
    autoFocus?: boolean
    returnKeyType?: ReturnKeyType
    keyboardType?: KeyboardType
    onSubmitEditing?: () => void
    blurOnSubmit?: boolean
    inputRef?: any
}> {
    render() {
        const { customStyle, onChangeText, value, textClass1, textClass2, hideContent, hideContentFnc, textContentType, title, placeholder, titleColor, placeholderColor, valueColor, autoCapitalize } = this.props;
        let type: string = textContentType ? textContentType : "none"
        let TextClass1 = textClass1 ? textClass1 : Text
        let TextClass2 = textClass2 ? textClass2 : Text
        return (
            <View
                style={[styles.w100, styles.padding2vw, styles.flexRow, styles.alignItemsCenter, styles.borderRadius2vw, styles.marginBottom4vw, { borderWidth: 1, borderColor: 'rgba(0,0,0,1)' }, customStyle]} >
                {title ?
                    <TextClass1 style={[styles.paddingH4vw, { color: titleColor ? titleColor : clrStyle.black }]}>{title}:</TextClass1>
                    : null}
                <TextInput
                    onChangeText={onChangeText}
                    autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
                    placeholder={placeholder ? placeholder : ''}
                    placeholderTextColor={placeholderColor ? placeholderColor : clrStyle.grey2}
                    secureTextEntry={hideContent ? hideContent : false}
                    passwordRules={type === 'password' ? "minlength: 8; maxlength: 100" : ''}
                    textContentType={type as "none"}
                    maxLength={type === 'password' ? 100 : 100}
                    style={[styles.flex1, styles.padding1vw,]}
                    autoFocus={this.props.autoFocus}
                    returnKeyType={this.props.returnKeyType ? this.props.returnKeyType : 'done'}
                    keyboardType={this.props.keyboardType ? this.props.keyboardType : 'default'}
                    onSubmitEditing={this.props.onSubmitEditing ? this.props.onSubmitEditing : () => { }}
                    blurOnSubmit={this.props.blurOnSubmit ? this.props.blurOnSubmit : false}
                    ref={this.props.inputRef ? this.props.inputRef : null}
                ><TextClass2 style={[styles.flex1]}>{value}</TextClass2></TextInput>
                {hideContentFnc ?
                    <TouchableOpacity
                        onPress={() => { hideContentFnc && hideContentFnc(!hideContent) }}
                        style={[{ paddingRight: vw(2) }]}>
                        {hideContent ? inVisibilityIcon(vw(6), vw(6)) : visibilityIcon(vw(6), vw(6))}
                    </TouchableOpacity>
                    : null}
            </View>
        )
    }
}

/**
 * A React component that renders a customizable round button.
 *
 * @component
 * @example
 * ```tsx
 * <RoundBtn
 *   icon={<SomeIcon />}
 *   title="Click Me"
 *   onPress={() => console.log('Button pressed')}
 *   bgColor="#ff0000"
 *   textClass={CustomTextComponent}
 *   textColor="#ffffff"
 *   iconColor="#000000"
 *   border={true}
 *   borderColor="#00ff00"
 *   customStyle={{ margin: 10 }}
 * />
 * ```
 *
 * @prop {React.ReactNode} [icon] - The icon to display inside the button.
 * @prop {string} [title] - The text to display inside the button.
 * @prop {() => void} onPress - The function to call when the button is pressed.
 * @prop {string} [bgColor] - The background color of the button.
 * @prop {React.ComponentType<any>} [textClass] - The custom text component to use for the button text.
 * @prop {string} [textColor] - The color of the button text.
 * @prop {string} [iconColor] - The color of the icon.
 * @prop {boolean} [border] - Whether the button should have a border.
 * @prop {string} [borderColor] - The color of the border.
 * @prop {any} [customStyle] - Additional custom styles for the button.
 */
export class RoundBtn extends Component<{
    icon?: React.ReactNode
    title?: string
    onPress: () => void
    bgColor?: string
    textClass?: React.ComponentType<any>
    textColor?: string
    iconColor?: string
    border?: boolean
    borderColor?: string
    customStyle?: any
}> {
    render() {
        const { icon, title, onPress, bgColor, textClass, textColor, iconColor, border, borderColor, customStyle } = this.props;
        let TextClass = textClass ? textClass : Text
        return (
            <TouchableOpacity
                onPress={onPress}
                style={[styles.flexRow, styles.w100, styles.alignItemsCenter, styles.padding4vw, styles.gap3vw, styles.borderRadius10, styles.overflowHidden, { backgroundColor: bgColor ? bgColor : undefined, borderWidth: border ? 1 : 0, }, customStyle]}>
                {icon ? icon : null}
                <TextClass style={[{ color: textColor ? textColor : clrStyle.black }]}>{title}</TextClass>
            </TouchableOpacity>
        );
    }
}

export class SearchBox extends Component<{
    customStyle?: any
    placeholder?: string
    placeholderTextColor?: any
    value: string
    onChangeText?: (input: any) => void
    onClear?: () => void
    showSearchIcon?: boolean
    fontFam?: string
    currentCache?: CurrentCache
}> {
    render() {
        async function searchEngine(keyword: string, dataBank: any, type: 'set' | 'desk' | 'card') {
            keyword = value.trim();
            // keyword = keyword.trim();
            let result: any = [];
            const regex = new RegExp(`\\b${keyword}`, 'i');

            if (keyword === '') {
                return [];
            }
        }

        const { customStyle, placeholder, placeholderTextColor, value, onChangeText, onClear, showSearchIcon, fontFam } = this.props;
        return (
            <ViewRowBetweenCenter
                style={[styles.gap3vw, styles.borderRadius10, styles.paddingH4vw, { backgroundColor: clrStyle.white, borderColor: clrStyle.neu3 }, customStyle]}>
                {showSearchIcon ? searchIcon(vw(5), vw(5), clrStyle.black) : null}
                <TextInput
                    style={[styles.flex1, styles.paddingV2vw, { color: clrStyle.black, fontSize: vw(3.5), fontFamily: fontFam ? fontFam : undefined }]}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder ? placeholder : 'Search'}
                    autoFocus={this.props.currentCache?.searchFocus}
                    placeholderTextColor={placeholderTextColor ? placeholderTextColor : ''}
                />
                <TouchableOpacity
                    onPress={onClear}
                    style={{ display: value ? 'flex' : 'none' }}
                >
                    {xIcon(vw(5), vw(5), clrStyle.black)}
                </TouchableOpacity>
            </ViewRowBetweenCenter>
        );
    }
}

interface SearchBoxState {
    showSearch: boolean;
    searchInput: string;

}

export class TopBarSS extends Component<{
    title?: string
    wellcome?: boolean
    subTitle?: string
    navigation?: any
    currentCache?: CurrentCache
    filterFnc?: () => void
    unenableSearch?: boolean
    unenableRightIcon?: boolean
}, SearchBoxState> {
    constructor(props: any) {
        super(props);
        this.state = {
            showSearch: false,
            searchInput: '',
        };
    }
    render() {
        const setSearchInput = (input: string) => {
            this.setState({ searchInput: input });
        };

        return (
            <ViewCol style={[styles.paddingH6vw]}>
                <ViewRowBetweenCenter>
                    <ViewRowCenter style={[styles.gap4vw, styles.flex1]}>
                        {this.props.navigation ?
                            <TouchableOpacity
                                onPress={() => { this.props.navigation ? this.props.navigation.goBack() : null }}
                                style={[styles.borderRadius100, styles.flexColCenter, { width: vw(8.5), height: vw(8.5), backgroundColor: clrStyle.grey10 }]}>{sharpLeftArrow(vw(6), vw(6), clrStyle.grey100)}
                            </TouchableOpacity> : null}
                        <View style={[styles.flex1]}>
                            {this.props.wellcome ? <Nu18Reg style={[{ color: clrStyle.blue100 }]}>Xin chào <Nu18Black>{this.props.title}</Nu18Black></Nu18Reg> : <Nu18Black style={[{ color: clrStyle.blue100 }]}>{this.props.title}</Nu18Black>}
                            {this.props.subTitle ? <Nu12Reg style={{ color: clrStyle.grey30 }}>{this.props.subTitle}</Nu12Reg> : null}
                        </View>
                    </ViewRowCenter>
                    {this.props.unenableRightIcon ? null :
                        <ViewRowCenter style={[styles.gap1vw]}>
                            <TouchableOpacity style={[styles.borderRadius100, styles.flexColCenter, { width: vw(8.5), height: vw(8.5), backgroundColor: clrStyle.grey10 }]}>
                                {heartIcon(vw(6), vw(6))}
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.borderRadius100, styles.flexColCenter, { width: vw(8.5), height: vw(8.5), }]}>
                                {navBellIcon(vw(6), vw(6))}
                            </TouchableOpacity>
                        </ViewRowCenter>
                    }
                </ViewRowBetweenCenter>
                {this.props.unenableSearch ? null :
                    <ViewRowBetweenCenter style={[styles.gap2vw]}>
                        <SearchBox
                            showSearchIcon
                            placeholder='Tìm kiếm thuốc, triệu chứng, ...'
                            customStyle={[styles.border1, styles.paddingV1vw, styles.marginVertical3vw, styles.flex1, { borderColor: clrStyle.grey30, borderRadius: vw(4) }]}
                            value={this.state.searchInput}
                            onChangeText={setSearchInput}
                            currentCache={this.props.currentCache}
                        />
                        {this.props.filterFnc ?
                            <TouchableOpacity onPress={this.props.filterFnc}>
                                {filterIcon(vw(6), vw(6))}
                            </TouchableOpacity>
                            : null
                        }
                    </ViewRowBetweenCenter>
                }

            </ViewCol>
        )
    }
}

export class QuickBtn extends Component<{
    fnc1?: () => void
    fnc2?: () => void
    fnc3?: () => void
    title?: string
    style?: any
}> {
    render() {
        return (
            <ViewCol style={[styles.gap4vw, styles.marginTop4vw, styles.padding5vw, styles.marginHorizontal6vw, styles.borderRadius40, { backgroundColor: clrStyle.green100 }, this.props.style]}>
                {this.props.title ? <Nu20Black style={[styles.marginVertical2vw]}>{this.props.title}</Nu20Black> : null}
                <RoundBtn
                    textClass={Nu18Reg}
                    title='Nhập triệu chứng'
                    onPress={() => { this.props.fnc1 ? this.props.fnc1() : null }}
                    bgColor={clrStyle.blue100}
                    textColor={clrStyle.white}
                    customStyle={[styles.justifyContentCenter, styles.borderRadius4vw, { display: this.props.fnc1 ? 'flex' : 'none' }]}
                />
                <RoundBtn
                    textClass={Nu18Reg}
                    title='Tìm máy bán thuốc'
                    onPress={() => { this.props.fnc2 ? this.props.fnc2() : null }}
                    bgColor={clrStyle.blue50}
                    textColor={clrStyle.blue100}
                    customStyle={[styles.justifyContentCenter, styles.borderRadius4vw, { display: this.props.fnc2 ? 'flex' : 'none' }]}
                />
                <RoundBtn
                    textClass={Nu18Reg}
                    title='Mua thuốc'
                    onPress={() => { this.props.fnc3 ? this.props.fnc3() : null }}
                    bgColor={clrStyle.red}
                    textColor={clrStyle.white}
                    customStyle={[styles.justifyContentCenter, styles.borderRadius4vw, { display: this.props.fnc3 ? 'flex' : 'none' }]}
                />
            </ViewCol>
        );
    }
}

export class PillList1Component extends React.Component<{
    PILLLIST: PillFormat[]
    onPress?: (pill: PillFormat) => void
}> {
    render(): React.ReactNode {
        return (
            <>
                {
                    this.props.PILLLIST && this.props.PILLLIST.length > 0 ?
                        <FlatList
                            data={this.props.PILLLIST}
                            keyExtractor={(item) => item.pill_id}
                            numColumns={2}
                            scrollEnabled={false}
                            contentContainerStyle={[styles.gap3vw, styles.w100, styles.marginVertical4vw]}
                            columnWrapperStyle={[styles.w100, styles.justifyContentSpaceBetween]}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => this.props.onPress ? this.props.onPress(item) : null}
                                    style={[styles.w48, styles.padding10, styles.borderRadius16, styles.gap3vw, styles.flexColBetweenCenter, styles.h60vw, styles.border1, { backgroundColor: clrStyle.white, borderColor: clrStyle.grey30 }]}
                                >
                                    <View style={[styles.flex1, styles.w100]}>
                                        {item.pill_imgAddress ?
                                            item.pill_imgAddress.map((img, index) => (
                                                <Image key={index} source={img} resizeMode='contain' style={[styles.w100, styles.h100] as ImageStyle} />
                                            ))
                                            : pillOrderIcon()}
                                    </View>
                                    <View style={[styles.w100]}>
                                        <Nu16Reg numberOfLines={2} style={[styles.w100, { color: clrStyle.blue100 }]}>{item.pill_name}</Nu16Reg>
                                        <Nu16Bold style={[styles.w100, { color: clrStyle.red }]}>{item.pill_sellPrice}đ/vỉ</Nu16Bold>
                                        <Nu14Reg style={[styles.w100, { color: clrStyle.grey30 }]}>{item.pill_id}</Nu14Reg>
                                    </View>
                                    <View style={[styles.paddingH2vw, styles.positionAbsolute, styles.borderRadius100, { backgroundColor: clrStyle.blue50, top: vw(2.5), right: vw(2.5) }]}>
                                        <Nu12Reg style={[{ color: clrStyle.blue80, fontSize: vw(2.5) }]}>{item.pill_packKind}</Nu12Reg>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                        : <View style={[styles.marginVertical1vw, styles.bgcolorBlack20, styles.borderRadius16]}><Nu18Reg style={[styles.paddingH3vw, styles.gap3vw, styles.textCenter, styles.paddingV10vw, { color: clrStyle.blue80 }]}>Không có sản phẩm nào</Nu18Reg></View>
                }
            </>
        )
    }
}

export class TopNav2 extends Component<{
    containerStyle?: any
    backGoundImage: any
}> {
    render() {
        let { containerStyle, backGoundImage } = this.props
        return (
            <View style={[containerStyle, styles.bgcolorWhite, { containerStyle }]}>
                <Image source={backGoundImage} resizeMethod='resize' resizeMode='cover' style={[styles.flex1, styles.alignSelfCenter] as ImageStyle} />
            </View>
        )
    }
}


import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
export class FilterBottom extends Component<{ sheetRef: React.RefObject<BottomSheetMethods> }> {
    render() {
        return (
            <BottomSheet ref={this.props.sheetRef}>
                <Text>
                    The smart 😎, tiny 📦, and flexible 🎗 bottom sheet your app craves 🚀
                </Text>
            </BottomSheet>
        )
    }
}