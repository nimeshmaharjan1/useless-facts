import { Stack } from 'expo-router';
import { Button, SafeAreaView, StatusBar as statusbar } from 'react-native';
import colors from 'tailwindcss/colors';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';

export default function Layout() {
  const { colorScheme, setColorScheme } = useColorScheme();
  return (
    <SafeAreaView
      className={`flex-1 px-4 dark:bg-black dark:text-white mt-[${Math.round(statusbar.currentHeight as number).toString()}px]`}>
      <Stack
        screenOptions={{
          headerRight: () => <Button color={colors.amber[500]} title="Update count" />,
        }}
      />
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </SafeAreaView>
  );
}
