import React from "react";
import { Home } from "./src/screens/Home";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./src/theme";
import {
  useFonts,
  Barlow_400Regular,
  Barlow_700Bold,
  Barlow_500Medium,
  Barlow_600SemiBold,
} from "@expo-google-fonts/barlow";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { TodoProvider } from "./src/context/todoContext";
export default function App() {
  const [fontsLoaded] = useFonts({
    Barlow_400Regular,
    Barlow_700Bold,
    Barlow_500Medium,
    Barlow_600SemiBold,
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TodoProvider>
        <ThemeProvider theme={darkTheme}>
          <StatusBar style="auto" />
          {fontsLoaded ? <Home /> : <ActivityIndicator />}
        </ThemeProvider>
      </TodoProvider>
    </SafeAreaView>
  );
}
