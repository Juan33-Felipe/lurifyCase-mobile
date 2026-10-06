import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import Animated, { FadeInUp, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Expediente } from '../domain/models';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface HeroCardProps {
  expediente: Partial<Expediente>;
}

export function HeroCard({ expediente }: HeroCardProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.97, { damping: 20, stiffness: 350 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 20, stiffness: 350 });
  };

  return (
    <AnimatedPressable 
      entering={FadeInUp.duration(600).delay(150).springify()}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={animatedStyle}
      className="relative overflow-hidden rounded-3xl bg-surface-container/50 p-space-lg mb-space-lg border border-surface-container-high/40"
    >
      <View className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-primary/5" />
      <View className="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-primary-container/5" />
      
      <View className="relative z-10 flex-col gap-space-md">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-1.5 bg-surface-container-highest/80 px-2 py-1 rounded-full border border-surface-container-high">
            <View className="w-1.5 h-1.5 rounded-full bg-primary" />
            <Text className="font-label-sm text-[9px] text-on-surface-variant uppercase tracking-widest font-bold">
              LEX-098 • {expediente.estado?.replace('_', ' ')}
            </Text>
          </View>
          <Icon name="verified-user" size={18} color="#efca7e" opacity={0.8} />
        </View>

        <View className="mt-2">
          <Text className="font-label-md text-[10px] text-outline uppercase tracking-[0.1em] mb-1 font-bold">
            Active Federal Dossier
          </Text>
          <Text className="font-headline-lg text-[26px] text-on-surface leading-[32px] font-medium" numberOfLines={2}>
            {expediente.titulo}
          </Text>
        </View>

        <View className="pt-3 flex-row items-end justify-between">
          <View>
            <Text className="font-label-sm text-[9px] text-outline uppercase tracking-[0.1em] mb-1 font-bold">
              Readiness Score
            </Text>
            <View className="flex-row items-baseline gap-1">
              <Text className="font-headline-xl-mobile text-[32px] font-semibold text-primary tracking-tighter">
                88.4
              </Text>
              <Text className="font-body-md text-[14px] text-on-surface-variant">/ 100</Text>
            </View>
          </View>
          
          <View className="flex-col items-end gap-1">
            <View className="flex-row items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
              <Icon name="trending-up" size={14} color="#f2ca50" />
              <Text className="font-label-sm text-[11px] text-primary font-bold">+4.2%</Text>
            </View>
            <Text className="font-label-sm text-[9px] text-outline">Since Yesterday</Text>
          </View>
        </View>

        <View className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden flex-row mt-4">
          <LinearGradient 
            colors={['#d4af37', '#f2ca50', '#ffe088']} 
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="h-full rounded-full w-[88%]"
          />
        </View>
      </View>
    </AnimatedPressable>
  );
}
