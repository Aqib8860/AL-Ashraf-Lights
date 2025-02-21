import ProductCard from "@/modules/Products/components/ProductCard";
import {fetch_products} from "@/modules/Products/services/api-clients";
import { Link } from "react-router";


const ProductsSection = () => {
    const products = fetch_products();
    

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
