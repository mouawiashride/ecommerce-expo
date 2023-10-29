import { View, Text } from 'react-native'
import React from 'react'
import { HStack, Spinner } from 'native-base'

export default function Loading() {
  return (
    <HStack space={8} justifyContent="center" alignItems="center">
    <Spinner size="lg" />
  </HStack>
  )
}