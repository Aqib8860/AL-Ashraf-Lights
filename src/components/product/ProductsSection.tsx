import { fetchProducts } from "@/api/productApi";
import ProductCard from "@/components/product/ProductCard";
import { ProductCardSchema } from "@/schemas/productSchema";
import { useEffect, useState } from "react";
import { Link } from "react-router";


const ProductsSection = () => {
    const [products, setProducts] = useState<ProductCardSchema[]>([]);
    
    const fetch_products = async () => {
        try{
            const productsData = await fetchProducts();
            setProducts(productsData);
            } 
        catch(error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetch_products();
    }, []);

    return (
        
        <div className="mt-12 flex flex-wrap justify-around gap-8 order-4">
            
            {
                products.map((product) => (
                    <Link key={product.id} to={`/product?id=${product.id}`}>
                        <ProductCard key={product.id} product={product} />
                    </Link>
                ))
            }

        </div>
        
    );
}

export default ProductsSection;
