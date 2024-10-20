// system imports
import React, { Component, useEffect, useRef } from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Animated, Platform, Text, TouchableOpacity, View } from 'react-native';

// style import
import styles, { vw, vh, vmax, vmin } from './stylesheet';

// screen import
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Pillport from '../screens/Pillport';
import DrugList from '../screens/DrugList';

import { AddIcon, AddIconInactive, HomeIcon, HomeIconInactive, LibraryIcon, LibraryIconInactive, NewFeedIcon, NewFeedIconInactive, SettingIcon, SettingIconInactive } from './svgXml';
import { getUser, saveUser } from '../data/storageFunc';
import { SvgXml } from 'react-native-svg';
import { Nu16Reg, ViewColCenter, ViewRowEvenlyCenter } from './Class';
import clrStyle from './componentStyleSheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootContext, setUser } from '../data/store';

const VH_VW = vw(100) > vh(100) ? true : false
const BOTTOM_TAB_ICON_SIZE = VH_VW ? vh(6) : vw(6)
const BOTTOM_TAB_ICON_COLOR = clrStyle.blue100
const BOTTOM_TAB_ICON_COLOR_INACTIVE = clrStyle.blue30
const BOTTOM_TAB_ICON_PADDING = VH_VW ? vh(2) : vw(2)
const BOTTOM_TAB_ICON_HEIGHT = VH_VW ? vh(14) : vw(14)
const BOTTOM_TAB_HEIGHT = VH_VW ? vh(20) : vw(20)
// icon generator
const iconData: { page: React.JSX.Element, icon: string, iconActive: string, title: string }[] = [
    {
        page: <Home />,
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4385 20C19.3563 20 20.1494 19.3726 20.2726 18.4632C20.3897 17.5988 20.5001 16.4099 20.5001 15C20.5001 12 20.6685 10.1684 17.5001 7.00003C16.0387 5.53868 14.4065 4.41902 13.3026 3.74091C12.498 3.24668 11.5022 3.24668 10.6976 3.74091C9.59363 4.41902 7.96143 5.53868 6.50008 7.00003C3.33169 10.1684 3.50009 12 3.50009 15C3.50009 16.4098 3.61051 17.5988 3.72757 18.4632C3.85074 19.3726 4.64391 20 5.56164 20H18.4385Z" stroke="#D5E8FB" style="stroke:#D5E8FB;stroke:color(display-p3 0.8353 0.9098 0.9843);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        iconActive: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4385 20C19.3563 20 20.1494 19.3726 20.2726 18.4632C20.3897 17.5988 20.5001 16.4099 20.5001 15C20.5001 12 20.6685 10.1684 17.5001 7.00003C16.0387 5.53868 14.4065 4.41902 13.3026 3.74091C12.498 3.24668 11.5022 3.24668 10.6976 3.74091C9.59363 4.41902 7.96143 5.53868 6.50008 7.00003C3.33169 10.1684 3.50009 12 3.50009 15C3.50009 16.4098 3.61051 17.5988 3.72757 18.4632C3.85074 19.3726 4.64391 20 5.56164 20H18.4385Z" stroke="#95C8FF" style="stroke:#D5E8FB;stroke:color(display-p3 0.8353 0.9098 0.9843);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        title: 'Trang chủ'
    },
    {
        page: <DrugList />,
        icon: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 3.5C3.88235 3.5 3 4.38235 3 7.25C3 10.1176 3.88235 11 6.75 11C9.61765 11 10.5 10.1176 10.5 7.25C10.5 4.38235 9.61765 3.5 6.75 3.5Z" stroke="#D5E8FB" style="stroke:#D5E8FB;stroke:color(display-p3 0.5858 0.7839 1.0000);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.75 14C3.88235 14 3 14.8824 3 17.75C3 20.6176 3.88235 21.5 6.75 21.5C9.61765 21.5 10.5 20.6176 10.5 17.75C10.5 14.8824 9.61765 14 6.75 14Z" stroke="#D5E8FB" style="stroke:#D5E8FB;stroke:color(display-p3 0.5858 0.7839 1.0000);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.25 14C14.3824 14 13.5 14.8824 13.5 17.75C13.5 20.6176 14.3824 21.5 17.25 21.5C20.1176 21.5 21 20.6176 21 17.75C21 14.8824 20.1176 14 17.25 14Z" stroke="#D5E8FB" style="stroke:#D5E8FB;stroke:color(display-p3 0.5858 0.7839 1.0000);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.25 3.5C14.3824 3.5 13.5 4.38235 13.5 7.25C13.5 10.1176 14.3824 11 17.25 11C20.1176 11 21 10.1176 21 7.25C21 4.38235 20.1176 3.5 17.25 3.5Z" stroke="#D5E8FB" style="stroke:#D5E8FB;stroke:color(display-p3 0.5858 0.7839 1.0000);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        iconActive: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 3.5C3.88235 3.5 3 4.38235 3 7.25C3 10.1176 3.88235 11 6.75 11C9.61765 11 10.5 10.1176 10.5 7.25C10.5 4.38235 9.61765 3.5 6.75 3.5Z" stroke="#95C8FF" style="stroke:#95C8FF;stroke:color(display-p3 0.5858 0.7839 1.0000);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.75 14C3.88235 14 3 14.8824 3 17.75C3 20.6176 3.88235 21.5 6.75 21.5C9.61765 21.5 10.5 20.6176 10.5 17.75C10.5 14.8824 9.61765 14 6.75 14Z" stroke="#95C8FF" style="stroke:#95C8FF;stroke:color(display-p3 0.5858 0.7839 1.0000);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.25 14C14.3824 14 13.5 14.8824 13.5 17.75C13.5 20.6176 14.3824 21.5 17.25 21.5C20.1176 21.5 21 20.6176 21 17.75C21 14.8824 20.1176 14 17.25 14Z" stroke="#95C8FF" style="stroke:#95C8FF;stroke:color(display-p3 0.5858 0.7839 1.0000);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.25 3.5C14.3824 3.5 13.5 4.38235 13.5 7.25C13.5 10.1176 14.3824 11 17.25 11C20.1176 11 21 10.1176 21 7.25C21 4.38235 20.1176 3.5 17.25 3.5Z" stroke="#95C8FF" style="stroke:#95C8FF;stroke:color(display-p3 0.5858 0.7839 1.0000);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        title: 'Thuốc'
    },
    {
        page: <Cart />,
        icon: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78571 5.5H18.2251C19.5903 5.5 20.5542 6.83739 20.1225 8.13246L18.4558 13.1325C18.1836 13.9491 17.4193 14.5 16.5585 14.5H6.07142M4.78571 5.5L4.74531 5.21716C4.60455 4.23186 3.76071 3.5 2.76541 3.5H2M4.78571 5.5L6.07142 14.5M6.07142 14.5L6.25469 15.7828C6.39545 16.7681 7.23929 17.5 8.23459 17.5H17M17 17.5C15.8954 17.5 15 18.3954 15 19.5C15 20.6046 15.8954 21.5 17 21.5C18.1046 21.5 19 20.6046 19 19.5C19 18.3954 18.1046 17.5 17 17.5ZM11 19.5C11 20.6046 10.1046 21.5 9 21.5C7.89543 21.5 7 20.6046 7 19.5C7 18.3954 7.89543 17.5 9 17.5C10.1046 17.5 11 18.3954 11 19.5Z" stroke="#D5E8FB" style="stroke:#D5E8FB;stroke:color(display-p3 0.5858 0.7839 1.0000);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        iconActive: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78571 5.5H18.2251C19.5903 5.5 20.5542 6.83739 20.1225 8.13246L18.4558 13.1325C18.1836 13.9491 17.4193 14.5 16.5585 14.5H6.07142M4.78571 5.5L4.74531 5.21716C4.60455 4.23186 3.76071 3.5 2.76541 3.5H2M4.78571 5.5L6.07142 14.5M6.07142 14.5L6.25469 15.7828C6.39545 16.7681 7.23929 17.5 8.23459 17.5H17M17 17.5C15.8954 17.5 15 18.3954 15 19.5C15 20.6046 15.8954 21.5 17 21.5C18.1046 21.5 19 20.6046 19 19.5C19 18.3954 18.1046 17.5 17 17.5ZM11 19.5C11 20.6046 10.1046 21.5 9 21.5C7.89543 21.5 7 20.6046 7 19.5C7 18.3954 7.89543 17.5 9 17.5C10.1046 17.5 11 18.3954 11 19.5Z" stroke="#95C8FF" style="stroke:#95C8FF;stroke:color(display-p3 0.5858 0.7839 1.0000);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        title: 'Giỏ hàng'
    },
    {
        page: <Pillport />,
        icon: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8159 21.1077C16.8509 19.0502 20 15.6429 20 11.5C20 7.08172 16.4183 3.5 12 3.5C7.58172 3.5 4 7.08172 4 11.5C4 15.6429 7.14909 19.0502 11.1841 21.1077C11.6968 21.3691 12.3032 21.3691 12.8159 21.1077Z" stroke="#D5E8FB" style="stroke:#D5E8FB;stroke:color(display-p3 0.5858 0.7839 1.0000);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 11.5C15 13.1569 13.6569 14.5 12 14.5C10.3431 14.5 9 13.1569 9 11.5C9 9.84315 10.3431 8.5 12 8.5C13.6569 8.5 15 9.84315 15 11.5Z" stroke="#D5E8FB" style="stroke:#D5E8FB;stroke:color(display-p3 0.5858 0.7839 1.0000);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        iconActive: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8159 21.1077C16.8509 19.0502 20 15.6429 20 11.5C20 7.08172 16.4183 3.5 12 3.5C7.58172 3.5 4 7.08172 4 11.5C4 15.6429 7.14909 19.0502 11.1841 21.1077C11.6968 21.3691 12.3032 21.3691 12.8159 21.1077Z" stroke="#95C8FF" style="stroke:#95C8FF;stroke:color(display-p3 0.5858 0.7839 1.0000);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 11.5C15 13.1569 13.6569 14.5 12 14.5C10.3431 14.5 9 13.1569 9 11.5C9 9.84315 10.3431 8.5 12 8.5C13.6569 8.5 15 9.84315 15 11.5Z" stroke="#95C8FF" style="stroke:#95C8FF;stroke:color(display-p3 0.5858 0.7839 1.0000);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        title: 'Pillport'
    },
]

// // ____________________END OF IMPORT_______________________

class HomeIconClass extends Component<{ index: number, focus: boolean }> {
    render() {
        const { index, focus } = this.props;
        return (
            <ViewColCenter style={[{ backgroundColor: focus ? clrStyle.blue100 : clrStyle.blue30, height: BOTTOM_TAB_ICON_HEIGHT, padding: focus ? BOTTOM_TAB_ICON_PADDING * 2 : BOTTOM_TAB_ICON_PADDING, minWidth: BOTTOM_TAB_ICON_HEIGHT, borderRadius: vw(6) }]}>
                <SvgXml xml={!focus ? iconData[index].iconActive : iconData[index].icon} width={BOTTOM_TAB_ICON_SIZE} height={BOTTOM_TAB_ICON_SIZE} />
                <View style={{ display: focus ? 'flex' : 'none', }}><Nu16Reg style={{ color: clrStyle.blue30, flex: 1, width: '100%' }}>{iconData[index].title}</Nu16Reg></View>
            </ViewColCenter>
        );
    }
}

const BottomTab = () => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const Tab = createBottomTabNavigator();
    const [CurrentCache, dispatch] = React.useContext(RootContext);

    useEffect(() => {
        const fetchUser = async () => {
            let user = await getUser();
            if (user) {
                dispatch(setUser(user));
            } else {
                navigation.navigate('OnBoarding' as never);
            }
        };

        fetchUser();
    }, []);

    return (
        <Tab.Navigator
            tabBar={props => <BottomTabBar {...props} />}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    height: BOTTOM_TAB_HEIGHT + insets.bottom,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: vw(4),
                    paddingVertical: Platform.OS === 'android' ? null : vh(1),
                }
            }}
        >
            {iconData.map((item, index) => (
                <Tab.Screen
                    key={index}
                    name={item.title}
                    component={item.page.type}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <HomeIconClass index={index} focus={focused} />
                        )
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default BottomTab;
