import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../../src/routes";
import { Login } from "../../src/screens/Login";
import { Register } from "../../src/screens/Register";
import { Event } from "../screens/Order/Event";
import { OrderTickets } from "../screens/Order/OrderTikets";
import { OrderFinish } from "../screens/Order/OrderFinish";
import { UserProfile } from "../screens/Settings/UserProfile";
import { UserEvents } from "../screens/Settings/UserEvents";
import { CreateEvent } from "../screens/Settings/CreateEvent";
import { EditEvent } from "../screens/Settings/EditEvent";
function Tabs() {
  return <Routes />;
}
const Stack = createNativeStackNavigator();
export function Stacks({ isSignedIn }: any) {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="Main" component={Tabs} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="event" component={Event} />
      <Stack.Screen name="order-tikets" component={OrderTickets} />
      <Stack.Screen name="order-finish" component={OrderFinish} />
      <Stack.Screen name="user-profile" component={UserProfile} />
      <Stack.Screen name="user-events" component={UserEvents} />
      <Stack.Screen name="create-event" component={CreateEvent} />
      <Stack.Screen name="edit-event" component={EditEvent} />
    </Stack.Navigator>
  );
}
("[");
