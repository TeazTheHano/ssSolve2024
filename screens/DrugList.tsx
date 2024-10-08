import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, ImageStyle } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Nu12Reg, Nu14Reg, Nu16Bold, Nu16Reg, Nu18Black, Nu18Reg, Nu20Black, PillList1Component, QuickBtn, RoundBtn, SSBarWithSaveArea, TopBarSS, ViewCol, ViewRow } from '../assets/Class'
import { useNavigation } from '@react-navigation/native'
import { RootContext, setSearchFocus } from '../data/store'
import styles, { vw } from '../assets/stylesheet'
import clrStyle from '../assets/componentStyleSheet'
import { PillFormat } from '../data/interfaceFormat'
import { categoryList, diseaseList, familyPackList } from '../data/factoryData'
import { pillOrderIcon } from '../assets/svgXml'
import { marginBottomForScrollView } from '../assets/component'

import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';

export default function DrugList() {
  const navigation = useNavigation()
  const sheetRef = useRef<BottomSheetMethods>(null);


  const [CurrentCache, dispatch] = React.useContext(RootContext)
  const [showCategory, setShowCategory] = React.useState(true)
  const [pillInCategory, setPillInCategory] = React.useState<{ name: string, data: PillFormat[] }[]>([])

  const [sellectedDisease, setSellectedDisease] = React.useState<'Dị ứng thời tiết' | 'Cảm lạnh' | 'Đau mắt đỏ' | 'Viêm mũi dị ứng'>('Dị ứng thời tiết')
  const [pillInDisease, setPillInDisease] = React.useState<PillFormat[]>([])

  const [familyPack, setFamilyPack] = React.useState<'Giảm đau và hạ sốt' | 'Tiêu hoá' | 'Hô hấp' | 'Dị ứng'>('Giảm đau và hạ sốt')
  const [pillInFamilyPack, setPillInFamilyPack] = React.useState<PillFormat[]>([])

  function sortPillWithCategory() {
    let result: { name: string, data: PillFormat[] }[] = []
    categoryList.forEach((category) => {
      if (category === 'Tất cả thuốc') {
        result.push({ name: category, data: CurrentCache.DATA.pillList })
      } else {
        let temp: PillFormat[] = CurrentCache.DATA.pillList.filter((pill) => pill.pill_tags.includes(category))
        result.push({ name: category, data: temp })
      }
    })
    return result
  }

  useEffect(() => {
    setPillInCategory(sortPillWithCategory())
  }, [CurrentCache.DATA.lastChange])

  useEffect(() => {
    const filterPillsByDisease = () => {
      return CurrentCache.DATA.pillList.filter((pill) =>
        pill.pill_tags.join(' ').toLowerCase().includes(sellectedDisease.toLowerCase()) ||
        (pill.pill_description?.join(' ').toLowerCase() ?? '').includes(sellectedDisease.toLowerCase())
      );
    };

    setPillInDisease(filterPillsByDisease());
  }, [sellectedDisease, CurrentCache.DATA.lastChange]);

  useEffect(() => {
    const filterPillsByFamilyPack = () => {
      return CurrentCache.DATA.pillList.filter((pill) =>
        pill.pill_tags.join(' ').toLowerCase().includes(familyPack.toLowerCase()) ||
        (pill.pill_description?.join(' ').toLowerCase() ?? '').includes(familyPack.toLowerCase())
      );
    };

    setPillInFamilyPack(filterPillsByFamilyPack());
  }, [familyPack, CurrentCache.DATA.lastChange]);

  class FlatCategoryComponent extends React.Component {
    render() {
      return (
        <View style={[styles.w100, styles.paddingH3vw, styles.gap3vw, { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }]}>
          {pillInCategory.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate('InCateList' as any, { cate: item.name, data: item.data } as any)
              }}
              style={[styles.padding10, styles.borderRadius16, styles.gap3vw, styles.flexColBetweenCenter, styles.h50vw, { backgroundColor: clrStyle.blue30, width: index == 0 ? '100%' : '48%' }]}
            >
              <View style={[styles.flex1, styles.w100]}>
                {item.data[0]?.pill_imgAddress && item.name != 'Tất cả thuốc' ?
                  <Image source={item.data[0]?.pill_imgAddress[0]} resizeMode='contain' style={[styles.w100, styles.h100] as ImageStyle} />
                  : pillOrderIcon()}
              </View>
              <Nu16Bold numberOfLines={2} style={[styles.textCenter, { color: clrStyle.blue100 }]}>{item.name}</Nu16Bold>
              <Nu12Reg style={{ color: clrStyle.blue80 }}>({item.data.length} sản phẩm)</Nu12Reg>
            </TouchableOpacity>
          ))}
        </View>
      )
    }
  }

  class PopularComponent extends React.Component {
    render(): React.ReactNode {
      return (
        <View>
          <Nu20Black style={[styles.marginVertical2vw]}>Bệnh phổ biến mùa này</Nu20Black>
          {diseaseList.map
            ((item) => (
              <TouchableOpacity
                key={item}
                style={[styles.paddingV1vw]}
                onPress={() => setSellectedDisease(item as any)}
              >
                {sellectedDisease === item ? <Nu16Bold style={[{ color: clrStyle.blue100 }]}>{item}  <Nu18Black style={{ color: clrStyle.red }}>&#8226;</Nu18Black></Nu16Bold> : <Nu16Reg style={[{ color: clrStyle.blue80 }]}>{item}</Nu16Reg>}
              </TouchableOpacity>
            ))}
          <PillList1Component PILLLIST={pillInDisease} />

          <Nu20Black style={[styles.marginVertical2vw]}>Tủ thuốc gia đình</Nu20Black>
          {familyPackList.map
            ((item) => (
              <TouchableOpacity
                key={item}
                style={[styles.paddingV1vw]}
                onPress={() => setFamilyPack(item as any)}
              >
                {familyPack === item ? <Nu16Bold style={[{ color: clrStyle.blue100 }]}>{item}  <Nu18Black style={{ color: clrStyle.red }}>&#8226;</Nu18Black></Nu16Bold> : <Nu16Reg style={[{ color: clrStyle.blue80 }]}>{item}</Nu16Reg>}
              </TouchableOpacity>
            ))}
          <PillList1Component PILLLIST={pillInFamilyPack} />
        </View>
      )
    }
  }

  return (
    <SSBarWithSaveArea>
      <TopBarSS
        title='Danh mục thuốc'
        subTitle={'Nên kiểm tra triệu chứng trước khi lên đơn!'}
        currentCache={CurrentCache}
        filterFnc={() => sheetRef.current?.open()}
      />
      <ScrollView contentContainerStyle={[styles.gap6vw]}>
        <QuickBtn
          style={[styles.w100, { marginHorizontal: 0 }]}
          fnc1={() => dispatch(setSearchFocus(true))}
        />
        <ViewCol style={[styles.paddingH6vw, styles.gap6vw]}>
          <ViewRow style={[styles.w100]}>
            <RoundBtn
              title='Danh mục'
              customStyle={[styles.flex1, styles.justifyContentCenter, styles.borderRadius4vw]}
              bgColor={showCategory ? clrStyle.blue50 : clrStyle.white}
              textClass={Nu18Reg}
              textColor={clrStyle.blue100}
              onPress={() => setShowCategory(!showCategory)}
            />
            <RoundBtn
              title='Phổ biến'
              customStyle={[styles.flex1, styles.justifyContentCenter, styles.borderRadius4vw]}
              bgColor={!showCategory ? clrStyle.blue50 : clrStyle.white}
              textClass={Nu18Reg}
              textColor={clrStyle.blue100}
              onPress={() => setShowCategory(!showCategory)}
            />
          </ViewRow>
          {showCategory ? <FlatCategoryComponent /> : <PopularComponent />}
        </ViewCol>
        <View style={[styles.h10vh]} />
      </ScrollView>
      <BottomSheet ref={sheetRef}>
        <Text>
          The smart 😎, tiny 📦, and flexible 🎗 bottom sheet your app craves 🚀
        </Text>
      </BottomSheet>
    </SSBarWithSaveArea>
  )
}