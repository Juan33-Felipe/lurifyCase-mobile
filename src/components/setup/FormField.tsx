import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';

interface FormFieldProps extends TextInputProps {
  label: string;
  error?: string;
  inputClassName?: string;
}

export function FormField({ label, error, className = '', inputClassName = '', ...props }: FormFieldProps) {
  return (
    <View className={`mb-space-md ${className}`}>
      <Text className="font-label-lg text-slate-700 mb-space-xs">{label}</Text>
      <View className={`border rounded-xl bg-white px-space-md py-space-sm ${error ? 'border-red-500' : 'border-slate-200'}`}>
        <TextInput
          className={`font-body-md text-slate-900 w-full ${inputClassName}`}
          placeholderTextColor="#94a3b8"
          {...props}
        />
      </View>
      {error && (
        <Text className="font-body-sm text-red-500 mt-1">{error}</Text>
      )}
    </View>
  );
}
