import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { BottomNav } from '../components/BottomNav';

export default function CaseMapScreen({ onNavigateToSetup, onNavigateToDockets, onNavigateToAudit }: { onNavigateToSetup?: () => void, onNavigateToDockets?: () => void, onNavigateToAudit?: () => void }) {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Facts', 'Evidence', 'Statutes'];

  return (
    <View className="flex-1 bg-surface relative" style={{ paddingBottom: insets.bottom }}>
      {/* Header */}
      <View className="absolute top-0 w-full z-50 bg-surface/95 border-b border-border-vellum shadow-sm" style={{ paddingTop: insets.top }}>
        <View className="h-16 px-margin flex-row items-center justify-between">
          <View className="flex-row items-center gap-space-sm">
            <LinearGradient colors={['#d4af37', '#c59b27']} className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm">
              <Icon name="gavel" size={18} color="#181716" />
            </LinearGradient>
            <Text className="font-headline-md text-xl text-ink-obsidian font-bold tracking-tight">Case Map</Text>
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
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-col w-full gap-4">
          
          {/* Subheader */}
          <View className="px-margin pt-4 flex-row items-baseline justify-between">
            <View>
              <Text className="font-headline-md text-2xl text-ink-obsidian font-bold tracking-tight">State v. Sterling</Text>
              <Text className="font-body-sm text-sm text-ink-muted mt-1">Docket #882-CR</Text>
            </View>
            <View className="items-end bg-surface-container-lowest px-3 py-1.5 rounded-lg border border-border-vellum">
              <Text className="font-headline-sm text-lg text-ink-obsidian font-bold">18</Text>
              <Text className="font-label-sm text-[10px] text-ink-muted uppercase">Elements</Text>
            </View>
          </View>

          {/* Filters */}
          <View className="px-margin">
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

          {/* Interactive Canvas */}
          <View className="px-margin">
            <View className="relative w-full h-[360px] rounded-2xl overflow-hidden bg-surface-container-lowest shadow-sm border border-border-vellum">
              
              {/* Canvas Controls */}
              <View className="absolute top-3 left-3 flex-col gap-2 z-20">
                <View className="bg-surface/90 rounded-lg shadow-sm border border-border-vellum">
                  <TouchableOpacity className="w-8 h-8 flex items-center justify-center border-b border-border-vellum">
                    <Icon name="add" size={20} color="#2d2a26" />
                  </TouchableOpacity>
                  <TouchableOpacity className="w-8 h-8 flex items-center justify-center">
                    <Icon name="remove" size={20} color="#2d2a26" />
                  </TouchableOpacity>
                </View>
              </View>

              <View className="absolute top-3 right-3 flex-row gap-2 z-20">
                <TouchableOpacity className="w-10 h-10 rounded-full bg-ink-obsidian flex items-center justify-center shadow-sm">
                  <Icon name="mic" size={20} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity className="w-10 h-10 rounded-full bg-gold-burnished flex items-center justify-center shadow-sm">
                  <Icon name="add" size={24} color="#181716" />
                </TouchableOpacity>
              </View>

              {/* Simplified Nodes */}
              <View className="absolute inset-0 z-10 pointer-events-none">
                
                {/* Node 1 */}
                <View className="absolute top-[80px] left-[20px] p-3 rounded-xl bg-surface-container-lowest shadow-md border-l-4 border-l-gold-burnished">
                  <Text className="font-mono text-[10px] text-ink-muted mb-1">EVIDENCE • EX-D</Text>
                  <Text className="font-headline-sm text-sm text-ink-obsidian font-bold">Phone Telemetry</Text>
                </View>

                {/* Node 2 */}
                <View className="absolute top-[40px] right-[20px] p-3 rounded-xl bg-surface/90 shadow-sm border border-border-vellum">
                  <Text className="font-mono text-[10px] text-ink-muted mb-1">RULE</Text>
                  <Text className="font-headline-sm text-sm text-ink-obsidian font-bold">FRE 803(6)</Text>
                </View>

                {/* Node 3 */}
                <View className="absolute top-[180px] left-[100px] p-3 rounded-xl bg-error/10 shadow-sm border border-error/20">
                  <Text className="font-mono text-[10px] text-error font-bold mb-1">FACT PIVOT</Text>
                  <Text className="font-headline-sm text-sm text-ink-obsidian font-bold">Timeline Discrepancy</Text>
                </View>

                {/* Node 4 */}
                <View className="absolute bottom-[40px] right-[20px] p-3 rounded-xl bg-surface/90 shadow-sm border border-border-vellum">
                  <Text className="font-mono text-[10px] text-ink-muted mb-1">WITNESS B</Text>
                  <Text className="font-headline-sm text-sm text-ink-obsidian font-bold">Refutes Pier 4</Text>
                </View>

              </View>
            </View>
          </View>

          {/* Conflict Alert Banner */}
          <View className="px-margin">
            <View className="p-4 rounded-xl bg-error-container/50 border border-error/30 flex-row items-center justify-between">
              <View className="flex-row items-center gap-3 flex-1">
                <Icon name="crisis-alert" size={24} color="#ba1a1a" />
                <View>
                  <Text className="font-headline-sm text-base font-bold text-on-error-container">Conflict Flagged</Text>
                  <Text className="font-body-sm text-sm text-on-error-container/80">Witness contradicts device records.</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text className="text-error font-label-md text-sm font-bold">Review</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Inspector Panel */}
          <View className="px-margin mb-6">
            <View className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm border border-border-vellum">
              
              <View className="flex-row items-start justify-between mb-4">
                <View className="flex-1 pr-4">
                  <Text className="font-mono text-xs text-ink-muted mb-1 font-semibold">#EX-004</Text>
                  <Text className="font-headline-md text-xl text-ink-obsidian font-bold">Exhibit D: Telemetry</Text>
                </View>
                <TouchableOpacity className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center">
                  <Icon name="more-horiz" size={24} color="#757065" />
                </TouchableOpacity>
              </View>

              <View className="p-4 rounded-xl bg-surface-container-low mb-4">
                <Text className="font-body-md text-sm text-ink-espresso leading-relaxed">
                  Antenna data places the device within 400m of the facility at 11:42 PM, conflicting with Witness B's timeline. Admissible under FRE 803(6).
                </Text>
              </View>

              <View className="flex-row gap-3">
                <TouchableOpacity className="flex-1 h-12 rounded-xl bg-ink-obsidian flex items-center justify-center">
                  <Text className="text-surface-bright font-label-lg text-base font-bold">View Exhibit</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 h-12 rounded-xl bg-surface-container-high flex items-center justify-center">
                  <Text className="text-ink-obsidian font-label-lg text-base font-bold">Attach Rule</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>

        </View>
      </ScrollView>

      <BottomNav onSetupPress={onNavigateToSetup} onDocketsPress={onNavigateToDockets} onAuditPress={onNavigateToAudit} activeTab="case-map" />
    </View>
  );
}
