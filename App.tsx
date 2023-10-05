import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootSiblingParent } from "react-native-root-siblings";
// Screens
import { Home } from "./src/screens/Home/Home";
// Styles
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <RootSiblingParent>
          <Toast />
          <Home />
          <StatusBar style="inverted" />
        </RootSiblingParent>
      </SafeAreaProvider>
    </>
  );
}
