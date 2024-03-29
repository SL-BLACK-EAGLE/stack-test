import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { getToken } from "../utils/auth";
import { fetchProducts } from "./fetchProducts";
import { storeDataToDB } from "./storeData";
import { Alert } from "react-native";

interface LoginResponse {
    auth_token: string;
    date_created: string;
    date_expiry: string;
    error: string;
}


const login = async (username: string, usersecret: string, userpassword: string) => {
    try {
        const requestBody = {
            username: username,
            usersecret: usersecret,
            userpassword: userpassword
        };
        const response = await axios.post<LoginResponse>("https://devapi.whitehouseproductsltd.com/token", requestBody);
        await AsyncStorage.setItem("auth_token", response.data.auth_token);
        await AsyncStorage.setItem("username", username);
        await AsyncStorage.setItem("date_created", response.data.date_created);
        await AsyncStorage.setItem("date_expiry", response.data.date_expiry);
        Alert.alert("Login Successful");
        const token = await getToken();

        if (!token) {
            throw new Error("Token not found");
        } else {
            const data = await fetchProducts(token);
            storeDataToDB(data);
        }


        return response.data;
    } catch (error) {
        console.log("error", error);
        throw error;
    }
}

export default login;


