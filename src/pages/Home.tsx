import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/layout/Banner";
import ShopByCategory from "@/components/shop/ShopByCategory";
import SmallBanner from "@/components/common/SmallBanner";
import ProductsSection from "@/components/product/ProductsSection";
import ContactUsForm from "@/components/contactus/ContactUsForm";

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
