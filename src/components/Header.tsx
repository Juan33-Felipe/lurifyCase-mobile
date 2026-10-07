import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useColorScheme } from 'nativewind';

export function Header() {
  const insets = useSafeAreaInsets();
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Animated.View 
      entering={FadeInDown.duration(600).delay(50)}
      className="absolute top-0 w-full z-50 bg-surface/90 border-b border-surface-container/40"
      style={{ paddingTop: insets.top }}
    >
      <View className="px-margin h-[60px] flex-row items-center justify-between">
        <View className="flex-row items-center gap-space-sm">
          <View className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center border border-surface-container-high/50">
            <Icon name="gavel" size={18} color="#f2ca50" />
          </View>
          <Text className="font-headline-sm text-[16px] text-on-surface tracking-tight font-semibold">
            Iurify Case
          </Text>
        </View>
        <View className="flex-row items-center gap-3">
          <Pressable 
            onPress={toggleColorScheme}
            className="w-10 h-10 flex items-center justify-center rounded-full active:bg-surface-container-high"
          >
            <Icon name={colorScheme === 'dark' ? 'light-mode' : 'dark-mode'} size={22} color="#d0c5af" />
          </Pressable>
          <Pressable className="w-10 h-10 flex items-center justify-center rounded-full active:bg-surface-container-high">
            <Icon name="search" size={22} color="#d0c5af" />
          </Pressable>
          <Pressable className="w-8 h-8 rounded-full bg-primary flex items-center justify-center active:opacity-80">
            <Icon name="person" size={18} color="#3c2f00" />
          </Pressable>
        </View>
      </View>
    </Animated.View>
  );
}
