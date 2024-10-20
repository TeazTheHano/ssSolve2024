import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useEffect } from 'react'
import * as CLASS from '../../assets/Class';
import * as SVG from '../../assets/svgXml';
import { RootContext } from '../../data/store';
import styles, { vw } from '../../assets/stylesheet';
import clrStyle from '../../assets/componentStyleSheet';
import { PillFormat } from '../../data/interfaceFormat';
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen() {
    const navigation = useNavigation()
    const [CurrentCache, dispatch] = React.useContext(RootContext);
    const [value, onChangeText] = React.useState('');
    const onClear = () => onChangeText('')
    const [searchResult, setSearchResult] = React.useState<searchOutputInterFace | undefined>()

    useEffect(() => {
        value === '' ? setSearchResult(undefined) : null
        searchEngine(value, CurrentCache.DATA.pillList).then(result => {
            if (result !== undefined) {
                setSearchResult(result)
            } else {
                setSearchResult(undefined)
            }
        })
    }, [value])

    function handleClickPillNav(item: PillFormat) {
        navigation.navigate('PillDetail' as any, { pill: item } as any)
    }

    return (
        <CLASS.SSBarWithSaveArea>
            <CLASS.TopBarSS
                title={'Tìm kiếm'}
                currentCache={CurrentCache}
                unenableSearch
                unenableRightIcon
                navigation={navigation}
            />
            <CLASS.ViewRowBetweenCenter
                style={[styles.gap3vw, styles.borderRadius10, styles.paddingH4vw, styles.border1, styles.paddingV1vw, styles.marginVertical3vw, styles.marginHorizontal6vw, { borderColor: clrStyle.grey30, borderRadius: vw(4), backgroundColor: clrStyle.white, }]}>
                {SVG.searchIcon(vw(5), vw(5), clrStyle.black)}
                <TextInput
                    style={[styles.flex1, styles.paddingV2vw, { color: clrStyle.black, fontSize: vw(3.5) }]}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={'Tìm kiếm thuốc, triệu chứng, ...'}
                />
                <TouchableOpacity
                    onPress={onClear}
                    style={{ display: value ? 'flex' : 'none' }}
                >
                    {SVG.xIcon(vw(5), vw(5), clrStyle.black)}
                </TouchableOpacity>
            </CLASS.ViewRowBetweenCenter>
            <ScrollView style={[styles.flex1, styles.marginHorizontal6vw]}>
                <CLASS.Nu20Bold style={[styles.marginVertical2vw]}>Danh sách thuốc</CLASS.Nu20Bold>
                {
                    searchResult !== undefined ?
                        searchResult.pills.length !== 0 ?
                            <CLASS.ViewCol style={[styles.paddingH4vw, styles.paddingV2vw]}>
                                <CLASS.PillList1Component
                                    PILLLIST={searchResult.pills}
                                    onPress={handleClickPillNav}
                                />
                            </CLASS.ViewCol>
                            :
                            value ? <CLASS.Nu16Reg style={[styles.paddingH4vw, styles.paddingV2vw]}>Không tìm thấy kết quả</CLASS.Nu16Reg> : <CLASS.Nu16Reg style={[styles.paddingH4vw, styles.paddingV2vw]}>Bắt đầu nhập để tìm kiếm</CLASS.Nu16Reg>
                        :
                        null
                }
                <CLASS.Nu20Bold style={[styles.marginVertical2vw]}>Danh sách thuốc có nội dung mô tả liên quan tới thông tin tìm kiếm</CLASS.Nu20Bold>
                {
                    searchResult !== undefined ?
                        searchResult.symstom.length !== 0 ?
                            <CLASS.ViewCol style={[styles.paddingH4vw, styles.paddingV2vw]}>
                                <CLASS.PillList1Component
                                    PILLLIST={searchResult.symstom}
                                    onPress={handleClickPillNav}
                                />
                            </CLASS.ViewCol>
                            :
                            value ? <CLASS.Nu16Reg style={[styles.paddingH4vw, styles.paddingV2vw]}>Không tìm thấy kết quả</CLASS.Nu16Reg> : <CLASS.Nu16Reg style={[styles.paddingH4vw, styles.paddingV2vw]}>Bắt đầu nhập để tìm kiếm</CLASS.Nu16Reg>
                        :
                        null
                }
            </ScrollView>
        </CLASS.SSBarWithSaveArea>
    )
}

export const showInDeverlopFnc = () => {
    return Alert.alert('This function is in development')
}

export interface searchOutputInterFace { pills: PillFormat[], symstom: PillFormat[] }

export async function searchEngine(keyword: string, dataBank: PillFormat[]) {
    keyword = keyword.trim();
    let result: searchOutputInterFace = { pills: [], symstom: [] };
    const regex = new RegExp(`\\b${keyword}`, 'i');

    if (keyword === '') {
        return result;
    }

    result.pills = dataBank.filter((item): item is PillFormat =>
        (item as PillFormat).pill_name !== undefined && regex.test((item as PillFormat).pill_name)
    );

    result.symstom = dataBank.filter((item): item is PillFormat =>
        ((item as PillFormat).pill_indication as string[]).some((indication) => regex.test(indication))
        ||
        ((item as PillFormat).pill_description as string[]).some((description) => regex.test(description))
        ||
        ((item as PillFormat).pill_tags as string[]).some((tag) => regex.test(tag))
    );

    return result;
}