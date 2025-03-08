import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProductDetailSection from "@/components/product/ProductDetailSection";
import RatingReview from "@/components/ratingreview/RatingReview";
import { useSearchParams } from "react-router";


const ProductDetail = () => {
    const [searchParams] = useSearchParams();
    
    const product_id = searchParams.get('id');

    return (
        <>
            <Navbar />
            <ProductDetailSection id={product_id} />
            <RatingReview />
            <Footer />
        </>
    );
}

export default ProductDetail;
