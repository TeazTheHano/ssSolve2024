import { View, Text, TouchableOpacity, SafeAreaViewBase, SafeAreaView, ScrollView, FlatList, RefreshControl, ActivityIndicator, ListRenderItem } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { Nu12Reg, Nu14Reg, Nu16Bold, Nu18Reg, Nu20Black, QuickBtn, RoundBtn, SearchResultShow, SSBarWithSaveArea, TopBarSS, ViewCol, ViewColBetweenCenter, ViewRow, ViewRowBetweenCenter, ViewRowStartCenter } from '../assets/Class'
import clrStyle from '../assets/componentStyleSheet'
import styles, { vw } from '../assets/stylesheet'
import { RootContext, setCurrentPill, setData, setSearchFocus } from '../data/store'
import { clockIcon, locationIcon, pillOrderIcon, pillPortIcon, sharpRightArrow } from '../assets/svgXml'
import { marginBottomForScrollView, searchEngine, searchOutputInterFace } from '../assets/component'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { DataStorageFormat, OrderFormat, PillFormat, PillPortFormat } from '../data/interfaceFormat'
import { getOrderList, getPillList, loadDemoData } from '../data/storageFunc'
import { factoryData } from '../data/factoryData'
import RenderPillPortList from './compoScreen/RenderPillPortList'
import RenderOrderList from './compoScreen/RenderOrderList'

export default function Home() {
  const navigation = useNavigation()
  const [CurrentCache, dispatch] = React.useContext(RootContext)
  const [refreshing, setRefreshing] = React.useState(true)

  const INDEVELOP: boolean = false

  const fetchData = useCallback(async () => {
    try {
      // TODO: get data from server

      // if not found, use demo data 
      await loadDemoData()
      const [pillList, orderList] = await Promise.all([getPillList(), getOrderList()])
      if (pillList && orderList) {
        const data: DataStorageFormat = {
          pillList: pillList,
          pillPortList: factoryData.pillPortList,
          orderList: orderList,
          lastChange: factoryData.lastChange,
        }
        dispatch(setData(data))
      }
    } catch (error) {
      console.log('Error:', error)
    } finally {
      setRefreshing(false)
    }
  }, [dispatch])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  // Handle refresh
  const onRefresh = useCallback(() => {
    setRefreshing(true)
    fetchData()
  }, [fetchData])

  return (
    <SSBarWithSaveArea>
      <TopBarSS
        wellcome
        title={CurrentCache.user?.name}
        subTitle={'Chúc bạn ngày mới vui vẻ'}
        currentCache={CurrentCache}
      />
      <ScrollView style={[styles.w100]} contentContainerStyle={[styles.gap4vw]}>
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
        <QuickBtn
          title='Pillport có thể giúp gì bạn?'
          fnc1={() => { navigation.navigate('SearchScreen' as never) }}
          fnc2={() => { navigation.navigate('BottomTab', { screen: 'Pillport' }) }}
          fnc3={() => { navigation.navigate('BottomTab', { screen: 'DrugList' }) }}
        />

        <ViewCol>
          <ViewRowBetweenCenter style={[styles.marginHorizontal6vw, styles.marginVertical2vw]}>
            <Nu20Black style={[styles.marginVertical2vw]}>Máy bán thuốc gần bạn</Nu20Black>
            <TouchableOpacity onPress={() => { }} style={[styles.padding2vw]}>
              <Nu12Reg style={{ color: clrStyle.grey30 }}>Xem thêm {sharpRightArrow(vw(3), vw(3), clrStyle.grey30)}</Nu12Reg>
            </TouchableOpacity>
          </ViewRowBetweenCenter>
          {refreshing && (
            <View style={[styles.w100, styles.alignItemsCenter, styles.justifyContentCenter]}>
              <ActivityIndicator size="large" />
            </View>
          )}
          {!INDEVELOP ?
            RenderPillPortList(CurrentCache.DATA.pillPortList, true, vw(60))
            : null}

        </ViewCol>

        <ViewCol>
          <ViewRowBetweenCenter style={[styles.marginHorizontal6vw, styles.marginVertical2vw]}>
            <Nu20Black style={[styles.marginVertical2vw]}>Lịch sử đơn hàng <Nu18Reg>({CurrentCache.DATA.orderList.length})</Nu18Reg></Nu20Black>
            <TouchableOpacity onPress={() => { }} style={[styles.padding2vw]}>
              <Nu12Reg style={{ color: clrStyle.grey30 }}>Xem thêm {sharpRightArrow(vw(3), vw(3), clrStyle.grey30)}</Nu12Reg>
            </TouchableOpacity>
          </ViewRowBetweenCenter>
          {!INDEVELOP ?
            RenderOrderList(CurrentCache.DATA.orderList, true, vw(50))
            : null}
        </ViewCol>
      </ScrollView>
    </SSBarWithSaveArea>
  )
}