import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface ActionButtonProps {
  icon: keyof typeof Icon.glyphMap;
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

export function ActionButton({ icon, label, onPress, variant = 'secondary' }: ActionButtonProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.92, { damping: 15, stiffness: 300 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15, stiffness: 300 });
  };

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={animatedStyle}
      className={`flex-1 flex-col items-center justify-center p-space-sm rounded-2xl border h-[104px] overflow-hidden ${
        variant === 'primary' ? 'border-primary/20' : 'bg-surface-container/60 border-surface-container-high/50'
      }`}
    >
      {variant === 'primary' && (
        <LinearGradient
          colors={['rgba(242,202,80,0.15)', 'rgba(40,42,47,0.9)', '#1e1f25']}
          className="absolute inset-0"
        />
      )}
      <View className={`w-10 h-10 rounded-full flex items-center justify-center mt-1 ${
        variant === 'primary' ? 'bg-primary' : 'bg-surface-container-high'
      }`}>
        <Icon name={icon} size={20} color={variant === 'primary' ? '#3c2f00' : '#e4c277'} />
      </View>
      <Text className={`font-label-sm text-[11px] mt-2 tracking-wide ${
        variant === 'primary' ? 'text-primary font-bold' : 'text-on-surface font-semibold'
      }`}>
        {label}
      </Text>
    </AnimatedPressable>
  );
}
