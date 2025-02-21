import ProductCard from "@/modules/Products/components/ProductCard";
import fetch_products from "../services/api-client";

const ProductsSection = () => {
    const products = fetch_products();
    

    return (
        <div className="mt-12 flex flex-wrap justify-around gap-8 order-4">
            {
                products.map((product)=> {
                    return <ProductCard key={product.id} product={product} />
                })
            }

        </div>
    );
}

export default ProductsSection;
