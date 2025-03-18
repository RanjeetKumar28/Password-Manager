import { View, Text } from 'react-native'
import React from 'react'
import { Lock } from 'lucide-react'
import colors from '@/constants/Colors'

const Logo = () => {
  return (
    <View>
       <Lock height={16} width={16} color = {colors.primary}/>
      <Text>Logo</Text>

    </View>
  )
}

export default Logo