import Navbar from "@/modules/Navbar/components/Navbar";
import Banner from "./Banner";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <ShopByCategory />
        </div>
        
    );
}

export default Home;
