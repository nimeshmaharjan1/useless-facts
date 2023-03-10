import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const DetailPage = () => {
  const router = useRouter();
  return (
    <View>
      <Stack.Screen options={{ title: 'Details' }} />
      <Text
        onPress={() => {
          router.back();
        }}>
        Details Screen
      </Text>
    </View>
  );
};

export default DetailPage;
