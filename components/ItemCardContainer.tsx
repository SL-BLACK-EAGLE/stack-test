import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

interface ItemCardContainerProps {
  imgSrc: string;
  title?: string;
  availableItems?: number;
  data?: Data;
}

interface Data {
  skuid: number;
  skunumber: string;
  skuprice: number;
  skuenabled: boolean;
  skuqtyonorder: number;
  skuavailableindays: number;
  skuimageurl: string;
  skuweight: number;
  skuavailableitems: number;
  skulastmodified: string;
  skucreated: string;
  skuretailprice: number;
  skufeatures: string;
  skuname_enGB: string;
  skushortdescription_enGB: string;
  skudescription_enGB: string;
  oems: {
    name: string;
    partnumbers: string;
    keywords: string;
  }[];
  machineTypes: {
    name: string;
    description: string;
    model: string;
  }[];
  manufacturers: {
    name: string;
    partnumbers: string;
    keywords: string;
  }[];
  skunumbersonparts: string;
  skualtcode: string;
  skupath: string;
}

const ItemCardContainer: React.FC<ItemCardContainerProps> = ({
  imgSrc,
  title,
  availableItems,
  data,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Product", { param: data })}
      className="rounded-md border-2 border-gray-900 space-y-10 px-3 py-2 shadow-md bg-white w-[182px] my-2"
    >
      <Image
        source={{ uri: imgSrc }}
        className="w-full h-40 object-cover rounded-md"
        style={{ width: 100, height: 100 }}
      />
      {title ? (
        <>
          <Text className="text-lg font-bold text-emerald-600">
            {title && title?.length > 14 ? `${title?.slice(0, 14)}..` : title}
          </Text>
          <View className="flex-row space-x-1">
            <Text className="text-gray-500 text-sm">
              {availableItems}
            </Text>
          </View>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};
export default ItemCardContainer;
