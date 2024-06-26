import { Alert, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { getExpires, getTimeStamp } from "../lib/utils";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [dateCreated, setDateCreated] = useState("");
  const [expires, setExpires] = useState("");

  useEffect(() => {
    const getUsername = async () => {
      const user = await AsyncStorage.getItem("username");
      const lastLoging = await AsyncStorage.getItem("date_created");
      const expires = await AsyncStorage.getItem("date_expiry");
      if (user && lastLoging && expires) {
        setUsername(user);
        setDateCreated(lastLoging);
        setExpires(expires);
      }
    };
    getUsername();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("auth_token");
    await AsyncStorage.removeItem("username");
    await AsyncStorage.removeItem("date_created");
    setUsername("");
    Alert.alert("Logout Successful");
    navigation.navigate("Welcome");
  };
  const DateFromString = new Date(dateCreated);
  const expiresDate = new Date(expires);

  return (
    <SafeAreaView className="flex flex-1">
      <View className="gap-4 p-3">
        <View className="flex-row">
          <Text className="text-gray-600 text-lg">Hello, Welcome Back!</Text>
          <Text className="ml-3 font-bold text-gray-800 text-lg">{username}</Text>
        </View>
        <Text>{`Last Login: ${getTimeStamp(DateFromString)}`}</Text>
        <Text>{`Expires: ${getExpires(expiresDate)}`}</Text>
        <TouchableOpacity
          onPress={handleLogout}
          className="bg-blue-500 p-2 rounded-md mt-4 w-1/2 mx-auto text-center"
        >
          <Text className="text-white font-medium text-center">Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
