import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SavedRecipesProvider } from '../contexts/SavedRecipesContext';

export default function RootLayout() {
  return (
    <SavedRecipesProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)/login" />
        <Stack.Screen name="(auth)/register" />
        <Stack.Screen name="(app)" />
      </Stack>
    </SavedRecipesProvider>
  );
}
