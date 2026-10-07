import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';

interface SetupHeaderProps {
  title: string;
  onBack?: () => void;
}

export function SetupHeader({ title, onBack }: SetupHeaderProps) {
  return (
    <View className="mb-space-xl flex-row items-center justify-between">
      <Pressable 
        onPress={onBack}
        className="w-10 h-10 items-center justify-center rounded-full bg-white border border-slate-200"
      >
        <Icon name="arrow-back" size={20} color="#0f172a" />
      </Pressable>
      <Text className="font-headline-sm text-slate-900">{title}</Text>
      <View className="w-10 h-10" />
    </View>
  );
}
