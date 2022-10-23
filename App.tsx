import "./src/services/notificationConfigs";
import { StatusBar } from "expo-status-bar";
import { Background } from "./src/components/Background";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import { Loading } from "./src/components/Loading";
import { Stacks } from "./src/stacks";

export default function App() {
  const [fontsLoader] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent />
      {fontsLoader ? <Stacks /> : <Loading />}
    </NavigationContainer>
  );
}
