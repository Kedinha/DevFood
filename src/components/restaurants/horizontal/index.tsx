import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { RestaurantsProps } from '..';

export function RestaurantsItem({ item }: { item: RestaurantsProps }) {
  return (
    <Pressable className='flex flex-col items-center justify-center'
      onPress={() => console.log("CLICK NO REASTAURANTE " + item.name)}
    >
      <Image
        source={{ uri: item.image }}
        className='w-20 h-20 rounded-full'

      />
      <View>
        <Text
          className='text-xs mt-2 w-15 text-center leading-4'
          numberOfLines={2}>
          {item.name}</Text>
      </View>



    </Pressable>
  );
}