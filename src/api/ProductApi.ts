import axios from "axios";
import {GetAllProductDto} from "../data/product/GetAllProductDto.ts";



const baseUrl = "http://localhost:8080";
export async function getAllProducts(){
    try {
        const response = await axios.get<GetAllProductDto[]>(`${baseUrl}/public/product`);
        return response.data;
    }catch (error){
        console.error(error);
        throw error;
    }
}