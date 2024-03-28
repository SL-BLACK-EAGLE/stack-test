import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadingScreen from "./LoadingScreen";


const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem("auth_token");
      if (token !== null) {
        navigation.navigate("Main");
      } 
    };
    checkLogin();
  }, []);


  return (
    <SafeAreaView className="flex-1 gap-5 items-center justify-center">
      
      <View className="flex items-center justify-center gap-5 z-20">
        <Text className=" font-bold text-2xl text-gray-600">Welcome To</Text>
        <Text className=" font-semibold text-3xl text-emerald-700">
          Stack Technologies
        </Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate("Login")}
        className="bg-blue-500 p-3 rounded-lg">
          <Text className="text-white font-semibold">Get Started</Text>
        </TouchableOpacity>
      </View>
      <View className="z-0 w-64 h-64 rounded-full absolute top-10 -right-10 bg-cyan-500" />
      <View className="z-0 w-72 h-72 rounded-full absolute top-44 -left-10 bg-orange-400" />
      <View className="z-0 w-44 h-44 rounded-full absolute bottom-24 -left-8 bg-red-400" />
      <View className="z-0 w-96 h-96 rounded-full absolute   right-4 bg-lime-300" />
      <View className="z-0 w-80 h-80 rounded-full absolute bottom-10 -right-4 bg-cyan-500" />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
