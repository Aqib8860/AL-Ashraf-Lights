import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ProductCardSchema } from "@/modules/Admin/schemas/schemas";


const AdminProductCard = ({ product }: { product: ProductCardSchema }) => {
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
                    <p className="text-xl font-semibold text-amber-700 mt-2">₹{product.price}</p>
                    <p className="text-xl font-semibold text-amber-700 mt-2">Remaining : 5</p>
                </div>
            </CardContent>

            {/* Footer with Buttons */}
            <CardFooter className="flex justify-between p-4">
                
                <Button className="border border-yellow-500 bg-white text-yellow-500">Edit</Button>
                {
                    product.is_available? (
                        <Button className="border border-green-500 bg-white text-green-500">Available</Button>
                    ) : (
                        <Button className="border border-red-500 bg-white text-red-500">Out of Stock</Button>
                    )
                    
                }
                <Button className="border border-black bg-white text-black">View</Button>
            </CardFooter>
        </Card>
    );
};

export default AdminProductCard;
