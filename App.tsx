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
import { Provider } from "react-redux";
import store from './src/store'

export default function App() {
  const [fontsLoader] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar backgroundColor="transparent" translucent />
        {fontsLoader ? <Stacks isSignedIn={true} /> : <Loading />}
      </Provider>
    </NavigationContainer>
  );
}
