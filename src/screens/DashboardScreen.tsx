import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { FadeIn } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

import { mockExpediente, recentActivities } from '../domain/mockData';
import { Header } from '../components/Header';
import { HeroCard } from '../components/HeroCard';
import { SectionHeader } from '../components/SectionHeader';
import { ActionButton } from '../components/ActionButton';
import { ActivityItem } from '../components/ActivityItem';
import { BottomNav } from '../components/BottomNav';

export default function DashboardScreen() {
  const insets = useSafeAreaInsets();
  const [isDictating, setIsDictating] = useState(false);

  return (
    <View className="flex-1 bg-surface relative">
      {/* Difuminado Dorado Background */}
      <Animated.View 
        entering={FadeIn.duration(1500)} 
        className="absolute top-0 w-full h-[500px] z-0 pointer-events-none opacity-50" 
      >
        <LinearGradient
          colors={['rgba(212, 175, 55, 0.3)', 'rgba(242, 202, 80, 0.05)', 'transparent']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="w-full h-full"
        />
      </Animated.View>

      <View className="absolute bottom-0 w-full h-64 z-0 pointer-events-none opacity-40">
        <LinearGradient
          colors={['transparent', 'rgba(212, 175, 55, 0.1)', 'rgba(212, 175, 55, 0.4)']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="w-full h-full"
        />
      </View>

      <Header />

      <ScrollView 
        className="flex-1 w-full z-10 px-margin"
        contentContainerStyle={{ 
          paddingTop: insets.top + 60 + 24, 
          paddingBottom: insets.bottom + 100 
        }}
        showsVerticalScrollIndicator={false}
      >
        <HeroCard expediente={mockExpediente} />

        <View className="mb-space-xl mt-space-sm">
          <SectionHeader title="Quick Actions" />
          <View className="flex-row justify-between gap-space-sm">
            <ActionButton 
              icon="mic" 
              label="Dictate" 
              variant="primary" 
              onPress={() => setIsDictating(!isDictating)} 
            />
            <ActionButton icon="hub" label="Canvas" onPress={() => {}} />
            <ActionButton icon="policy" label="AI Audit" onPress={() => {}} />
            <ActionButton icon="picture-as-pdf" label="Export" onPress={() => {}} />
          </View>
        </View>

        <View className="mb-space-lg">
          <SectionHeader title="Recent Activity" actionLabel="View All" onActionPress={() => {}} />
          <View className="flex-col">
            {recentActivities.map((item, index) => (
              <ActivityItem key={item.id} item={item} index={index} />
            ))}
          </View>
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
}
