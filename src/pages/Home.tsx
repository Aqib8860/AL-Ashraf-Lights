import Navbar from "@/modules/Navbar/components/Navbar";
import Footer from "@/modules/Footer/components/Footer";
import Banner from "@/modules/Home/components/Banner";
import ShopByCategory from "@/modules/Home/components/ShopByCategory";
import SmallBanner from "@/modules/Home/components/SmallBanner";
import ProductsSection from "@/modules/Home/components/ProductsSection";
import ContactUsForm from "@/modules/Home/ContactUsForm";

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
