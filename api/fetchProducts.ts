import axios from "axios";

export const fetchProducts = async (auth_token: string) => {
    
    try {
        const response = await axios.post("https://api.whitehouseproductsltd.com/products",
            {
                offset: '0',
                pagesize: '50',
                department: 'hydraulic-pumps',
            },
            {
                headers: {
                    Authorization: `Bearer ${auth_token}`,
                },
            },
        );
        return response.data;
    } catch (error) {
        console.log("error", error);
        throw error;
    }
}
