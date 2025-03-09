import axios from 'axios';
import { AddProductSchema, ProductSchema } from '@/schemas/productSchema';

export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
}
const aws_base_url = "https://aiworld-space.s3.ap-south-1.amazonaws.com/ashrafi-lights/";

const api =axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const testProducts = [
    {
        id: 1,
        name: "Product 1 Title Product 1 Title Product 1 Title",
        price: 500,
        image: `${aws_base_url}IMG-20250221-WA0015.jpg`,
        is_available: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula ac neque placerat bibendum non vitae neque."
    },
    {
        id: 2,
        name: "Product 2",
        price: 399,
        image: `${aws_base_url}IMG-20250221-WA0003.jpg`,
        is_available: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula ac neque placerat bibendum non vitae neque."
    },
    {
        id: 3,
        name: "Product 3",
        price: 1200,
        image: `${aws_base_url}IMG-20250221-WA0004.jpg`,
        is_available: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula ac neque placerat bibendum non vitae neque."
    },
    {
        id: 4,
        name: "Product 4",
        price: 999,
        image: `${aws_base_url}IMG-20250221-WA0005.jpg`,
        is_available: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula ac neque placerat bibendum non vitae neque."
    },
    {
        id: 5,
        name: "Product 4",
        price: 11999,
        image: `${aws_base_url}IMG-20250221-WA0006.jpg`,
        is_available: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula ac neque placerat bibendum non vitae neque."
    },
    {
        id: 6,
        name: "Product 4",
        price: 7999,
        image: `${aws_base_url}IMG-20250221-WA0007.jpg`,
        is_available: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula ac neque placerat bibendum non vitae neque."
    },
    {
        id: 7,
        name: "Product 4",
        price: 230,
        image: `${aws_base_url}IMG-20250221-WA0008.jpg`,
        is_available: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula ac neque placerat bibendum non vitae neque."
    },
    {
        id: 8,
        name: "Product 4",
        price: 339,
        image: `${aws_base_url}IMG-20250221-WA0009.jpg`,
        is_available: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula ac neque placerat bibendum non vitae neque."
    },
    {
        id: 9,
        name: "Product 4",
        price: 699,
        image: `${aws_base_url}IMG-20250221-WA0010.jpg`,
        is_available: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula ac neque placerat bibendum non vitae neque."
    },
]


// Fetch Products for Home Page
export const fetchProducts = async () => {
    try {
        const response = await api.get("/products-list/");
        if (response.status === 200) {
            const products = response.data;
            return products;
        }
    }
    catch (error) {
        console.error("Error fetching products", error);
        return [];
    }
}


// Fetch Product Details by ID - for Home
export const fetch_product_detail = (product_id:any) => {
    const product = testProducts.find(product => product.id == product_id);
    return product;
}


export const fetchProductsForAdmin = async (name? :string, getImage: boolean = false) => {
    try {
        const response = await api.get("/admin-dashboard/products-list/", {
            params: {
                get_image: getImage,
                name: name,
            },
        })
        const products = response.data;
        return products;
    }
    catch (error) {
        console.error("Error fetching products", error);
        return [];
    }
}


export const addProduct = async(product: AddProductSchema) => {
    try{
        const resposne = await api.post("/product/", product)
        console.log("Response ", resposne.data);
        if (resposne.status === 200){
            return resposne.data.id;
        }
        else{
            return false;
        }


    }   
    catch (error) {
        console.error("Error adding product", error);
    }
}
    
export const uploadProductImage = async(formData: FormData) => {
    try{
        const response = await api.post("/product-image/", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        console.log("Response ", response.data);
        if (response.status === 200){
            return true;
        }
        else{
            return false;
        }
    }
    catch (error) {
        console.error("Error uploading product image", error);
        return false;
    }
}

export const getProductDetail = async(productId: number) => {
    try {
        const response = await api.get(`/product/${productId}`)
        if (response.status === 200) {
            const product:ProductSchema = response.data;
            return product;
        }
    }
    catch (error) {
        console.error("Error fetching product", error);
    }
}


export const updateProduct = async(product: ProductSchema) => {
    try{
        const response = await api.patch(`/product/${product.id}/`, product)
        return response;
        }
    catch (error) {
        console.error("Error updating product", error);
    }
}