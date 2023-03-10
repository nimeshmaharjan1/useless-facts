import { Text, SafeAreaView, View, Switch, Pressable, StatusBar as statusbar } from 'react-native';
import colors from 'tailwindcss/colors';
import { useEffect, useState } from 'react';
import { Link, Stack } from 'expo-router';
import StyledLink from '@shared/components/styled-link';

export default function Page() {
  // console.log(colors.slate[500]);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View className="mt-4">
      <Stack.Screen options={{ title: 'Overview' }} />
      <StyledLink href={'/details'} title="Details"></StyledLink>
    </View>
  );
}
