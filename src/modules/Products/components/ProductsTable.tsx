import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { fetch_products_for_admin_table } from "@/modules/Admin/services/api-clients";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { ProductTableSchema } from "@/modules/Admin/schemas/schemas";
// import { Switch } from "@/components/ui/switch";

  
const ProductsTable = () => {
  
  const [products, setProducts] = useState<ProductTableSchema[]>([]);

  const searchTextInput = useRef<HTMLInputElement|null>(null);
  
  const fetchAllProducts = async() => {
      const searchText = searchTextInput.current?.value;
      console.log(searchText); // for debugging purpose, remove this line before deploying

      const productsData: ProductTableSchema[] = await fetch_products_for_admin_table(searchText);
      console.log("PD ", productsData);
      setProducts(productsData);
  }
  
  useEffect(() => {
      fetchAllProducts();
  }, []);
  

    return (
      <>
        <div className="flex gap-4 justify-center">
            <input type="text" ref={searchTextInput}
                className="w-2xl border border-black rounded-2xl text-left" />
            <Button onClick={fetchAllProducts}>Search</Button>
            <Button className="bg-orange-300 text-black" >Add Product</Button>
        </div>

        <Table className="text-lg mt-6 w-7xl mx-6 items-center">
          <TableCaption>Products List</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Available</TableHead>
                  <TableHead className="text-center">In Stock</TableHead>
                  <TableHead></TableHead>
                  <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        
        <TableBody>
          {products.map((product)=> (
            <TableRow key={product.id}>
            <TableCell className="font-medium">{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>Category name</TableCell>
            
            <TableCell >Rs {product.price}</TableCell>
            <TableCell className="w-2">
              {product.is_available ? 
                <p className="outline outline-green-400 text-center text-green-600 rounded-2xl">Yes</p> : 
                <p className="outline outline-red-600 text-red-600 text-center rounded-2xl">No</p>}
              
              {/* {<Switch checked={product.is_available} />} */}
              
            </TableCell>
            <TableCell className="text-center">
              5
            </TableCell>
            
            <TableCell  className="text-right">
              <Button className="bg-blue-300 text-black">View Details</Button>  
            </TableCell>
            <TableCell  className="text-center">
              <Button className="bg-yellow-200 text-black">Edit</Button>  
            </TableCell>
            <TableCell  className="text-left">
              <Button className="bg-red-400 text-black">Delete</Button>  
            </TableCell>
            
          </TableRow>
          ))}
          
        </TableBody>
      </Table>
      
    </>                    
    );

}

export default ProductsTable;
