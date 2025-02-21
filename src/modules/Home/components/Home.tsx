import Navbar from "@/modules/Navbar/components/Navbar";
import Banner from "./Banner";
import ShopByCategory from "./ShopByCategory";
import SmallBanner from "./SmallBanner";
import ProductsSection from "./ProductsSection";
import Footer from "@/modules/Footer/components/Footer";
import ContactUsForm from "../ContactUsForm";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <ShopByCategory />
            <SmallBanner />
            <ProductsSection />
            <ContactUsForm />
            <Footer />
        </div>
        
    );
}

export default Home;
