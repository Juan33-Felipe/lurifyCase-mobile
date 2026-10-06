import { StatusBar } from 'expo-status-bar';
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

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSerif_400Regular,
    NotoSerif_500Medium,
    NotoSerif_600SemiBold,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#111318' }}>
        <ActivityIndicator size="large" color="#f2ca50" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <DashboardScreen />
    </SafeAreaProvider>
  );
}
