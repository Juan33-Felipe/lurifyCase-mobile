import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import Animated, { FadeInUp, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function BottomNav() {
  const insets = useSafeAreaInsets();
  
  const fabScale = useSharedValue(1);
  const fabStyle = useAnimatedStyle(() => ({
    transform: [{ scale: fabScale.value }],
  }));

  return (
    <Animated.View 
      entering={FadeInUp.duration(600).delay(350).springify()}
      className="absolute bottom-0 w-full z-50 pointer-events-box-none px-margin"
      style={{ paddingBottom: Math.max(insets.bottom, 16) }}
    >
      <View className="w-full max-w-sm mx-auto flex-row items-center justify-between bg-surface-container-lowest/90 rounded-3xl px-3 py-2 border border-surface-container/60 shadow-lg pointer-events-auto">
        <Pressable className="flex-col items-center justify-center w-12 h-12 active:opacity-60">
          <Icon name="dashboard" size={24} color="#f2ca50" />
          <Text className="font-label-sm text-[9px] mt-1 text-primary font-bold">Home</Text>
        </Pressable>
        <Pressable className="flex-col items-center justify-center w-12 h-12 active:opacity-60">
          <Icon name="balance" size={24} color="#99907c" />
          <Text className="font-label-sm text-[9px] mt-1 text-outline font-semibold">Audit</Text>
        </Pressable>
        
        <View className="relative -top-6 px-1">
          <View 
            className="bg-surface-container-lowest shadow-sm"
            style={{ borderRadius: 999, padding: 6 }}
          >
            <AnimatedPressable 
              style={[fabStyle, { borderRadius: 999 }]}
              onPressIn={() => fabScale.value = withSpring(0.9, { damping: 15 })}
              onPressOut={() => fabScale.value = withSpring(1, { damping: 15 })}
              className="w-14 h-14 overflow-hidden shadow-lg items-center justify-center bg-surface-container-highest"
            >
              <LinearGradient
                colors={['#d4af37', '#f2ca50', '#ffe088']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                className="w-full h-full items-center justify-center rounded-full"
                style={{ borderRadius: 999 }}
              >
                <Icon name="add" size={28} color="#3c2f00" />
              </LinearGradient>
            </AnimatedPressable>
          </View>
        </View>
        
        <Pressable className="flex-col items-center justify-center w-12 h-12 active:opacity-60">
          <Icon name="hub" size={24} color="#99907c" />
          <Text className="font-label-sm text-[9px] mt-1 text-outline font-semibold">Graph</Text>
        </Pressable>
        <Pressable className="flex-col items-center justify-center w-12 h-12 active:opacity-60">
          <Icon name="tune" size={24} color="#99907c" />
          <Text className="font-label-sm text-[9px] mt-1 text-outline font-semibold">Setup</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
}
