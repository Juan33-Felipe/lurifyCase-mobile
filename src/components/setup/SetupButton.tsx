import React from 'react';
import { Pressable, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { MaterialIcons as Icon } from '@expo/vector-icons';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface SetupButtonProps {
  label: string;
  icon?: keyof typeof Icon.glyphMap;
  onPress?: () => void;
  disabled?: boolean;
  className?: string;
}

export function SetupButton({ label, icon, onPress, disabled, className = '' }: SetupButtonProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    // eslint-disable-next-line react-hooks/immutability
    if (!disabled) scale.value = withSpring(0.96, { damping: 15, stiffness: 300 });
  };

  const handlePressOut = () => {
    // eslint-disable-next-line react-hooks/immutability
    if (!disabled) scale.value = withSpring(1, { damping: 15, stiffness: 300 });
  };

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      style={animatedStyle}
      className={`flex-row items-center justify-center py-4 rounded-xl ${
        disabled ? 'bg-slate-200' : 'bg-slate-900'
      } ${className}`}
    >
      <Text className={`font-label-lg ${disabled ? 'text-slate-500' : 'text-white'}`}>
        {label}
      </Text>
      {icon && (
        <Icon 
          name={icon} 
          size={18} 
          color={disabled ? '#64748b' : '#ffffff'} 
          style={{ marginLeft: 8 }} 
        />
      )}
    </AnimatedPressable>
  );
}
