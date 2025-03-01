import { Button } from "@/components/ui/button";
import { ProductCardSchema } from "@/modules/Admin/schemas/schemas";
import { fetch_products_for_admin_card } from "@/modules/Admin/services/api-clients";
import AdminProductCard from "@/modules/Products/components/AdminProductCard";
import SortDropDown from "@/modules/shared/components/SortDropDown";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";


const ProductsList = () => {
    const [products, setProducts] = useState<ProductCardSchema[]>([]);
    const searchTextInput = useRef<HTMLInputElement|null>(null);

    const fetchAllProducts = async() => {
        const searchText = searchTextInput.current?.value;
        console.log(searchText); // for debugging purpose, remove this line before deploying

        const productsData: ProductCardSchema[] = await fetch_products_for_admin_card(searchText);
        setProducts(productsData);
    }
    
    useEffect(() => {
        fetchAllProducts();
    }, []);

    return (
        <>
        <div className="flex flex-col items-center justify-center px-4 py-12 bg-gray-100">
            <h1 className="text-2xl font-bold">Products List</h1>
        </div>
        
        <div className="flex flex-wrap gap-8 mt-6 justify-center">
            <input type="text" ref={searchTextInput}
                className="px-28 border border-black rounded-2xl" />
            <Button className="text-sm" onClick={fetchAllProducts}>Search</Button>
        </div>
        <div className="flex justify-evenly mt-8">
            <p className="text-2xl">Sort By : </p>
                <SortDropDown title="Name" menu_items={["Ascending", "Descending"]}/>
            

        </div>

            <div className="mt-12 flex flex-wrap justify-around gap-8 order-4">
                
                {
                    products.map((product) => (
                            <Link key={product.id} to={`/product?id=${product.id}`}>
                                <AdminProductCard key={product.id} product={product} />
                        </Link>
                    ))
                }
                
            </div>
        </>
        
    );
}

export default ProductsList;
