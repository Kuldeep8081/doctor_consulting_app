import {  View } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/themed-text';
import { useLocalSearchParams } from 'expo-router';

const Test = () => {
    const { concern } = useLocalSearchParams();
  return (
    <View>
      <ThemedText>test{concern}</ThemedText>
    </View>
  )
}

export default Test;
