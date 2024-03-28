import React from "react";
import HomeScreen from "../screens/HomeScreen";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductScreen from "../screens/ProductScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcon name="home" color="blue" size={30} />
            ) : (
              <MaterialIcon name="home" color="black" size={30} />
            ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcon name="person" color="blue" size={30} />
            ) : (
              <MaterialIcon name="person" color="black" size={30} />
            ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={ProductScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcon name="shopping-cart" color="blue" size={30} />
            ) : (
              <MaterialIcon name="shopping-cart" color="black" size={30} />
            ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
