import { View, Text, TouchableOpacity, SafeAreaViewBase, SafeAreaView, ScrollView, FlatList, RefreshControl, ActivityIndicator, ListRenderItem } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { Nu12Reg, Nu14Reg, Nu16Bold, Nu18Reg, Nu20Black, QuickBtn, RoundBtn, SSBarWithSaveArea, TopBarSS, ViewCol, ViewColBetweenCenter, ViewRow, ViewRowBetweenCenter, ViewRowStartCenter } from '../assets/Class'
import clrStyle from '../assets/componentStyleSheet'
import styles, { vw } from '../assets/stylesheet'
import { RootContext, setCurrentPill, setData, setSearchFocus } from '../data/store'
import { clockIcon, locationIcon, pillOrderIcon, pillPortIcon, sharpRightArrow } from '../assets/svgXml'
import { marginBottomForScrollView } from '../assets/component'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { DataStorageFormat, OrderFormat, PillFormat, PillPortFormat } from '../data/interfaceFormat'
import { getOrderList, getPillList, loadDemoData } from '../data/storageFunc'
import { factoryData } from '../data/factoryData'

export default function Home() {
  const navigation = useNavigation()
  const [CurrentCache, dispatch] = React.useContext(RootContext)
  const [refreshing, setRefreshing] = React.useState(true)

  const INDEVELOP: boolean = 0

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

  const renderPillPortItem = useCallback(({ item, index }: { item: PillPortFormat, index: number }) => {
    return (
      <ViewColBetweenCenter style={[styles.w60vw, styles.padding10, styles.borderRadius16, styles.gap3vw, { backgroundColor: clrStyle.blue30, marginLeft: index == 0 ? vw(6) : 0, marginRight: index == CurrentCache.DATA.pillPortList.length - 1 ? vw(6) : 0 }]}>
        <ViewRowBetweenCenter>
          {pillPortIcon(vw(19), vw(19))}
          <ViewCol style={[styles.flex1, styles.gap1vw]}>
            <Nu16Bold numberOfLines={2} style={[styles.w100, { color: clrStyle.blue100 }]}>{item.pillport_name}</Nu16Bold>
            <Nu14Reg numberOfLines={2} style={[styles.w100, { color: clrStyle.blue100 }]}>{item.pillport_address}</Nu14Reg>
            <ViewRowBetweenCenter style={[styles.gap1vw]}>
              <Nu12Reg numberOfLines={1} style={{ color: clrStyle.grey50 }}>&#8226; Khoảng cách</Nu12Reg>
              <Nu12Reg numberOfLines={1} style={{ color: clrStyle.grey50 }}>{clockIcon(vw(3), vw(3), clrStyle.grey50)} Thời gian</Nu12Reg>
            </ViewRowBetweenCenter>
          </ViewCol>
        </ViewRowBetweenCenter>
        <RoundBtn
          title='Chỉ đường'
          onPress={() => { }} //TODO: complete this function
          bgColor={clrStyle.blue50}
          customStyle={[styles.justifyContentCenter, styles.borderRadius100, { paddingVertical: vw(1.5) }]}
        />
      </ViewColBetweenCenter>
    );
  }, [CurrentCache.DATA.pillPortList]);
  const PillPortItemRenderMemo = React.memo(renderPillPortItem);
  function renderMem(item: PillPortFormat, index: number) {
    return <PillPortItemRenderMemo item={item} index={index} />
  }

  const renderOrderItem = useCallback(({ item, index }: { item: OrderFormat, index: number }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('OrderDetail', { orderData: item })}
      >
        <ViewCol style={[styles.w50vw, styles.padding10, styles.borderRadius16, styles.gap3vw, { backgroundColor: clrStyle.green50, borderWidth: 2, borderColor: clrStyle.green100, marginLeft: index == 0 ? vw(6) : 0, marginRight: index == CurrentCache.DATA.orderList.length - 1 ? vw(6) : 0 }]}>
          <ViewRowStartCenter style={[styles.gap1vw]}>
            {pillOrderIcon(vw(6), vw(6))}
            <Nu16Bold numberOfLines={1} style={[styles.flex1]}>{item.order_id}</Nu16Bold>
          </ViewRowStartCenter>
          <ViewRow style={[styles.gap1vw]}>
            {locationIcon(vw(5), vw(5), clrStyle.grey30)}
            <Nu14Reg numberOfLines={2} style={[styles.flex1, { color: clrStyle.grey30 }]}>{factoryData.pillPortList.find(ix => ix.pillport_id === item.order_pillPort_id)?.pillport_address}</Nu14Reg>
          </ViewRow>
          <ViewRowStartCenter style={[styles.gap1vw]}>
            {clockIcon(vw(5), vw(5), clrStyle.grey30)}
            <Nu14Reg numberOfLines={2} style={[styles.flex1, { color: clrStyle.grey30 }]}>{item.order_date.toString().slice(0, 10)}</Nu14Reg>
          </ViewRowStartCenter>
          <Nu14Reg numberOfLines={1} style={[styles.flex1, { color: clrStyle.grey50 }]}>({item.order_item_quantity.reduce((a, b) => a + b, 0)}) <Nu16Bold style={[styles.flex1, { color: clrStyle.red }]}>{item.order_total}</Nu16Bold> vnđ</Nu14Reg>
        </ViewCol>
      </TouchableOpacity>
    )
  }, [CurrentCache.DATA.orderList]);
  const OrderItemRenderMemo = React.memo(renderOrderItem);
  function renderMemOrder(item: OrderFormat, index: number) {
    return <OrderItemRenderMemo item={item} index={index} />
  }


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
          fnc1={() => dispatch(setSearchFocus(true))}
          fnc2={() => { }}
          fnc3={() => { }}
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
          {/* <FlatList
            data={CurrentCache.DATA.pillPortList}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={vw(64)}
            decelerationRate="fast"
            pagingEnabled
            contentContainerStyle={[styles.gap4vw]}
            renderItem={({ item, index }) => (
              <ViewCol style={[styles.w60vw, styles.padding10, styles.borderRadius16, styles.gap3vw, { backgroundColor: clrStyle.blue30, marginLeft: index == 0 ? vw(6) : 0, marginRight: index == CurrentCache.DATA.pillPortList.length - 1 ? vw(6) : 0 }]}>
                <ViewRowBetweenCenter>
                  {pillPortIcon(vw(19), vw(19))}
                  <ViewCol style={[styles.flex1, styles.gap1vw]}>
                    <Nu16Bold numberOfLines={2} style={[styles.w100, { color: clrStyle.blue100 }]}>{item.pillport_name}</Nu16Bold>
                    <Nu14Reg numberOfLines={2} style={[styles.w100, { color: clrStyle.blue100 }]}>{item.pillport_address}</Nu14Reg>
                    <ViewRowBetweenCenter style={[styles.gap1vw]}>
                      <Nu12Reg numberOfLines={1} style={{ color: clrStyle.grey50 }}>&#8226; Khoảng cách</Nu12Reg>
                      <Nu12Reg numberOfLines={1} style={{ color: clrStyle.grey50 }}>{clockIcon(vw(3), vw(3), clrStyle.grey50)} Thời gian</Nu12Reg>
                    </ViewRowBetweenCenter>
                  </ViewCol>
                </ViewRowBetweenCenter>
                <RoundBtn
                  title='Chỉ đường'
                  onPress={() => { }} //TODO: complete this function
                  bgColor={clrStyle.blue50}
                  customStyle={[styles.justifyContentCenter, styles.borderRadius100, { paddingVertical: vw(1.5) }]}
                />
              </ViewCol>
            )}
            keyExtractor={item => (item.pillport_id + Math.random().toFixed(6)).toString()}
          /> */}
          {!INDEVELOP ?
            <FlatList
              data={CurrentCache.DATA.pillPortList}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={vw(64)}
              decelerationRate="fast"
              pagingEnabled
              contentContainerStyle={[styles.gap4vw]}
              renderItem={({ item, index }) => renderMem(item, index)}
              keyExtractor={(item, index) => index.toString()}
            /> : null}

        </ViewCol>

        <ViewCol>
          <ViewRowBetweenCenter style={[styles.marginHorizontal6vw, styles.marginVertical2vw]}>
            <Nu20Black style={[styles.marginVertical2vw]}>Lịch sử đơn hàng <Nu18Reg>({CurrentCache.DATA.orderList.length})</Nu18Reg></Nu20Black>
            <TouchableOpacity onPress={() => { }} style={[styles.padding2vw]}>
              <Nu12Reg style={{ color: clrStyle.grey30 }}>Xem thêm {sharpRightArrow(vw(3), vw(3), clrStyle.grey30)}</Nu12Reg>
            </TouchableOpacity>
          </ViewRowBetweenCenter>
          {/* <FlatList
            data={CurrentCache.DATA.orderList}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={vw(54)}
            decelerationRate="fast"
            pagingEnabled
            contentContainerStyle={[styles.gap4vw, styles.marginBottom8vw]}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('OrderDetail', { order: item })}
              >
                <ViewCol style={[styles.w50vw, styles.padding10, styles.borderRadius16, styles.gap3vw, { backgroundColor: clrStyle.green50, borderWidth: 2, borderColor: clrStyle.green100, marginLeft: index == 0 ? vw(6) : 0, marginRight: index == CurrentCache.DATA.orderList.length - 1 ? vw(6) : 0 }]}>
                  <ViewRowStartCenter style={[styles.gap1vw]}>
                    {pillOrderIcon(vw(6), vw(6))}
                    <Nu16Bold numberOfLines={1} style={[styles.flex1]}>{item.order_id}</Nu16Bold>
                  </ViewRowStartCenter>
                  <ViewRow style={[styles.gap1vw]}>
                    {locationIcon(vw(5), vw(5), clrStyle.grey30)}
                    <Nu14Reg numberOfLines={2} style={[styles.flex1, { color: clrStyle.grey30 }]}>{factoryData.pillPortList.find(ix => ix.pillport_id === item.order_pillPort_id)?.pillport_address}</Nu14Reg>
                  </ViewRow>
                  <ViewRowStartCenter style={[styles.gap1vw]}>
                    {clockIcon(vw(5), vw(5), clrStyle.grey30)}
                    <Nu14Reg numberOfLines={2} style={[styles.flex1, { color: clrStyle.grey30 }]}>{item.order_date.toString().slice(0, 10)}</Nu14Reg>
                  </ViewRowStartCenter>
                  <Nu14Reg numberOfLines={1} style={[styles.flex1, { color: clrStyle.grey50 }]}>({item.order_total}) <Nu16Bold style={[styles.flex1, { color: clrStyle.red }]}>{item.order_total}</Nu16Bold> vnđ</Nu14Reg>
                </ViewCol>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.order_date + Math.random().toFixed(6).toString()}
          /> */}
          {!INDEVELOP ?
            <FlatList
              data={CurrentCache.DATA.orderList.sort((a, b) => new Date(b.order_date).getTime() - new Date(a.order_date).getTime())}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={vw(54)}
              decelerationRate="fast"
              pagingEnabled
              contentContainerStyle={[styles.gap4vw, styles.marginBottom8vw]}
              renderItem={({ item, index }) => renderMemOrder(item, index)}
              keyExtractor={(item, index) => index.toString()}
            /> : null}
        </ViewCol>
      </ScrollView>
    </SSBarWithSaveArea>
  )
}