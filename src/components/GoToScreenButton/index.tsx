import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import React from 'react'
import {
  TextStyle,
  StyleProp,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

type GoToScreenButtonProps = {
  screenName: string
  buttonStyle?: StyleProp<TextStyle>
  titleStyle?: StyleProp<TextStyle>
  title: string
  routeParams?: any
}

const GoToScreenButton = ({
  screenName,
  buttonStyle,
  titleStyle,
  title,
  routeParams,
}: GoToScreenButtonProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate(screenName, {routeParams})}>
      <View style={buttonStyle}>
        <Text style={titleStyle}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default GoToScreenButton
