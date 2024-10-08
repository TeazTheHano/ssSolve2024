import { View, Text, Button } from 'react-native'
import React, { useRef } from 'react'
import { SSBarWithSaveArea, TopBarSS } from '../assets/Class'
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import styles from '../assets/stylesheet';

export default function Cart() {
  const sheetRef = useRef<BottomSheetMethods>(null)
  return (
    <SSBarWithSaveArea>
      <TopBarSS
        title='Cart'
        subTitle={'Nên kiểm tra triệu chứng trước khi lên đơn!'}
      />
      <View style={[styles.flex1]}>
        <Button title="Open" onPress={() => sheetRef.current?.open()} />
        <BottomSheet ref={sheetRef}>
          <Text>
            The smart 😎, tiny 📦, and flexible 🎗 bottom sheet your app craves 🚀
          </Text>
        </BottomSheet>
      </View>
    </SSBarWithSaveArea>
  )
}