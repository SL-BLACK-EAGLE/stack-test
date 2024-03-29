import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ItemCardContainerProps } from "../types";





const ItemCardContainer: React.FC<ItemCardContainerProps> = ({
  imgSrc,
  title,
  availableItems,
  data,
  oems,
  machineTypes,
  manufacturers,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Product", { param: data, oems, machineTypes, manufacturers })}
      className="rounded-md border border-gray-200 space-y-10 px-3 py-2 shadow-md bg-white w-[182px] my-2"
    >

      <Image
        source={{ uri: imgSrc }}
        className="w-full h-32 object-cover rounded-md"
      />
      {title ? (
        <>
          <Text className="text-lg font-bold text-emerald-600">
            {title && title?.length > 20 ? `${title?.slice(0, 20)}..` : title}
          </Text>
          <View className="flex-row space-x-1">
          </View>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};
export default ItemCardContainer;
