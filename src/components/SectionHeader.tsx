import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';

interface SectionHeaderProps {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
}

export function SectionHeader({ title, actionLabel, onActionPress }: SectionHeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-1 mb-space-sm mt-space-xs">
      <Text className="font-label-md text-[11px] uppercase tracking-[0.1em] text-outline font-bold">
        {title}
      </Text>
      {actionLabel && (
        <Pressable onPress={onActionPress} className="flex-row items-center gap-0.5 active:opacity-70 p-1">
          <Text className="font-label-sm text-[11px] text-secondary font-bold">{actionLabel}</Text>
          <Icon name="chevron-right" size={14} color="#e4c277" />
        </Pressable>
      )}
    </View>
  );
}
