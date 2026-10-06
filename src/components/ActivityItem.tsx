import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import Animated, { FadeInLeft, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface ActivityItemProps {
  item: {
    title: string;
    type: string;
    status: string;
    time: string;
    action: string;
    icon: keyof typeof Icon.glyphMap;
  };
  index: number;
}

export function ActivityItem({ item, index }: ActivityItemProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View entering={FadeInLeft.duration(500).delay(250 + index * 100).springify()}>
      <AnimatedPressable 
        style={animatedStyle}
        onPressIn={() => scale.value = withSpring(0.97, { damping: 20, stiffness: 400 })}
        onPressOut={() => scale.value = withSpring(1, { damping: 20, stiffness: 400 })}
        className="flex-row items-center justify-between rounded-2xl bg-surface-container/30 p-space-md active:bg-surface-container/60 border border-surface-container-high/40 mb-space-sm"
      >
        <View className="flex-row items-center gap-space-md flex-1 pr-2">
          <View className={`w-11 h-11 rounded-2xl flex items-center justify-center ${item.type === 'document' ? 'bg-primary/10 border border-primary/20' : 'bg-surface-container-highest'}`}>
            <Icon name={item.icon} size={22} color={item.type === 'document' ? '#f2ca50' : '#d0c5af'} />
          </View>
          <View className="flex-1 justify-center gap-0.5">
            <View className="flex-row items-center gap-2 pr-2">
              <Text className="font-headline-sm text-[14px] text-on-surface font-semibold flex-shrink" numberOfLines={1}>{item.title}</Text>
              <View className={`px-1.5 py-0.5 rounded border ${item.type === 'document' ? 'bg-primary/10 border-primary/20' : 'bg-surface-variant border-surface-container-highest'}`}>
                <Text className={`font-label-sm text-[8px] uppercase font-bold tracking-[0.1em] ${item.type === 'document' ? 'text-primary' : 'text-on-surface-variant'}`}>
                  {item.status}
                </Text>
              </View>
            </View>
            <Text className="font-body-sm text-[12px] text-outline mt-0.5" numberOfLines={1}>
              {item.type === 'document' ? 'Generated via automation protocol' : 'Manual append entry recorded'}
            </Text>
          </View>
        </View>
        <View className="flex-col items-end gap-1">
          <Text className="font-label-sm text-[10px] text-outline">{item.time}</Text>
          <Text className="font-label-sm text-[10px] text-secondary font-bold tracking-wide">{item.action}</Text>
        </View>
      </AnimatedPressable>
    </Animated.View>
  );
}
