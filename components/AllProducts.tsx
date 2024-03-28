import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { NotFound } from "../assets";
import ItemCardContainer from "./ItemCardContainer";
import { fetchProducts } from "../api/fetchProducts";
import { getToken } from "../utils/auth";
import LoadingScreen from "../screens/LoadingScreen";
import { storeDataToDB } from "../lib/storeData";

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

const AllProducts = () => {
  const [mainData, setMainData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    // Get the auth token from the AsyncStorage
    const loadToken = async () => {
      try {
        const tokenId = await getToken();
        if (tokenId) {
          setToken(tokenId);
        } else {
          console.log("Token not found in async storage");
          return null;
        }
      } catch (error) {
        console.error("Failed to load token:", error);
      }
    };
    loadToken();

    const loadProduct = async () => {
      try {
        const retrieveProducts = await fetchProducts(token);
        // console.log(retrieveProducts);
        setMainData(retrieveProducts);
        setIsLoading(true);

        const storedata = storeDataToDB(retrieveProducts);
        console.log(storedata);
        
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    if (token) {
      loadProduct();
    } else {
      loadToken();
    }
  }, [token]);

  useEffect(() => {
   
  
    // ... rest of your code ...
  }, []);

  if (!isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      {mainData?.length > 0 ? (
        <>
          {mainData?.map((data: Data, index) => (
            <ItemCardContainer
              key={index}
              imgSrc={
                data?.skuimageurl
                  ? data?.skuimageurl
                  : "https://successafrika.com/wp-content/uploads/2022/01/How-to-say-no-in-difficult-situations.jpg"
              }
              title={data?.skuname_enGB}
              availableItems={data?.skuavailableitems}
              data={data}
            />
          ))}
        </>
      ) : (
        <>
          <View className="w-full h-[200px] items-center space-y-8 justify-center">
            <Image source={NotFound} className="w-32 h-32 object-cover" />
            <Text className="text-gray-500 text-xl font-semibold">
              Opps...No data found
            </Text>
          </View>
        </>
      )}
    </>
  );
};

export default AllProducts;
