import axios from "axios";

export const getProducts = async () => {
    const response = await axios.get("https://luis-craft.free.beeceptor.com/products");
    return response.data
}