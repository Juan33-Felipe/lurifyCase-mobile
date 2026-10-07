import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { BottomNav } from '../components/BottomNav';

export default function AuditScreen({ onNavigateToSetup, onNavigateToDockets, onNavigateToCaseMap }: { onNavigateToSetup?: () => void, onNavigateToDockets?: () => void, onNavigateToCaseMap?: () => void }) {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-surface relative" style={{ paddingBottom: insets.bottom }}>
      {/* Header */}
      <View className="absolute top-0 w-full z-50 bg-surface/95 border-b border-border-vellum shadow-sm" style={{ paddingTop: insets.top }}>
        <View className="h-16 px-margin flex-row items-center justify-between">
          <View className="flex-row items-center gap-space-sm">
            <LinearGradient colors={['#d4af37', '#c59b27']} className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm">
              <Icon name="gavel" size={18} color="#181716" />
            </LinearGradient>
            <Text className="font-headline-md text-xl text-ink-obsidian font-bold tracking-tight">Audit</Text>
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
          
          {/* Context Banner */}
          <View className="flex-row items-center justify-between pt-2">
            <Text className="font-mono text-sm text-ink-espresso font-semibold">#882-CR • State v. Sterling</Text>
            <View className="flex-row p-1 rounded-lg bg-surface-container-high">
              <TouchableOpacity className="px-3 py-1 rounded bg-ink-obsidian">
                <Text className="text-surface-bright font-label-sm font-bold">Real-Time</Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-3 py-1 rounded">
                <Text className="text-ink-muted font-label-sm font-semibold">Historical</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Solidity Benchmark Hero Card */}
          <View className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm border border-border-vellum">
            <View className="flex-row items-center justify-between mb-6">
              <View>
                <Text className="font-label-sm text-xs text-ink-muted uppercase tracking-widest mb-1">Solidity Benchmark</Text>
                <View className="flex-row items-baseline gap-2">
                  <Text className="font-headline-lg text-4xl text-ink-obsidian font-bold tracking-tight">86%</Text>
                  <Icon name="trending-up" size={20} color="#c59b27" />
                </View>
              </View>
              <TouchableOpacity className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center border border-border-vellum">
                <Icon name="sync" size={20} color="#2d2a26" />
              </TouchableOpacity>
            </View>

            {/* Simplified Evidentiary Bar Chart */}
            <View className="flex-row items-end justify-between gap-3 h-28 mt-2">
              <View className="flex-1 items-center h-full justify-end">
                <View className="w-full bg-surface-container-high rounded-t-lg" style={{ height: '35%' }} />
                <Text className="font-label-sm text-xs text-ink-muted mt-2">Facts</Text>
              </View>
              <View className="flex-1 items-center h-full justify-end relative">
                <View className="bg-ink-obsidian px-2 py-0.5 rounded shadow-sm mb-2">
                  <Text className="font-label-sm text-xs font-bold text-surface-bright">94%</Text>
                </View>
                <LinearGradient colors={['#c59b27', '#d4af37']} className="w-full rounded-t-lg shadow-sm" style={{ height: '94%' }} />
                <Text className="font-label-sm text-xs font-bold text-ink-obsidian mt-2">Evidence</Text>
              </View>
              <View className="flex-1 items-center h-full justify-end">
                <View className="w-full bg-surface-container-high rounded-t-lg" style={{ height: '42%' }} />
                <Text className="font-label-sm text-xs text-ink-muted mt-2">Rules</Text>
              </View>
              <View className="flex-1 items-center h-full justify-end">
                <View className="w-full bg-surface-container-high rounded-t-lg" style={{ height: '58%' }} />
                <Text className="font-label-sm text-xs text-ink-muted mt-2">Preced.</Text>
              </View>
              <View className="flex-1 items-center h-full justify-end">
                <View className="w-full bg-error/20 rounded-t-lg border-t border-error/40" style={{ height: '28%' }} />
                <Text className="font-label-sm text-xs text-error mt-2 font-semibold">Witness</Text>
              </View>
            </View>
          </View>

          {/* Critical Vulnerabilities */}
          <View className="gap-4">
            <View className="flex-row items-center justify-between">
              <Text className="font-headline-md text-xl text-ink-obsidian font-bold tracking-tight">Critical Alerts</Text>
              <View className="w-6 h-6 rounded-full bg-error flex items-center justify-center">
                <Text className="text-on-error font-label-sm text-xs font-bold">2</Text>
              </View>
            </View>

            {/* Alert Card 1 */}
            <View className="rounded-2xl bg-surface-container-lowest p-space-md shadow-sm border border-error/30 border-l-4 border-l-error">
              <View className="flex-row items-center gap-3 mb-2">
                <Icon name="warning" size={20} color="#ba1a1a" />
                <Text className="font-headline-sm text-base text-ink-obsidian font-bold">Procedural Gap Detected</Text>
              </View>
              <Text className="font-body-md text-sm text-ink-espresso leading-relaxed mb-4">
                Deposition timeline of Exhibit D contains a 48-hour gap unreconciled with defendant's cellular records.
              </Text>
              <TouchableOpacity className="flex-row items-center justify-between">
                <Text className="font-mono text-xs text-ink-muted">Exhibit D • p.114</Text>
                <Text className="font-label-md text-sm text-error font-bold">Review Gap</Text>
              </TouchableOpacity>
            </View>

            {/* Alert Card 2 */}
            <View className="rounded-2xl bg-surface-container-lowest p-space-md shadow-sm border border-[rgba(197,155,39,0.3)] border-l-4 border-l-gold-burnished">
              <View className="flex-row items-center gap-3 mb-2">
                <Icon name="difference" size={20} color="#c59b27" />
                <Text className="font-headline-sm text-base text-ink-obsidian font-bold">Logical Contradiction</Text>
              </View>
              <Text className="font-body-md text-sm text-ink-espresso leading-relaxed mb-4">
                Cross-statement divergence between Witness B and Expert Report on vehicle deceleration.
              </Text>
              <TouchableOpacity className="flex-row items-center justify-between">
                <Text className="font-mono text-xs text-ink-muted">Witness B • p.42</Text>
                <Text className="font-label-md text-sm text-gold-burnished font-bold">Compare Records</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Verified Citations */}
          <View className="gap-4">
            <View className="flex-row items-center justify-between">
              <Text className="font-headline-md text-xl text-ink-obsidian font-bold tracking-tight">Verified Citations</Text>
              <TouchableOpacity>
                <Text className="font-label-md text-sm text-ink-muted">View Tree</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row gap-4">
              <View className="flex-1 p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-border-vellum">
                <Icon name="folder-special" size={24} color="#c59b27" className="mb-2" />
                <Text className="font-headline-sm text-base text-ink-obsidian font-bold mb-1">Ex. A-104</Text>
                <Text className="font-body-sm text-xs text-ink-muted">Chain of Custody Verif.</Text>
              </View>
              <View className="flex-1 p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-border-vellum">
                <Icon name="account-balance" size={24} color="#757065" className="mb-2" />
                <Text className="font-headline-sm text-base text-ink-obsidian font-bold mb-1">FRE 803(6)</Text>
                <Text className="font-body-sm text-xs text-ink-muted">Business Records</Text>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>

      <BottomNav onSetupPress={onNavigateToSetup} onDocketsPress={onNavigateToDockets} onCaseMapPress={onNavigateToCaseMap} activeTab="audit" />
    </View>
  );
}
