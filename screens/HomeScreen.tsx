import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import AllProducts from "../components/AllProducts";

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-2">
        <Text className="text-center text-3xl font-bold">Product Home</Text>

        {isLoading ? (
          <View className="justify-center items-center flex-1 flex mt-10">
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <ScrollView>
            {/*  Title section */}
            <View>
              <View className="flex-row flex justify-between items-center mt-8 px-4">
                <Text className="text-emerald-700 text-[28px] font-bold">
                  Product List
                </Text>
                <TouchableOpacity className="flex-row flex justify-between items-center space-x-2">
                  <Text className="text-gray-500 text-xl">All</Text>
                  <Icon name="long-arrow-right" size={25} color="gray" />
                </TouchableOpacity>
              </View>
            </View>
            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
              <AllProducts />
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
