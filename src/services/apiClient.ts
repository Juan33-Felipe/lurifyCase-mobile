import axios from 'axios';
import { Platform } from 'react-native';

// Fallback: 10.0.2.2 para Android Emulator, localhost para iOS Simulator / Web.
const isAndroid = Platform.OS === 'android';
const DEFAULT_BASE_URL = isAndroid ? 'http://10.0.2.2:8080/api/v1' : 'http://localhost:8080/api/v1';
const BASE_URL = process.env.EXPO_PUBLIC_API_URL || DEFAULT_BASE_URL;

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

apiClient.interceptors.request.use(
  (config) => {
    // TODO: Recuperar token JWT (FR-008) desde un almacenamiento seguro
    const token = null; 
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
