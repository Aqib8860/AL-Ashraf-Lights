
;
import ProductsTable from "@/components/product/ProductsTable";
import { useEffect, useState } from "react";
import { fetchProductsForAdmin } from "@/api/productApi";
import { ProductTableSchema } from "@/schemas/productSchema";


const ProductTablePage = () => {
    const [products, setProducts] = useState<ProductTableSchema[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");
    
          
    const fetchAllProducts = async(search:string) => {
    
          const productsData: ProductTableSchema[] = await fetchProductsForAdmin(search);
          console.log("PD ", productsData);
          setProducts(productsData);
      }
      
      useEffect(() => {
          fetchAllProducts(searchValue);
      }, [searchValue]);
      
    return (
        <>
            <ProductsTable products={products} setSearchValue={setSearchValue}/>
        </>  
        
        
    );

}

export default ProductTablePage;
