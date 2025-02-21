import { Button } from "@/components/ui/button";
import Footer from "@/modules/Footer/components/Footer";
import Navbar from "@/modules/Navbar/components/Navbar";
import DetailDropDownButton from "@/modules/Products/components/DetailDropDownButton";
import ProductBreadcrumb from "@/modules/Products/components/ProductBreadCrumb";
import { ProductCarousel } from "@/modules/Products/components/ProductCarousel";
import { fetch_product_detail } from "@/modules/Products/services/api-clients";
import { useSearchParams } from "react-router";




const ProductDetail = () => {
    const [searchParams] = useSearchParams();
    
    const product = fetch_product_detail(searchParams.get('id'));

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 lg:px-12 py-12">
                

                {/* Responsive Product Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    
                    {/* Left Section - Image & Carousel */}
                    <div className="flex flex-col items-center justify-center">
                    <ProductBreadcrumb product_name={product?.name || "...Loading"} />
                        <img 
                            className="h-80 w-80 md:h-96 md:w-96 object-cover rounded-lg shadow-md"
                            src={product?.image}
                            alt="Product"
                        />
                        <div className="mt-4 w-full">
                            <ProductCarousel />
                        </div>
                    </div>

                    {/* Right Section - Product Details */}
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-gray-700 text-2xl md:text-3xl font-semibold">
                            {product?.name}
                        </h1>
                        <p className="font-bold text-xl md:text-2xl text-gray-800">
                            Rs. {product?.price} (Inclusive of All Taxes)
                        </p>
                        <p className="text-gray-600">Bulbs Not Included</p>

                        {/* Quantity Input */}
                        <div className="flex items-center space-x-2">
                            <label className="font-medium text-gray-700">Quantity:</label>
                            <input 
                                type="number" 
                                defaultValue={1} 
                                className="w-20 px-4 py-2 border border-gray-300 rounded-md text-center"
                            />
                        </div>

                        {/* Features Box */}
                        <div className="p-4 border border-gray-300 rounded-lg bg-amber-100 space-y-2">
                            <p>✅ Upto 3 Year Warranty</p>
                            <p>✅ Hassle-Free Replacement</p>
                            <p>✅ 24/7 Customer Support</p>
                        </div>

                        {/* Pincode Check */}
                        <div className="space-y-2">
                            <p className="font-semibold text-gray-700">Check Delivery to Your Pincode</p>
                            <div className="flex space-x-2">
                                <input 
                                    className="flex-1 px-4 py-2 border border-gray-400 rounded-md"
                                    placeholder="Enter Pincode"
                                />
                                <Button className="px-6 py-2">Check</Button>
                            </div>
                        </div>

                        {/* Installation Service */}
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" className="w-5 h-5" />
                            <p>Add Installation Service + Rs. 2500</p>
                        </div>

                        {/* Buttons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Button className="w-full py-3 bg-blue-600 text-white hover:bg-blue-700">
                                Add to Cart
                            </Button>
                            <Button className="w-full py-3 bg-green-600 text-white hover:bg-green-700">
                                Buy Now
                            </Button>
                        </div>

                        {/* Wishlist */}
                        <p className="text-blue-600 cursor-pointer hover:underline">
                            ⭐ Add To Wishlist
                        </p>
                        <br />
                        <DetailDropDownButton
                            buttonName="Description" 
                            detail="
                                This beautiful frosted glass pendant light adds elegance to any space. 
                                Featuring a sleek gold finish, it creates a warm ambiance perfect for dining areas, 
                                living rooms, or bedrooms. Built with high-quality materials, it ensures long-lasting durability."
                        />
                        <DetailDropDownButton
                            buttonName="Product Specifications" 
                            detail="
                                This beautiful frosted glass pendant light adds elegance to any space. 
                                Featuring a sleek gold finish, it creates a warm ambiance perfect for dining areas, 
                                living rooms, or bedrooms. Built with high-quality materials, it ensures long-lasting durability."
                        />
                        <DetailDropDownButton
                            buttonName="Care & Maintenance"  
                            detail="
                                This beautiful frosted glass pendant light adds elegance to any space. 
                                Featuring a sleek gold finish, it creates a warm ambiance perfect for dining areas, 
                                living rooms, or bedrooms. Built with high-quality materials, it ensures long-lasting durability."
                        />
                    </div>
                </div>
            </div>
        <Footer />
        </>
    );
}

export default ProductDetail;
