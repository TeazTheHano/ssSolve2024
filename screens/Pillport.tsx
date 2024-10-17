import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import * as Class from '../assets/Class'
import { clearData } from '../data/storageFunc'
import styles from '../assets/stylesheet'
import clrStyle from '../assets/componentStyleSheet'
import RenderPillPortList from './compoScreen/RenderPillPortList'
import { RootContext } from '../data/store'

export default function Pillport() {
  const [isNearCate, setIsNearCate] = useState<boolean>(true)
  const [CurrentCache, dispatch] = useContext(RootContext)

  return (
    <Class.SSBarWithSaveArea>
      <Class.TopBarSS
        title='Pillport'
      />
      <View style={[styles.flex1, styles.paddingH6vw]}>
        <Class.ViewRow style={[styles.w100, styles.paddingH6vw, styles.marginVertical6vw]}>
          <Class.RoundBtn
            title='Gần bạn'
            customStyle={[styles.flex1, styles.justifyContentCenter, styles.borderRadius4vw]}
            bgColor={isNearCate ? clrStyle.blue50 : clrStyle.white}
            textClass={Class.Nu18Reg}
            textColor={clrStyle.blue100}
            onPress={() => setIsNearCate(!isNearCate)}
          />
          <Class.RoundBtn
            title='Tất cả'
            customStyle={[styles.flex1, styles.justifyContentCenter, styles.borderRadius4vw]}
            bgColor={!isNearCate ? clrStyle.blue50 : clrStyle.white}
            textClass={Class.Nu18Reg}
            textColor={clrStyle.blue100}
            onPress={() => setIsNearCate(!isNearCate)}
          />
        </Class.ViewRow>

        {RenderPillPortList(!isNearCate ? CurrentCache.DATA.pillPortList : [CurrentCache.DATA.pillPortList[0]])}

      </View>
    </Class.SSBarWithSaveArea >
  )
}