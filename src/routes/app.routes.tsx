import { Home } from "../screens/Home";
import { Favorite } from "../screens/Favorite";
import { Tickets } from "../screens/Tickets";
import { Profile } from "../screens/Settings/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IconButton } from "react-native-paper";

export function AppRoutes() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: { backgroundColor: "#ffff" },
        tabBarInactiveTintColor: "#1e1e1e",
        tabBarActiveTintColor: "#E85B5B",
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <IconButton icon="home-outline" iconColor={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ size, color }) => (
            <IconButton icon="heart-outline" iconColor={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="tickets"
        component={Tickets}
        options={{
          tabBarIcon: ({ size, color }) => (
            <IconButton
              icon="ticket-confirmation-outline"
              iconColor={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <IconButton icon="account-outline" iconColor={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
