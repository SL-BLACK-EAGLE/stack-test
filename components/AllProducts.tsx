import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { NotFound } from "../assets";
import ItemCardContainer from "./ItemCardContainer";
import { fetchProducts } from "../api/fetchProducts";
import { getToken } from "../utils/auth";
import LoadingScreen from "../screens/LoadingScreen";
import { Data, MachineTypes, Manufacturers, Oems } from "../types";
import { storeDataToDB } from "../api/storeData";

import * as SQLite from "expo-sqlite";

// Initialize the SQLite database
const db = SQLite.openDatabase("stackstore.db");

const AllProducts = () => {
  const [mainData, setMainData] = useState<Data[]>([]);
  const [oemsData, setOemsData] = useState<Oems[]>([]);
  const [machineTypesData, setMachineTypesData] = useState<MachineTypes[]>([]);
  const [manufacturersData, setManufacturersData] = useState<Manufacturers[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const getProducts = async () => {
      db.transaction((tx) => {
      
        tx.executeSql(
          "SELECT * FROM products;",
          [],
          (_, results) => {
            const len = results.rows.length;
            if (len > 0) {
              setMainData(results.rows._array);
              setIsLoading(false);
              
            }
          },
          (_, error) => {
            console.log("error", error);
          }
        );

        tx.executeSql(
          "SELECT * FROM oems;",
          [],
          (_, results) => {
            const len = results.rows.length;
            if (len > 0) {
              setOemsData(results.rows._array);
              setIsLoading(false);
              
            }
          },
          (_, error) => {
            console.log("error", error);
          }
        );

        tx.executeSql(
          "SELECT * FROM machineTypes;",
          [],
          (_, results) => {
            const len = results.rows.length;
            if (len > 0) {
              setMachineTypesData(results.rows._array);
              setIsLoading(false);
              
            }
          },
          (_, error) => {
            console.log("error", error);
          }
        );

        tx.executeSql(
          "SELECT * FROM Manufacturers;",
          [],
          (_, results) => {
            const len = results.rows.length;
            if (len > 0) {
              setManufacturersData(results.rows._array);
              setIsLoading(false);
              
            }
          },
          (_, error) => {
            console.log("error", error);
          }
        );
      }
      );
    }
    getProducts();
  }, []);

  if (isLoading) {
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
              oems={oemsData}
              machineTypes={machineTypesData}
              manufacturers={manufacturersData}
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
