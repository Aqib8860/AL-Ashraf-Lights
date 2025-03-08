import {z} from 'zod';

export type ProductSchema = {
    id: number,
    name: string,
    price: number,
    is_available: boolean,
    category: string,
    description: string,
    height: number,
    width: number,
    length: number,
    slug: string,
    quantity: number,
}

export type ProductTableSchema = {
    id: number,
    name: string,
    category: string,
    price: number,
    is_available: boolean,
    quantity: number,
}

export type ProductCardSchema = {
    id: number,
    name: string,
    description: string,
    price: number,
    category: string,
    is_available: boolean,
    image: string,
    quantity: number,
}

export const addProductSchema = z.object(
    {
        name: z.string().nonempty('Enter product name').max(100, 'Name contains only 100 chars'),
        description: z.string().nonempty('Enter product description').max(1000, 'Description contains only 1000 chars'),
        price: z.number().min(0, 'Invalid Price').max(10000000, 'Invalid Price'),
        category: z.string().nonempty('Enter product category').max(60, 'Category contains only 60 chars'),
        is_available: z.boolean({required_error: "Please select Availablity"}),
        quantity: z.number().min(0, 'Invalid Quantity').max(100, 'Quantity contains only 100'),
        height: z.number().min(0, 'Invalid Height'),
        width: z.number().min(0, 'Invalid Width'),
        length: z.number().min(0, 'Invalid Length'),
    }
);

export type AddProductSchema = z.infer<typeof addProductSchema>
