import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useCallback } from 'react'
import * as Class from '../../assets/Class';
import * as SVG from '../../assets/svgXml';
import { OrderFormat } from '../../data/interfaceFormat';
import { useNavigation } from '@react-navigation/native';
import styles, { vw } from '../../assets/stylesheet';
import clrStyle from '../../assets/componentStyleSheet';
import { factoryData } from '../../data/factoryData';
import { RootContext } from '../../data/store';

function RenderOrderList(renderData: OrderFormat[], horizontalOpt?: boolean, widthOpt?: any) {
    const navigation = useNavigation();
    // const [CurrentCache, dispatch] = React.useContext(RootContext);

    const renderOrderItem = useCallback(({ item, index }: { item: OrderFormat, index: number }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('OrderDetail', { orderData: item })}
            >
                <Class.ViewCol style={[styles.padding10, styles.borderRadius16, styles.gap3vw, { width: widthOpt, backgroundColor: clrStyle.green50, borderWidth: 2, borderColor: clrStyle.green100, marginLeft: horizontalOpt && index == 0 ? vw(6) : 0, marginRight: horizontalOpt && index == renderData.length - 1 ? vw(6) : 0 }]}>
                    <Class.ViewRowStartCenter style={[styles.gap1vw]}>
                        {SVG.pillOrderIcon(vw(6), vw(6))}
                        <Class.Nu16Bold numberOfLines={1} style={[styles.flex1]}>{item.order_id}</Class.Nu16Bold>
                    </Class.ViewRowStartCenter>
                    <Class.ViewRow style={[styles.gap1vw]}>
                        {SVG.locationIcon(vw(5), vw(5), clrStyle.grey30)}
                        <Class.Nu14Reg numberOfLines={2} style={[styles.flex1, { color: clrStyle.grey30 }]}>{factoryData.pillPortList.find(ix => ix.pillport_id === item.order_pillPort_id)?.pillport_address}</Class.Nu14Reg>
                    </Class.ViewRow>
                    <Class.ViewRowStartCenter style={[styles.gap1vw]}>
                        {SVG.clockIcon(vw(5), vw(5), clrStyle.grey30)}
                        <Class.Nu14Reg numberOfLines={2} style={[styles.flex1, { color: clrStyle.grey30 }]}>{item.order_date.toString().slice(0, 10)}</Class.Nu14Reg>
                    </Class.ViewRowStartCenter>
                    <Class.Nu14Reg numberOfLines={1} style={[styles.flex1, { color: clrStyle.grey50 }]}>({item.order_item_quantity.reduce((a, b) => a + b, 0)}) <Class.Nu16Bold style={[styles.flex1, { color: clrStyle.red }]}>{item.order_total}</Class.Nu16Bold> vnđ</Class.Nu14Reg>
                </Class.ViewCol>
            </TouchableOpacity>
        )
    }, [renderData]);
    const OrderItemRenderMemo = React.memo(renderOrderItem);
    function renderMemOrder(item: OrderFormat, index: number) {
        return <OrderItemRenderMemo item={item} index={index} />
    }

    return (
        <FlatList
            data={renderData.sort((a, b) => new Date(b.order_date).getTime() - new Date(a.order_date).getTime())}
            horizontal={horizontalOpt}
            showsHorizontalScrollIndicator={false}
            snapToInterval={horizontalOpt ? vw(54) : undefined}
            decelerationRate="fast"
            pagingEnabled={horizontalOpt}
            contentContainerStyle={[styles.gap4vw, styles.marginBottom8vw]}
            renderItem={({ item, index }) => renderMemOrder(item, index)}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

export default RenderOrderList