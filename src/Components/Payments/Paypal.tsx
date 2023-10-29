import { View, Text } from 'react-native'
import React from 'react'
import {Buttone,Colors} from "./../../import";
export default function Paypal({navigation}) {
  return (<>
    <Text> soon</Text>
    <Buttone   bg={Colors.black} color={Colors.main} onPress={()=>navigation.goBack()} >
    Back
  </Buttone>
  </>
  )
}