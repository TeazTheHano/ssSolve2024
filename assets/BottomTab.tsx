// system imports
import React, { useEffect } from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

// style import
import { vw, vh, vmax, vmin } from './stylesheet';

// screen import
import Home from '../screens/Home';
import NewFeed from '../screens/NewFeed';
import Setting from '../screens/Setting';
import { AddIcon, AddIconInactive, HomeIcon, HomeIconInactive, LibraryIcon, LibraryIconInactive, NewFeedIcon, NewFeedIconInactive, SettingIcon, SettingIconInactive } from './svgXml';
import { Platform } from 'react-native';
import { getUser } from '../data/storageFunc';

// ____________________END OF IMPORT_______________________

export default function BottomTab() {
    const navigation = useNavigation()
    useEffect(() => {
        getUser().then((user) => {
            if (!user) {
                return navigation.navigate('OnBoarding' as never)
            }
        })
    }, [])
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            tabBar={props => <BottomTabBar {...props} />}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: Platform.OS === 'android' ? vh(7) : vh(8),
                    paddingBottom: Platform.OS === 'android' ? vh(1) : vh(2),
                }
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? HomeIcon(vw(6), vw(6)) : HomeIconInactive(vw(6), vw(6))
                    )
                }} />
            <Tab.Screen name="Setting" component={Setting}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? SettingIcon(vw(6), vw(6)) : SettingIconInactive(vw(6), vw(6))
                    )
                }} />
        </Tab.Navigator>
    )
}