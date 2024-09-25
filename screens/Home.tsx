import { View, Text } from 'react-native'
import React from 'react'
import { SSBarWithSaveArea, TopBarSS } from '../assets/Class'
import styles from '../assets/stylesheet'
import { RootContext } from '../data/store'

export default function Home() {
  const [CurrentCache, dispatch] = React.useContext(RootContext)
  console.log(CurrentCache.user.name);

  return (
    <SSBarWithSaveArea>
      <TopBarSS
        wellcome
        title={CurrentCache.user?.name}
      />
    </SSBarWithSaveArea>
  )
}