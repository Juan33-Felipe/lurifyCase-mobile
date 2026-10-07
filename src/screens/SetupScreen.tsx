import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { BottomNav } from '../components/BottomNav';

export default function SetupScreen({ onBack, onNavigateToDockets, onNavigateToAudit, onNavigateToCaseMap }: { onBack?: () => void, onNavigateToDockets?: () => void, onNavigateToAudit?: () => void, onNavigateToCaseMap?: () => void }) {
  const insets = useSafeAreaInsets();
  
  // Toggles
  const [biometricAuth, setBiometricAuth] = useState(true);
  const [localEnclave, setLocalEnclave] = useState(true);
  const [watermark, setWatermark] = useState(true);
  
  const [contradictionAlerts, setContradictionAlerts] = useState(true);
  const [autoExtract, setAutoExtract] = useState(true);

  // Gradient for switch
  const SWITCH_TRACK_COLOR = { false: '#ebe8e0', true: '#c59b27' };
  const getThumbColor = (isEnabled: boolean) => (isEnabled ? '#ffffff' : '#ffffff');

  return (
    <View 
      className="flex-1 bg-surface" 
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      {/* Header Superior */}
      <View className="flex-row items-center justify-between px-margin h-16 bg-surface/95 border-b border-border-vellum shadow-sm z-10">
        <TouchableOpacity onPress={onBack} className="w-10 h-10 items-center justify-center rounded-full active:bg-surface-container-high">
          <Icon name="arrow-back" size={24} color="#181716" />
        </TouchableOpacity>
        <Text className="font-headline-md text-xl text-ink-obsidian font-bold">Settings</Text>
        <View className="w-10" />
      </View>

      <ScrollView 
        className="flex-1 w-full"
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-col w-full gap-6">
          
          {/* Attorney Dossier */}
          <View className="flex-row items-center gap-4 rounded-xl bg-surface-container-lowest p-4 shadow-sm border border-border-vellum">
            <View className="relative shrink-0">
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDh-y_Nj8Il1D-iIDQEcgIitEo5IgQz17xfzhMC_3g-THL5WZ-T0zMReTXJgKClci2IBKEgbi0A61Jqm2klu-jy_IMH1WabPX0GOgw9qmoO4ZyhkWqqKtP5QO6pToXSkIDSZqtXh55CMJiX6krDKJ4__Z7dgkVMf8o3cToJNHBX-Db1agYcAUNV7RAg82SjV02J0lrf8M9zapBWRnjlyrB-jxMtlQC-sBQaZrluOdav' }} 
                className="w-16 h-16 rounded-xl"
              />
              <View className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-sm">
                <Icon name="verified" size={14} color="#c59b27" />
              </View>
            </View>
            <View className="flex-col flex-1">
              <Text className="font-headline-sm text-lg text-ink-obsidian font-bold">Eleanor Vance, Esq.</Text>
              <Text className="font-body-md text-sm text-ink-espresso mt-0.5">Senior Trial Partner</Text>
            </View>
            <TouchableOpacity className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
              <Icon name="edit" size={18} color="#757065" />
            </TouchableOpacity>
          </View>

          {/* Security Section */}
          <View className="gap-2">
            <Text className="font-label-md text-sm text-ink-muted uppercase tracking-widest font-semibold px-1">Security Vault</Text>
            
            <View className="rounded-2xl bg-surface-container-lowest border border-border-vellum overflow-hidden shadow-sm">
              <View className="flex-row items-center justify-between p-4 border-b border-border-vellum">
                <Text className="font-body-md text-base text-ink-obsidian font-semibold">Zero-Knowledge Hardware Vault</Text>
                <Icon name="shield" size={20} color="#c59b27" />
              </View>
              
              <View className="p-4 gap-4">
                <View className="flex-row items-center justify-between">
                  <Text className="font-body-md text-base text-ink-obsidian">Biometric Authentication</Text>
                  <Switch value={biometricAuth} onValueChange={setBiometricAuth} trackColor={SWITCH_TRACK_COLOR} thumbColor={getThumbColor(biometricAuth)} />
                </View>
                
                <View className="flex-row items-center justify-between">
                  <Text className="font-body-md text-base text-ink-obsidian">Local SQLite Enclave</Text>
                  <Switch value={localEnclave} onValueChange={setLocalEnclave} trackColor={SWITCH_TRACK_COLOR} thumbColor={getThumbColor(localEnclave)} />
                </View>

                <View className="flex-row items-center justify-between">
                  <Text className="font-body-md text-base text-ink-obsidian">Confidential Watermark</Text>
                  <Switch value={watermark} onValueChange={setWatermark} trackColor={SWITCH_TRACK_COLOR} thumbColor={getThumbColor(watermark)} />
                </View>
              </View>
            </View>
          </View>

          {/* AI Legal Copilot */}
          <View className="gap-2">
            <Text className="font-label-md text-sm text-ink-muted uppercase tracking-widest font-semibold px-1">AI Copilot</Text>
            
            <View className="rounded-2xl bg-surface-container-lowest border border-border-vellum overflow-hidden shadow-sm">
              <View className="p-4 border-b border-border-vellum gap-3">
                <View className="flex-row items-center justify-between">
                  <Text className="font-body-md text-base text-ink-obsidian font-semibold">Evidentiary Threshold</Text>
                  <Text className="font-label-md text-sm text-gold-burnished font-bold">Strict (90%)</Text>
                </View>
                <View className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden mt-1">
                  <View className="w-[90%] h-full bg-gold-burnished rounded-full" />
                </View>
              </View>

              <View className="p-4 border-b border-border-vellum flex-row items-center justify-between">
                <Text className="font-body-md text-base text-ink-obsidian font-semibold">Procedural Law</Text>
                <TouchableOpacity className="flex-row items-center gap-1">
                  <Text className="font-body-md text-sm text-ink-muted">FRE & 9th Circuit</Text>
                  <Icon name="chevron-right" size={20} color="#757065" />
                </TouchableOpacity>
              </View>

              <View className="p-4 flex-row items-center justify-between">
                <Text className="font-body-md text-base text-ink-obsidian font-semibold">Contradiction Alerts</Text>
                <Switch value={contradictionAlerts} onValueChange={setContradictionAlerts} trackColor={SWITCH_TRACK_COLOR} thumbColor={getThumbColor(contradictionAlerts)} />
              </View>
            </View>
          </View>

          {/* Audio Ingestion */}
          <View className="gap-2">
            <Text className="font-label-md text-sm text-ink-muted uppercase tracking-widest font-semibold px-1">Audio & Parsing</Text>
            
            <View className="rounded-2xl bg-surface-container-lowest border border-border-vellum overflow-hidden shadow-sm p-4 gap-4">
              <View className="flex-row items-center justify-between">
                <Text className="font-body-md text-base text-ink-obsidian font-semibold">Speech-to-Text Engine</Text>
                <View className="px-2 py-1 rounded bg-surface-container">
                  <Text className="text-ink-espresso font-label-sm text-xs">v4-Legal</Text>
                </View>
              </View>
              
              <View className="flex-row items-center justify-between">
                <Text className="font-body-md text-base text-ink-obsidian font-semibold">Auto-Extract Elements</Text>
                <Switch value={autoExtract} onValueChange={setAutoExtract} trackColor={SWITCH_TRACK_COLOR} thumbColor={getThumbColor(autoExtract)} />
              </View>
            </View>
          </View>

          {/* Regulatory Compliance & Sign Out */}
          <View className="gap-4 mt-2">
            <View className="rounded-xl bg-surface-container border border-border-vellum p-4 flex-row items-center justify-center gap-2">
              <Icon name="verified-user" size={18} color="#c59b27" />
              <Text className="font-label-md text-sm uppercase font-bold text-gold-burnished">Institutional Grade Compliance</Text>
            </View>

            <TouchableOpacity className="w-full py-4 rounded-xl bg-surface-container-lowest border border-error/30 flex-row items-center justify-center gap-2 shadow-sm mb-4">
              <Icon name="logout" size={20} color="#ba1a1a" />
              <Text className="font-headline-sm text-base text-error font-bold">Sign Out</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>

      <BottomNav onDocketsPress={onNavigateToDockets} onAuditPress={onNavigateToAudit} onCaseMapPress={onNavigateToCaseMap} activeTab="settings" />
    </View>
  );
}
