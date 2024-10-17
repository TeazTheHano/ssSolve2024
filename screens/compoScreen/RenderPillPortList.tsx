import { View, Text, FlatList } from 'react-native'
import React, { useCallback } from 'react'
import { PillPortFormat } from '../../data/interfaceFormat';
import * as Class from '../../assets/Class';
import styles, { vw } from '../../assets/stylesheet';
import * as SVG from '../../assets/svgXml';
import clrStyle from '../../assets/componentStyleSheet';
import { RootContext } from '../../data/store';

export default function RenderPillPortList(renderData: PillPortFormat[], horizontalOpt?: boolean, widthOpt?: any) {

    const renderPillPortItem = useCallback(({ item, index }: { item: PillPortFormat, index: number }) => {
        return (
            <Class.ViewColBetweenCenter style={[styles.padding10, styles.borderRadius16, styles.gap3vw, { width: widthOpt, backgroundColor: clrStyle.blue30, marginLeft: horizontalOpt && index == 0 ? vw(6) : 0, marginRight: horizontalOpt && index == renderData.length - 1 ? vw(6) : 0 }]}>
                <Class.ViewRowBetweenCenter>
                    {SVG.pillPortIcon(vw(19), vw(19))}
                    <Class.ViewCol style={[styles.flex1, styles.gap1vw]}>
                        <Class.Nu16Bold numberOfLines={2} style={[styles.w100, { color: clrStyle.blue100 }]}>{item.pillport_name}</Class.Nu16Bold>
                        <Class.Nu14Reg numberOfLines={2} style={[styles.w100, { color: clrStyle.blue100 }]}>{item.pillport_address}</Class.Nu14Reg>
                        <Class.ViewRowBetweenCenter style={[styles.gap1vw]}>
                            <Class.Nu12Reg numberOfLines={1} style={{ color: clrStyle.grey50 }}>&#8226; Khoảng cách</Class.Nu12Reg>
                            <Class.Nu12Reg numberOfLines={1} style={{ color: clrStyle.grey50 }}>{SVG.clockIcon(vw(3), vw(3), clrStyle.grey50)} Thời gian</Class.Nu12Reg>
                        </Class.ViewRowBetweenCenter>
                    </Class.ViewCol>
                </Class.ViewRowBetweenCenter>
                <Class.RoundBtn
                    title='Chỉ đường'
                    onPress={() => { }} //TODO: complete this function
                    bgColor={clrStyle.blue50}
                    customStyle={[styles.justifyContentCenter, styles.borderRadius100, { paddingVertical: vw(1.5) }]}
                />
            </Class.ViewColBetweenCenter>
        );
    }, [renderData]);
    const PillPortItemRenderMemo = React.memo(renderPillPortItem);
    function renderMem(item: PillPortFormat, index: number) {
        return <PillPortItemRenderMemo item={item} index={index} />
    }
    return (
        <FlatList
            data={renderData}
            horizontal={horizontalOpt}
            showsHorizontalScrollIndicator={false}
            snapToInterval={horizontalOpt ? vw(64) : undefined}
            decelerationRate="fast"
            pagingEnabled={horizontalOpt}
            contentContainerStyle={[styles.gap4vw]}
            renderItem={({ item, index }) => renderMem(item, index)}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}