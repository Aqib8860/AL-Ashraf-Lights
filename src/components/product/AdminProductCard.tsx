import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import EditProduct from "./EditProduct";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { ProductCardSchema } from "@/schemas/productSchema";


const AdminProductCard = ({ product }: { product:  ProductCardSchema}) => {
    return (
        <Card className="w-[350px] shadow-lg rounded-lg overflow-hidden">
            {/* Product Image */}
            <CardHeader className="p-0">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
            </CardHeader>

            {/* Product Details */}
            <CardContent className="p-4">
                <CardTitle className="text-lg font-bold">
                    {
                        product.name.length > 36
                            ? product.name.substring(0, 36) + "..."
                            : product.name
                    }
                </CardTitle>
                <CardDescription className="text-gray-600">
                    {
                        product.description.length > 135
                         ? product.description.substring(0, 46) + "..."
                          : product.description
                    }
                </CardDescription>
                <div className="flex justify-between">
                    <p className="text-xl font-semibold text-amber-700 mt-2">₹{product.sale_price}</p>
                    <p className="text-xl font-semibold text-amber-700 mt-2">Remaining : 5</p>
                </div>
            </CardContent>

            {/* Buttons */}
            <CardFooter className="flex justify-between p-4">
                
                {/* Edit Product Button */}
                <EditProduct productId={product.id}/>
                
                {/* Availability Status Button */}
                <Button className={cn(
                    "border bg-white hover:bg-white", product.is_available ? "border-green-500 text-green-500": "border-red-500 text-red-500"
                )}>
                    {product.is_available ? 'Available' : 'Out of Stock'}
                </Button>
                
                {/* View Product Button */}
                <Link key={product.id} to={`/product?id=${product.id}`}>
                    <Button className="hover:bg-gray-600 hover:text-white border border-black bg-white text-black">View</Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default AdminProductCard;
