import { View, Text, ScrollView } from 'react-native'
import React, { useContext, useEffect, useRef } from 'react'
import { FilterBottom, PillList1Component, SSBarWithSaveArea, TopBarSS } from '../assets/Class'
import { RootContext } from '../data/store'
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import styles from '../assets/stylesheet';
import { PillFormat } from '../data/interfaceFormat';
import { useNavigation } from '@react-navigation/native';

export default function InCateList({ route }: any) {
    const navigation = useNavigation()
    const [CurrentCache, dispatch] = useContext(RootContext)
    const sheetRef = useRef<BottomSheetMethods>(null)
    const [routeName, setRouteName] = React.useState<string>(``)
    const [routeParams, setRouteParams] = React.useState<PillFormat[]>([])

    useEffect(() => {
        if (route.params) {
            setRouteName(route.params.name)
            setRouteParams(route.params.data)
            console.log(routeParams);
        }
    }, [route.params])
    function navFnc(item: PillFormat) {
        navigation.navigate('PillDetail', { pill: item })
    }

    return (
        <SSBarWithSaveArea>
            <TopBarSS
                title={routeName ? routeName : 'Danh mục thuốc'}
                currentCache={CurrentCache}
                filterFnc={() => sheetRef.current?.open()}
                navigation={navigation}
            />
            <ScrollView style={[styles.paddingH6vw]} contentContainerStyle={[styles.gap6vw]}>
                <PillList1Component PILLLIST={routeParams} onPress={navFnc} />
            </ScrollView>
            <FilterBottom sheetRef={sheetRef} />
        </SSBarWithSaveArea>
    )
}