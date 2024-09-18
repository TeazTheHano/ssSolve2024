// system import
import React, { Component } from 'react';
import { ImageBackground, Platform, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View, Image, ImageStyle, StatusBarStyle } from 'react-native';

// style import
import styles from './stylesheet';
import { vw, vh } from './stylesheet';

// component import
import { imgSourceHandle, marginBottomForScrollView } from './component';

// svg import
import { cameraIcon, goldStar, imgPickerIcon, inVisibilityIcon, leftArrow, lockIcon, noStar, peopleIcon, savedIcon, searchIcon, unSavedIcon, visibilityIcon, xIcon } from './svgXml';
import clrStyle from './componentStyleSheet';

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

export class ViewRow extends Component<{ children?: React.ReactNode, customStyle?: any }> {
    render() {
        const { children, customStyle } = this.props;
        return (
            <View style={[styles.flexRow, customStyle]}>
                {children}
            </View>
        )
    }
}

export class ViewCol extends Component<{ children?: React.ReactNode, customStyle?: any }> {
    render() {
        const { children, customStyle } = this.props;
        return (
            <View style={[styles.flexCol, customStyle]}>
                {children}
            </View>
        )
    }
}

export class ViewRowCenter extends Component<{ children?: React.ReactNode, customStyle?: any }> {
    render() {
        const { children, customStyle } = this.props;
        return (
            <View style={[styles.flexRowCenter, customStyle]}>
                {children}
            </View>
        )
    }
}

export class ViewColCenter extends Component<{ children?: React.ReactNode, customStyle?: any }> {
    render() {
        const { children, customStyle } = this.props;
        return (
            <View style={[styles.flexColCenter, customStyle]}>
                {children}
            </View>
        )
    }
}

export class ViewRowBetweenCenter extends Component<{ children?: React.ReactNode, customStyle?: any }> {
    render() {
        const { children, customStyle } = this.props;
        return (
            <View style={[styles.flexRowBetweenCenter, customStyle]}>
                {children}
            </View>
        )
    }
}

export class ViewColBetweenCenter extends Component<{ children?: React.ReactNode, customStyle?: any }> {
    render() {
        const { children, customStyle } = this.props;
        return (
            <View style={[styles.flexColBetweenCenter, customStyle]}>
                {children}
            </View>
        )
    }
}

export class ViewRowEvenlyCenter extends Component<{ children?: React.ReactNode, customStyle?: any }> {
    render() {
        const { children, customStyle } = this.props;
        return (
            <View style={[styles.flexRowEvenlyCenter, customStyle]}>
                {children}
            </View>
        )
    }
}

export class ViewColEvenlyCenter extends Component<{ children?: React.ReactNode, customStyle?: any }> {
    render() {
        const { children, customStyle } = this.props;
        return (
            <View style={[styles.flexColEvenlyCenter, customStyle]}>
                {children}
            </View>
        )
    }
}

export class ViewColEndCenter extends Component<{ children?: React.ReactNode, customStyle?: any }> {
    render() {
        const { children, customStyle } = this.props;
        return (
            <View style={[styles.flexColEndCenter, customStyle]}>
                {children}
            </View>
        )
    }
}

export class ViewRowStartCenter extends Component<{ children?: React.ReactNode, customStyle?: any }> {
    render() {
        const { children, customStyle } = this.props;
        return (
            <View style={[styles.flexRowStartCenter, customStyle]}>
                {children}
            </View>
        )
    }
}

export class ViewColStartCenter extends Component<{ children?: React.ReactNode, customStyle?: any }> {
    render() {
        const { children, customStyle } = this.props;
        return (
            <View style={[styles.flexColStartCenter, customStyle]}>
                {children}
            </View>
        )
    }
}

// ____________________END OF UNIVERSAL CLASS_______________________

// ____________________START OF FONT_______________________
export class Pay32BlackLine40 extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'PaytoneOne-Regular', fontSize: vw(8), lineHeight: vw(10), }, style]}>
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
                        backgroundColor={this.props.barColor ? this.props.barColor : 'black'} />
                    {Platform.OS === 'android' && !this.props.notMargin ? <View style={{ height: statusBarHeight * 1.5 }}></View> : null}
                </>
                {this.props.children}
            </View>
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
    placeholder?: string
    titleColor?: string
    placeholderColor?: string
    valueColor?: string
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined
}> {
    render() {
        const { customStyle, onChangeText, value, hideContent, hideContentFnc, textContentType, title, placeholder, titleColor, placeholderColor, valueColor, autoCapitalize } = this.props;
        let type: string = textContentType ? textContentType : "none"

        return (
            <View
                style={[styles.w100, styles.padding2vw, styles.flexRow, styles.alignItemsCenter, styles.borderRadius2vw, styles.marginBottom4vw, { borderWidth: 1, borderColor: 'rgba(0,0,0,1)' }, customStyle]} >
                {title ?
                    <Lex16MedAuto style={[styles.paddingH4vw, { color: titleColor ? titleColor : clrStyle.black }]}>{title}:</Lex16MedAuto>
                    : null}
                <TextInput
                    onChangeText={onChangeText}
                    autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
                    placeholder={placeholder ? placeholder : ''}
                    placeholderTextColor={placeholderColor ? placeholderColor : clrStyle.grey2}
                    secureTextEntry={hideContent ? hideContent : false}
                    passwordRules={type === 'password' ? "minlength: 6; maxlength: 10" : ''}
                    textContentType={type as "none"}
                    maxLength={type === 'password' ? 10 : 100}
                    style={[styles.flex1, styles.padding1vw,]}
                ><Lex16RegAuto style={[styles.flex1]}>{value}</Lex16RegAuto></TextInput>
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
        let TextClass = textClass ? textClass : Lex16RegAuto
        return (
            <TouchableOpacity
                onPress={onPress}
                style={[styles.flex1, styles.flexRowCenter, styles.paddingV3vw, styles.paddingH4vw, styles.borderRadius10, styles.overflowHidden, { backgroundColor: bgColor ? bgColor : undefined, borderWidth: border ? 1 : 0, }, customStyle]}>
                {icon ? icon : null}
                <TextClass style={[styles.padding2vw, { color: textColor ? textColor : clrStyle.black }]}>{title}</TextClass>
            </TouchableOpacity>
        );
    }
}

export class SearchBox extends Component<{
    customStyle?: any
    placeholder?: string
    placeholderTextColor?: any
    value?: string
    onChangeText?: (input: any) => void
    onClear?: () => void
    showSearchIcon?: boolean
}> {
    render() {
        const { customStyle, placeholder, placeholderTextColor, value, onChangeText, onClear, showSearchIcon } = this.props;
        return (
            <ViewRowBetweenCenter
                customStyle={[styles.flex1, styles.gap3vw, styles.borderRadius10, styles.h100, styles.shadowW0H0Black, styles.paddingH4vw, { backgroundColor: clrStyle.white, borderColor: clrStyle.neu3 }, customStyle]}>
                {showSearchIcon ? searchIcon(vw(5), vw(5), clrStyle.black) : null}
                <TextInput
                    style={[styles.flex1, { color: clrStyle.black, fontSize: vw(3.5) }]}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder ? placeholder : 'Search'}
                    placeholderTextColor={placeholderTextColor ? placeholderTextColor : ''}
                />
                <TouchableOpacity
                    onPress={onClear}
                >
                    {xIcon(vw(5), vw(5), clrStyle.black)}
                </TouchableOpacity>
            </ViewRowBetweenCenter>
        );
    }
}