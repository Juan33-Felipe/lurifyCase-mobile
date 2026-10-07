import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { 
  NotoSerif_400Regular,
  NotoSerif_500Medium,
  NotoSerif_600SemiBold 
} from '@expo-google-fonts/noto-serif';
import { 
  PlusJakartaSans_400Regular,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold 
} from '@expo-google-fonts/plus-jakarta-sans';

import './global.css';
import DashboardScreen from './src/screens/DashboardScreen';
import SetupScreen from './src/screens/SetupScreen';
import AuditScreen from './src/screens/AuditScreen';
import CaseMapScreen from './src/screens/CaseMapScreen';
import { useColorScheme } from 'nativewind';

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSerif_400Regular,
    NotoSerif_500Medium,
    NotoSerif_600SemiBold,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
  });

  const [currentScreen, setCurrentScreen] = useState<'Dashboard' | 'Audit' | 'CaseMap' | 'Setup'>('Dashboard');
  const { setColorScheme } = useColorScheme();

  useEffect(() => {
    setColorScheme('light');
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fcf9f1' }}>
        <ActivityIndicator size="large" color="#c59b27" />
      </View>
    );
  }

  const navigateTo = (screen: 'Dashboard' | 'Audit' | 'CaseMap' | 'Setup') => {
    setCurrentScreen(screen);
  };

  const navProps = {
    onNavigateToDockets: () => navigateTo('Dashboard'),
    onNavigateToAudit: () => navigateTo('Audit'),
    onNavigateToCaseMap: () => navigateTo('CaseMap'),
    onNavigateToSetup: () => navigateTo('Setup'),
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      {currentScreen === 'Dashboard' && <DashboardScreen {...navProps} />}
      {currentScreen === 'Audit' && <AuditScreen {...navProps} />}
      {currentScreen === 'CaseMap' && <CaseMapScreen {...navProps} />}
      {currentScreen === 'Setup' && <SetupScreen {...navProps} onBack={() => navigateTo('Dashboard')} />}
    </SafeAreaProvider>
  );
}
