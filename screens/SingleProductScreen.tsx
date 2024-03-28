import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

interface ItemScreenProps {
  route?: any;
}

const ProductScreen = ({ route }: ItemScreenProps) => {
  const data = route?.params?.param;
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6 gap-y-4">
        <View className="relative bg-white shadow-lg">
          <Image
            source={{
              uri: data?.skuimageurl
                ? data?.skuimageurl
                : "https://successafrika.com/wp-content/uploads/2022/01/How-to-say-no-in-difficult-situations.jpg",
            }}
            className="w-full h-72 object-cover rounded-2xl"
          />

          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              className="w-10 h-10 rounded-md items-center justify-center bg-white"
              onPress={() => navigation.goBack()}
            >
              <Icon name={"chevron-left"} size={24} color="green" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-emerald-500">
              <Icon name={"heartbeat"} size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <View className="absolute flex-row inset-x-0 bottom-5 items-center justify-between px-6">
            <View className="flex-col items-start">
              <Text className="text-[22px] font-bold text-gray-100">
                {data?.skuprice}
              </Text>
              <Text className="text-[28px] font-bold text-gray-100">
                {data?.skuretailprice}
              </Text>
            </View>

            <View className="px-2 justify-center items-center flex h-8 mt-3 rounded-md bg-teal-100">
              <Text>{data?.skuenabled ? "Enabled" : "Disabled"}</Text>
            </View>
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-[#428288] text-[24px] font-bold">
            {data?.skuname_enGB}
          </Text>
        </View>

        <View className="mt-4 flex-row items-center justify-between">
          {data?.skuprice && (
            <View className=" flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <Icon name="star" size={24} color="#D58574" />
              </View>
              <View>
                <Text className="text-[#515151]">{data?.skuprice}</Text>
                <Text className="text-[#515151]">Ratings</Text>
              </View>
            </View>
          )}
        </View>

        {data?.skudescription_enGB && (
          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
            {data?.skudescription_enGB}
          </Text>
        )}

        <View className=" space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
          <Text>Skuid: {data.skuid}</Text>
          <Text>Skunumber: {data.skunumber}</Text>
          <Text>Skuprice: {data.skuprice}</Text>
          <Text>Skuenabled: {data.skuenabled ? "Enabled" : "Disabled"}</Text>
          <Text>Skuqtyonorder: {data.skuqtyonorder}</Text>
          <Text>Skuavailableindays: {data.skuavailableindays}</Text>
          {/* Render other properties as needed */}
          <Text>Skuweight: {data.skuweight}</Text>
          <Text>Skuavailableitems: {data.skuavailableitems}</Text>
          <Text>Skulastmodified: {data.skulastmodified}</Text>
          <Text>Skucreated: {data.skucreated}</Text>
          <Text>Skuretailprice: {data.skuretailprice}</Text>
          <Text>Skufeatures: {data.skufeatures}</Text>
          <Text>Skuname_enGB: {data.skuname_enGB}</Text>
          <Text>Skushortdescription_enGB: {data.skushortdescription_enGB}</Text>

          <Text>Skudescription_enGB: {data.skudescription_enGB}</Text>
          {/* Render OEMs */}
          <Text>OEMs:</Text>
          {data.oems.map((oem, index) => (
            <View key={index}>
              <Text>Name: {oem.name}</Text>
              <Text>Part Numbers: {oem.partnumbers}</Text>
              <Text>Keywords: {oem.keywords}</Text>
            </View>
          ))}
          {/* Render Machine Types */}
          <Text>Machine Types:</Text>
          {data.machineTypes.map((machineType, index) => (
            <View key={index}>
              <Text>Name: {machineType.name}</Text>
              <Text>Description: {machineType.description}</Text>
              <Text>Model: {machineType.model}</Text>
            </View>
          ))}
          {/* Render Manufacturers */}
          <Text>Manufacturers:</Text>
          {data.manufacturers.map((manufacturer, index) => (
            <View key={index}>
              <Text>Name: {manufacturer.name}</Text>
              <Text>Part Numbers: {manufacturer.partnumbers}</Text>
              <Text>Keywords: {manufacturer.keywords}</Text>
            </View>
          ))}
          <Text>Skunumbersonparts: {data.skunumbersonparts}</Text>
          <Text>Skualtcode: {data.skualtcode}</Text>

          <View className="mt-4 px-4 py-4 rounded-lg bg-[#06B2BE] items-center justify-center mb-12">
            <Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100">
              Book Now
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;
