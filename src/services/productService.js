import axios from "axios";

export async function getProducts (limit = 12) {
    return await axios.get(`https://dummyjson.com/products?limit=${limit}`)
}

export async function getProductbyId (id= 1) {
    return await axios.get(`https://dummyjson.com/products/${id}`)
}

export async function getCategories () {
    return await axios.get(`https://dummyjson.com/products/categories`)
}

export async function getProductsByCategory (id= `smartphones`) {
    return await axios.get(`https://dummyjson.com/products/category/${id}`)
}