import React from "react";
import { initializeApp } from "firebase/app";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { Navigation } from "./src/infrastructure/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyA_mLnq8gUJGZ0xB4JIx7I8ZY__0bxYd6A",
  authDomain: "mealstogo-15fb7.firebaseapp.com",
  projectId: "mealstogo-15fb7",
  storageBucket: "mealstogo-15fb7.appspot.com",
  messagingSenderId: "858676373642",
  appId: "1:858676373642:web:2509610dcc9e0bc7e22573",
  measurementId: "G-KWV2MVBCMZ",
};

initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
