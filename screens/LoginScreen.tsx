import {
  Alert,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import login from "../api/login";
import LoadingScreen from "./LoadingScreen";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem("auth_token");
      if (token !== null) {
        navigation.navigate("Main");
        setIsLoaded(true);
      } else {
        setIsLoaded(true);
      }
    };
    checkLogin();
  }, []);

  const [username, setUsername] = useState("");
  const [usersecret, setUsersecret] = useState("");
  const [userpassword, setUserpassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await login(username, usersecret, userpassword);
      console.log(response);

      if (response.auth_token) {
    
        Alert.alert("Success", "Logged in successfully");
        navigation.navigate("Main");
      } else {
        Alert.alert("Login Failed", response.error || "An error occurred");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "An error occurred while logging in");
    }
  };

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView className="flex-1 bg-white items-center">
      <View>
        <Image
          className="w-44 h-24"
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View className="items-center">
          <Text className="text-lg font-bold mt-4 text-gray-800">
            Login To Your Account
          </Text>
        </View>

        <View className="mt-16">
          <View className="flex-row gap-2 py-3 px-4 bg-gray-200 rounded-md items-center mt-10">
            <MaterialIcon name={"email"} size={25} color={"gray"} />
            <TextInput
              value={username}
              autoCapitalize={"none"}
              onChangeText={(text) => setUsername(text)}
              placeholder={"Enter Your Email"}
              autoCorrect={false}
              className="border-b-2 border-gray-200 w-80 text-[16px]"
            />
          </View>
        </View>
        <View className="mt-12">
          <View className="flex-row gap-2 py-3 px-4 bg-gray-200 rounded-md">
            <MaterialIcon name={"lock"} size={26} color={"gray"} />
            <TextInput
              value={userpassword}
              onChangeText={(text) => setUserpassword(text)}
              secureTextEntry={true}
              placeholder={"Enter Your Password"}
              className="border-b-2 border-gray-200 w-80 text-[16px]"
            />
          </View>
        </View>
        <View className="mt-12">
          <View className="flex-row gap-2 py-3 px-4 bg-gray-200 rounded-md">
            <MaterialIcon name={"lock"} size={26} color={"gray"} />
            <TextInput
              value={usersecret}
              onChangeText={(text) => setUsersecret(text)}
              secureTextEntry={false}
              placeholder={"Enter Your Secret Key"}
              className="border-b-2 border-gray-200 w-80 text-[16px]"
            />
          </View>
        </View>
        <View className="flex-row justify-between mt-4">
          <Text className="text-gray-800 font-medium">Keep Me Logged In</Text>
          <Text className="text-blue-500 font-semibold">Forgot Password?</Text>
        </View>

        <View className="mt-28" />

        <TouchableOpacity onPress={handleLogin}>
          <View className="bg-amber-400 py-4 rounded-md items-center">
            <Text className="text-white font-bold text-xl">Login</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default LoginScreen;
