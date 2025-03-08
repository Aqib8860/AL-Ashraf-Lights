import { Button } from "@/components/ui/button";
import AdminProductCard from "@/components/product/AdminProductCard";
import SortDropDown from "@/components/common/SortDropDown";
import { useEffect, useRef, useState } from "react";
import { fetchProductsForAdmin } from "@/api/productApi";
import { ProductCardSchema } from "@/schemas/productSchema";


const ProductsList = () => {
    const [products, setProducts] = useState<ProductCardSchema[]>([]);
    const searchTextInput = useRef<HTMLInputElement|null>(null);

    const fetchAllProducts = async() => {
        const searchText = searchTextInput.current?.value;
        console.log(searchText); // for debugging purpose, remove this line before deploying

        const productsData: ProductCardSchema[] = await fetchProductsForAdmin(searchText, true);
        setProducts(productsData);
    }
    
    useEffect(() => {
        fetchAllProducts();
    }, []);

    return (
        <>
        <div className="flex flex-col px-4 py-12 bg-gray-100">
            <h1 className="text-2xl font-bold text-center">Products List</h1>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
            <input type="text" ref={searchTextInput} onChange={fetchAllProducts}
                className="w-screen md:w-96 px-4 py-1 border border-black rounded-2xl" 
            />
            <Button 
                className="w-full md:w-auto px-6 text-sm" 
                onClick={fetchAllProducts}
            >
                Search</Button>
        </div>
        <div className="flex justify-evenly mt-8">
            <p className="text-2xl">Sort By : </p>
                <SortDropDown title="Name" menu_items={["Ascending", "Descending"]}/>
            

        </div>

            <div className="mt-12 flex flex-wrap justify-around gap-8 order-4">
                
                {
                    products.map((product) => (
                            
                            <AdminProductCard key={product.id} product={product} />
                        
                    ))
                }
                
            </div>
        </>
        
    );
}

export default ProductsList;
