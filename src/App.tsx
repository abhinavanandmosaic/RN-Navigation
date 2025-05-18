import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "./hoc/ThemeProvider";
import DrawerNavigator from "./navigation/DrawerNavigator";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
          <ThemeProvider>
            <NavigationContainer
              linking={{
                enabled: true,
                prefixes: [
                  // Change the scheme to match your app's scheme defined in app.json
                  "helloworld://",
                ],
              }}
            >
              <DrawerNavigator />
            </NavigationContainer>
          </ThemeProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
