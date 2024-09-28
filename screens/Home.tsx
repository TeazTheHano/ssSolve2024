// import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { Nu18Reg, Nu20Black, RoundBtn, SSBarWithSaveArea, TopBarSS, ViewCol } from '../assets/Class'
// import styles from '../assets/stylesheet'
// import { marginBottomForScrollView } from '../assets/component'
// import clrStyle from '../assets/componentStyleSheet'

// export default function Home() {
//   const [searchFocus, setSearchFocus] = React.useState(false)

//   return (
//     <SSBarWithSaveArea>
//       <TopBarSS
//         wellcome
//         // title={CurrentCache.user?.name}
//         subTitle={'Chúc bạn ngày mới vui vẻ'}
//       // inputFocus={searchFocus}
//       />
//       <ScrollView style={[styles.marginVertical4vw, styles.w100]} contentContainerStyle={[styles.gap4vw]}>
//         <ViewCol customStyle={[styles.gap4vw, styles.padding5vw, styles.marginHorizontal6vw, styles.borderRadius40, { backgroundColor: clrStyle.green100 }]}>
//           <Nu20Black style={[styles.marginVertical2vw]}>Pillport có thể giúp gì bạn?</Nu20Black>
//           <RoundBtn
//             textClass={Nu18Reg}
//             title='Nhập triệu chứng'
//             onPress={() => { setSearchFocus(true) }} //TODO: complete this function
//             bgColor={clrStyle.blue100}
//             textColor={clrStyle.white}
//             customStyle={[styles.justifyContentCenter, styles.borderRadius4vw,]}
//           />
//           <RoundBtn
//             textClass={Nu18Reg}
//             title='Tìm máy bán thuốc'
//             onPress={() => { }} //TODO: complete this function
//             bgColor={clrStyle.blue50}
//             textColor={clrStyle.blue100}
//             customStyle={[styles.justifyContentCenter, styles.borderRadius4vw,]}
//           />
//           <RoundBtn
//             textClass={Nu18Reg}
//             title='Mua thuốc'
//             onPress={() => { console.log('Mua thuốc') }} //TODO: complete this function;
//             bgColor={clrStyle.red}
//             textColor={clrStyle.white}
//             customStyle={[styles.justifyContentCenter, styles.borderRadius4vw,]}
//           />
//         </ViewCol>

//         {/* <Text>{JSON.stringify(CurrentCache.currentPill)}</Text> */}
//         {marginBottomForScrollView(2)}
//       </ScrollView>
//       <TouchableOpacity
//         onPress={() => { setSearchFocus(true) }}>
//         <Text>press</Text>
//       </TouchableOpacity>
//     </SSBarWithSaveArea>
//   )
// }
import { View, Text, TouchableOpacity, SafeAreaViewBase, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Nu18Reg, Nu20Black, RoundBtn, SSBarWithSaveArea, TopBarSS, ViewCol } from '../assets/Class'
import clrStyle from '../assets/componentStyleSheet'
import styles from '../assets/stylesheet'
import { RootContext } from '../data/store'

export default function Home() {
  const [searchFocus, setSearchFocus] = React.useState(false)
  const [CurrentCache, dispatch] = React.useContext(RootContext)
  return (
    <SSBarWithSaveArea>
      <TopBarSS
        wellcome
        title={CurrentCache.user?.name}
        subTitle={'Chúc bạn ngày mới vui vẻ'}
        inputFocus={searchFocus}
      />
      <Text>Home</Text>
      <ScrollView style={[styles.marginVertical4vw, styles.w100]} contentContainerStyle={[styles.gap4vw]}>
        <ViewCol customStyle={[styles.gap4vw, styles.padding5vw, styles.marginHorizontal6vw, styles.borderRadius40, { backgroundColor: clrStyle.green100 }]}>
          <Nu20Black style={[styles.marginVertical2vw]}>Pillport có thể giúp gì bạn?</Nu20Black>
          <RoundBtn
            textClass={Nu18Reg}
            title='Nhập triệu chứng'
            onPress={() => { setSearchFocus(true) }} //TODO: complete this function
            bgColor={clrStyle.blue100}
            textColor={clrStyle.white}
            customStyle={[styles.justifyContentCenter, styles.borderRadius4vw,]}
          />
          <RoundBtn
            textClass={Nu18Reg}
            title='Tìm máy bán thuốc'
            onPress={() => { }} //TODO: complete this function
            bgColor={clrStyle.blue50}
            textColor={clrStyle.blue100}
            customStyle={[styles.justifyContentCenter, styles.borderRadius4vw,]}
          />
          <RoundBtn
            textClass={Nu18Reg}
            title='Mua thuốc'
            onPress={() => { console.log('Mua thuốc') }} //TODO: complete this function;
            bgColor={clrStyle.red}
            textColor={clrStyle.white}
            customStyle={[styles.justifyContentCenter, styles.borderRadius4vw,]}
          />
        </ViewCol>
      </ScrollView>
      <TouchableOpacity
        onPress={() => { setSearchFocus(true) }}>
        <Text>press</Text>
      </TouchableOpacity>
    </SSBarWithSaveArea>
  )
}