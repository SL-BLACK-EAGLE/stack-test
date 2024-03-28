import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadingScreen from "../screens/LoadingScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import ProductScreen from "../screens/ProductScreen";
import ProfileScreen from "../screens/ProfileScreen";

const StackNavigator = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function BottomTabs() {
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
  }

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        setIsLogged(!!token);
        setIsLoaded(true);
      } catch (error) {
        console.log("error message", error);
      }
    };
    checkLoginStatus();
  }, []);

  if (!isLoaded) {
    return <LoadingScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigator;
