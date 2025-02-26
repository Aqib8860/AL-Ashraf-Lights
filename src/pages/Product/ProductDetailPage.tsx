import Footer from "@/modules/Footer/components/Footer";
import Navbar from "@/modules/Navbar/components/Navbar";
import ProductDetail from "@/modules/Products/components/ProductDetail";
import RatingReview from "@/modules/RatingReview/RatingReview";
import { useSearchParams } from "react-router";


const ProductDetailPage = () => {
    const [searchParams] = useSearchParams();
    
    const product_id = searchParams.get('id');

    return (
        <>
            <Navbar />
            <ProductDetail id={product_id} />
            <RatingReview />
            <Footer />
        </>
    );
}

export default ProductDetailPage;
