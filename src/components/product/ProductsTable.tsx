import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ProductTableSchema } from "@/schemas/productSchema";

// import { Switch } from "@/components/ui/switch";

  
const ProductsTable = ({products, setSearchValue}: {products: ProductTableSchema[], setSearchValue:(value:string) => void}) => {
    
    const searchTextInput = useRef<HTMLInputElement|null>(null);
    
    const searchButton = () =>  {
          const searchText = searchTextInput.current?.value
          if (searchText){
            setSearchValue(searchText);
          }
            else {
              setSearchValue("");
            }
    }

    return (
      <>
        <div className="flex gap-4 justify-center">

            <input type="text" ref={searchTextInput} onChange={searchButton}
                className="px-6 w-2xl border border-black rounded-2xl text-left" />
            <Button onClick={searchButton}>Search</Button>
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
