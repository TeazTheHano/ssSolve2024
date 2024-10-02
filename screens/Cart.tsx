import { View, Text } from 'react-native'
import React from 'react'
import { SSBarWithSaveArea, TopBarSS } from '../assets/Class'

export default function Cart() {
  return (
    <SSBarWithSaveArea>
      <TopBarSS
        title='Cart'
        subTitle={'Nên kiểm tra triệu chứng trước khi lên đơn!'}
      />
    </SSBarWithSaveArea>
  )
}