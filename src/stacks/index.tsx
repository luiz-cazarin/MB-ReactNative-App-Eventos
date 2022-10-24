import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../../src/routes";
import { Login } from "../../src/screens/Login";
import { Event } from "../../src/screens/Event";
import { Register } from "../../src/screens/Register";
import { OrderTickets } from "../screens/OrderTikets";
import { OrderFinish } from "../screens/OrderFinish";

function Tabs() {
  return <Routes />;
}
const Stack = createNativeStackNavigator();

export function Stacks() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={Tabs} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="event" component={Event} />
      <Stack.Screen name="order-tikets" component={OrderTickets} />
      <Stack.Screen name="order-finish" component={OrderFinish} />
    </Stack.Navigator>
  );
}
