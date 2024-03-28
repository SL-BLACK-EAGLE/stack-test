import axios from "axios";

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
        return response.data;
    } catch (error) {
        console.log("error", error);
        throw error;
    }
}

export default login;