import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Logo from '@/components/Logo'
import colors from '@/constants/Colors'

const page = () => {
  return (
    <View style={style.container}>
      <Logo />
      <Text>Created by R&H</Text>
    </View>
  )
}

export default page

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center'
  }

})