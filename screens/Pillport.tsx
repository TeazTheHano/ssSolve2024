import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SSBarWithSaveArea, TopBarSS } from '../assets/Class'
import { clearData } from '../data/storageFunc'

export default function Pillport() {
  return (
    <SSBarWithSaveArea>
      <TopBarSS
        title='pillport'
        subTitle={'Nên kiểm tra triệu chứng trước khi lên đơn!'}
      />

      <TouchableOpacity
        onPress={clearData}>
        <Text>clear data</Text>
      </TouchableOpacity>
    </SSBarWithSaveArea>
  )
}