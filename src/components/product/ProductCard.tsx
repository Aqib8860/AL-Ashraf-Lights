import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ProductCardSchema } from "@/schemas/productSchema";

const ProductCard = ({ product }: { product: ProductCardSchema }) => {
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
                <CardTitle className="text-lg font-bold">{product.name}</CardTitle>
                <CardDescription className="text-gray-600">{product.description}</CardDescription>
                <p className="text-xl font-semibold text-amber-700 mt-2">₹ {product.sale_price}</p>
            </CardContent>

            {/* Footer with Buttons */}
            <CardFooter className="flex justify-between p-4">
                <Button variant="link" className="text-blue-600">
                    Learn More
                </Button>
                <Button>Buy Now</Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
