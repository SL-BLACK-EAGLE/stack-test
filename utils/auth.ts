import AsyncStorage from "@react-native-async-storage/async-storage";

export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem("auth_token");
        if(token !== null) {
            return token
        } else {
            console.log("Token not found in async storage")
            return null
        }
    } catch (error) {
        console.log("error message", error);
    }
}