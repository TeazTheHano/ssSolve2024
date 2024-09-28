import { View, Text } from 'react-native'
import React from 'react'
import { SSBarWithSaveArea, TopBarSS } from '../assets/Class'
import { useNavigation } from '@react-navigation/native'

export default function DrugList() {
  const navigation = useNavigation()
  return (
    <SSBarWithSaveArea>
      <TopBarSS
        wellcome
        title='Danh mục thuốc'
        subTitle={'Nên kiểm tra triệu chứng trước khi lên đơn!'}
      />
    </SSBarWithSaveArea>
  )
}