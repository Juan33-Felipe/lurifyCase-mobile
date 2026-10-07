import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons as Icon } from '@expo/vector-icons';

type Tab = 'dockets' | 'audit' | 'case-map' | 'settings';

interface BottomNavProps {
  activeTab?: Tab;
  onDocketsPress?: () => void;
  onAuditPress?: () => void;
  onCaseMapPress?: () => void;
  onSetupPress?: () => void;
}

export function BottomNav({ activeTab = 'dockets', onDocketsPress, onAuditPress, onCaseMapPress, onSetupPress }: BottomNavProps) {
  const insets = useSafeAreaInsets();
  
  return (
    <View 
      className="absolute bottom-0 w-full z-50 bg-surface-glass-modal shadow-sm border-t border-[rgba(45,42,38,0.06)]"
      style={{ paddingBottom: Platform.OS === 'ios' ? insets.bottom : Math.max(insets.bottom, 12) }}
    >
      <View className="relative flex-row items-center justify-around h-16 px-gutter-sm max-w-lg mx-auto w-full">
        <TouchableOpacity 
          onPress={onDocketsPress}
          className="flex-col items-center justify-center w-14 h-12"
        >
          <Icon name="folder-open" size={22} color={activeTab === 'dockets' ? '#c59b27' : '#757065'} />
          <Text className={`font-label-sm text-label-sm mt-0.5 ${activeTab === 'dockets' ? 'text-gold-burnished font-semibold' : 'text-ink-muted'}`}>Dockets</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={onAuditPress}
          className="flex-col items-center justify-center w-14 h-12"
        >
          <Icon name="verified" size={22} color={activeTab === 'audit' ? '#c59b27' : '#757065'} />
          <Text className={`font-label-sm text-label-sm mt-0.5 ${activeTab === 'audit' ? 'text-gold-burnished font-semibold' : 'text-ink-muted'}`}>Audit</Text>
        </TouchableOpacity>

        <View className="flex-col items-center justify-center w-14 h-12 -mt-5">
          <TouchableOpacity className="shadow-sm active:scale-95 transition-transform">
            <LinearGradient
              colors={['#d4af37', '#c59b27']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="w-[52px] h-[52px] rounded-full flex items-center justify-center"
            >
              <Icon name="add" size={28} color="#181716" />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          onPress={onCaseMapPress}
          className="flex-col items-center justify-center w-14 h-12"
        >
          <Icon name="hub" size={22} color={activeTab === 'case-map' ? '#c59b27' : '#757065'} />
          <Text className={`font-label-sm text-label-sm mt-0.5 ${activeTab === 'case-map' ? 'text-gold-burnished font-semibold' : 'text-ink-muted'}`}>Case Map</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={onSetupPress}
          className="flex-col items-center justify-center w-14 h-12"
        >
          <Icon name="tune" size={22} color={activeTab === 'settings' ? '#c59b27' : '#757065'} />
          <Text className={`font-label-sm text-label-sm mt-0.5 ${activeTab === 'settings' ? 'text-gold-burnished font-semibold' : 'text-ink-muted'}`}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
