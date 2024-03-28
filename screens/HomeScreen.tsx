import { SafeAreaView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getToken } from "../utils/auth";
import { fetchProducts } from "../api/fetchProducts";
import LoadingScreen from "./LoadingScreen";

const HomeScreen = () => {
  const [token, setToken] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState(false);

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
        console.log(retrieveProducts);
        setIsLoaded(true);
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

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView>
      <Text>{token}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;