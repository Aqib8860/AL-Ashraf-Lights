import axios from 'axios';
import { ProductCardSchema, ProductTableSchema } from '../schemas/schemas';

export const fetch_products_for_admin_card = async (name? :string) => {
    const response = await axios.get(`http://127.0.0.1:8000/admin-dashboard/products-list/?get_image=true&name=${name}`)
    const products: ProductCardSchema[] = response.data;

    const all_products: ProductCardSchema[] = products.map(
        product => {
            const {id, name, description, price, category, is_available, image, quantity}: ProductCardSchema = product;
            return {id, name, description, price, category, is_available, image, quantity};
        }
    );
    return all_products;
}


export const fetch_products_for_admin_table = async (name? :string) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/admin-dashboard/products-list/?name=${name}`)
        
        const products: ProductTableSchema[] = response.data;
        console.log("Api products ", products);

        const all_products: ProductTableSchema[] = products.map(
            product => {
                const {id, name, category, price, is_available, quantity}: ProductTableSchema = product;
                return {id, name, category, price, is_available, quantity};
            }
        );
        return all_products;
    
    }
    catch (error) {
        console.error("Error fetching products", error);
        return [];
    }
}

// export const fetch_products_for_admin_table2 = async () => {
//     try {
//         const response = await axios.get("http://127.0.0.1:8000/products-list/");
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching products:", error);
//         return [];
//     }
// };
        
    
    
    