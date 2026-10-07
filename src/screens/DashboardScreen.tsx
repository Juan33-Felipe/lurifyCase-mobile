import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { BottomNav } from '../components/BottomNav';

export default function DashboardScreen({ onNavigateToSetup, onNavigateToAudit, onNavigateToCaseMap }: { onNavigateToSetup?: () => void, onNavigateToAudit?: () => void, onNavigateToCaseMap?: () => void }) {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Active', 'Federal', 'Pre-Trial'];

  return (
    <View className="flex-1 bg-surface relative" style={{ paddingBottom: insets.bottom }}>
      {/* Header */}
      <View className="absolute top-0 w-full z-50 bg-surface/95 border-b border-border-vellum shadow-sm" style={{ paddingTop: insets.top }}>
        <View className="h-16 px-margin flex-row items-center justify-between">
          <View className="flex-row items-center gap-space-sm">
            <LinearGradient colors={['#d4af37', '#c59b27']} className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm">
              <Icon name="gavel" size={18} color="#181716" />
            </LinearGradient>
            <Text className="font-headline-md text-xl text-ink-obsidian font-bold tracking-tight">Dockets</Text>
          </View>
          <View className="flex-row items-center gap-2">
            <TouchableOpacity className="w-10 h-10 rounded-full flex items-center justify-center">
              <Icon name="search" size={24} color="#2d2a26" />
            </TouchableOpacity>
            <View className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center ml-1">
              <Icon name="person" size={18} color="#181716" />
            </View>
          </View>
        </View>
      </View>

      <ScrollView 
        className="flex-1 w-full pt-16 z-10"
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: insets.top + 70, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-col w-full gap-space-lg">
          
          {/* Filters */}
          <View className="flex-col gap-space-sm pt-2">
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row overflow-visible" contentContainerStyle={{ gap: 8 }}>
              {filters.map((filter) => (
                <TouchableOpacity 
                  key={filter}
                  onPress={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full ${activeFilter === filter ? 'bg-ink-obsidian' : 'bg-surface-container-lowest border border-surface-container'}`}
                >
                  <Text className={`font-label-md text-sm ${activeFilter === filter ? 'text-surface-bright font-bold' : 'text-ink-muted'}`}>
                    {filter}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Priority Matter Hero Glass Card */}
          <View className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-space-lg border border-border-vellum shadow-sm">
            <View className="flex-row items-center justify-between mb-4">
              <View className="flex-row items-center gap-2">
                <Icon name="star" size={16} color="#c59b27" />
                <Text className="font-label-sm uppercase tracking-widest text-gold-burnished font-bold text-xs">Lead Matter</Text>
              </View>
              <View className="flex-row items-center gap-1.5">
                <View className="w-2 h-2 rounded-full bg-error" />
                <Text className="font-label-sm text-xs text-error font-semibold">Sealed</Text>
              </View>
            </View>

            <View className="gap-1 mb-6">
              <Text className="font-headline-lg text-2xl text-ink-obsidian font-bold leading-tight">State v. Sterling Industries</Text>
              <Text className="font-body-md text-ink-muted text-sm tracking-wide">#882-CR • 9th Judicial Circuit</Text>
            </View>

            {/* Metrics Grid */}
            <View className="flex-row gap-4 mb-6">
              <View className="flex-1">
                <Text className="font-label-sm text-xs text-ink-muted uppercase tracking-wider mb-1">Trial Readiness</Text>
                <Text className="font-headline-sm text-xl text-gold-burnished font-bold">88%</Text>
              </View>
              <View className="flex-1 border-l border-border-vellum pl-4">
                <Text className="font-label-sm text-xs text-ink-muted uppercase tracking-wider mb-1">Elements</Text>
                <Text className="font-headline-sm text-xl text-ink-obsidian font-bold">18</Text>
              </View>
              <View className="flex-1 border-l border-border-vellum pl-4">
                <Text className="font-label-sm text-xs text-ink-muted uppercase tracking-wider mb-1">Hearing In</Text>
                <Text className="font-headline-sm text-xl text-ink-espresso font-bold">4 Days</Text>
              </View>
            </View>

            <View className="flex-row gap-3">
              <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 h-12 rounded-xl bg-ink-obsidian">
                <Icon name="hub" size={20} color="#ffffff" />
                <Text className="text-surface-bright font-label-lg font-bold">Case Map</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 h-12 rounded-xl bg-surface-container-high">
                <Icon name="description" size={20} color="#2d2a26" />
                <Text className="text-ink-obsidian font-label-lg font-bold">Brief</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Active Dockets List */}
          <View className="flex-col gap-4 mt-2">
            <View className="flex-row items-center justify-between mb-2">
              <Text className="font-headline-md text-xl text-ink-obsidian font-bold tracking-tight">Active Cases</Text>
              <TouchableOpacity>
                <Text className="text-ink-muted font-label-md">View All</Text>
              </TouchableOpacity>
            </View>

            {/* Case Item 1 */}
            <TouchableOpacity className="p-4 rounded-2xl bg-surface-container-lowest border border-border-vellum flex-row items-center justify-between">
              <View className="flex-1 pr-4">
                <Text className="font-mono text-xs text-ink-muted mb-1 font-semibold">#2025-CV-1104</Text>
                <Text className="font-headline-sm text-base text-ink-obsidian font-bold mb-1" numberOfLines={1}>Vance Corp v. Apex Logistics</Text>
                <Text className="font-body-sm text-ink-muted text-sm" numberOfLines={1}>Civil Antitrust</Text>
              </View>
              <Icon name="chevron-right" size={24} color="#aaa395" />
            </TouchableOpacity>

            {/* Case Item 2 */}
            <TouchableOpacity className="p-4 rounded-2xl bg-surface-container-lowest border border-border-vellum flex-row items-center justify-between">
              <View className="flex-1 pr-4">
                <Text className="font-mono text-xs text-ink-muted mb-1 font-semibold">#2024-PT-901</Text>
                <Text className="font-headline-sm text-base text-ink-obsidian font-bold mb-1" numberOfLines={1}>In re Horizon BioTech</Text>
                <Text className="font-body-sm text-ink-muted text-sm" numberOfLines={1}>Patent Infringement</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Icon name="schedule" size={16} color="#c59b27" />
                <Icon name="chevron-right" size={24} color="#aaa395" />
              </View>
            </TouchableOpacity>

            {/* Case Item 3 */}
            <TouchableOpacity className="p-4 rounded-2xl bg-surface-container-lowest border border-error/20 flex-row items-center justify-between">
              <View className="flex-1 pr-4">
                <Text className="font-mono text-xs text-error mb-1 font-semibold">#2025-CR-044 • Action Required</Text>
                <Text className="font-headline-sm text-base text-ink-obsidian font-bold mb-1" numberOfLines={1}>Commonwealth v. Miller</Text>
                <Text className="font-body-sm text-ink-muted text-sm" numberOfLines={1}>Criminal Defense</Text>
              </View>
              <Icon name="chevron-right" size={24} color="#aaa395" />
            </TouchableOpacity>
          </View>

          {/* Quick Actions */}
          <View className="flex-row items-center justify-between pt-4 pb-6">
            <TouchableOpacity className="flex-row items-center gap-2 px-4 py-3 rounded-xl bg-surface-container-lowest border border-border-vellum flex-1 mr-2 justify-center">
              <Icon name="archive" size={20} color="#757065" />
              <Text className="text-ink-muted font-label-md font-semibold">Archive</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center gap-2 px-4 py-3 rounded-xl bg-surface-container-lowest border border-border-vellum flex-1 ml-2 justify-center">
              <Icon name="cloud-sync" size={20} color="#c59b27" />
              <Text className="text-gold-burnished font-label-md font-bold">Sync Filings</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>

      <BottomNav onSetupPress={onNavigateToSetup} onAuditPress={onNavigateToAudit} onCaseMapPress={onNavigateToCaseMap} activeTab="dockets" />
    </View>
  );
}
