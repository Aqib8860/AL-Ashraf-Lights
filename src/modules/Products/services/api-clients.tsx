export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
}
const  aws_base_url = "https://aiworld-space.s3.ap-south-1.amazonaws.com/ashrafi-lights/";

const products = [
    {
        id: 1,
        name: "Product 1",
        price: 500,
        image: `${aws_base_url}IMG-20250221-WA0015.jpg`,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula ac neque placerat bibendum non vitae neque."
    },
    {
        id: 2,
        name: "Product 2",
        price: 399,
        image: `${aws_base_url}IMG-20250221-WA0003.jpg`,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula ac neque placerat bibendum non vitae neque."
    },
    {
        id: 3,
        name: "Product 3",
        price: 1200,
        image: `${aws_base_url}IMG-20250221-WA0004.jpg`,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula ac neque placerat bibendum non vitae neque."
    },
    {
        id: 4,
        name: "Product 4",
        price: 999,
        image: `${aws_base_url}IMG-20250221-WA0005.jpg`,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula ac neque placerat bibendum non vitae neque."
    },
    {
        id: 5,
        name: "Product 4",
        price: 11999,
        image: `${aws_base_url}IMG-20250221-WA0006.jpg`,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula ac neque placerat bibendum non vitae neque."
    },
    {
        id: 6,
        name: "Product 4",
        price: 7999,
        image: `${aws_base_url}IMG-20250221-WA0007.jpg`,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula ac neque placerat bibendum non vitae neque."
    },
    {
        id: 7,
        name: "Product 4",
        price: 230,
        image: `${aws_base_url}IMG-20250221-WA0008.jpg`,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula ac neque placerat bibendum non vitae neque."
    },
    {
        id: 8,
        name: "Product 4",
        price: 339,
        image: `${aws_base_url}IMG-20250221-WA0009.jpg`,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula ac neque placerat bibendum non vitae neque."
    },
    {
        id: 9,
        name: "Product 4",
        price: 699,
        image: `${aws_base_url}IMG-20250221-WA0010.jpg`,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula ac neque placerat bibendum non vitae neque."
    },
]


export const fetch_products = () => {
    return products;
}

export const fetch_product_detail = (product_id:any) => {
    const product = products.find(product => product.id == product_id);
    return product;
}

