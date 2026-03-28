import Banner from "./Banner"
import BlogSection from "./BlogSection"
import Brands from "./Brands"
import FeaturedCategories from "./FeaturedCategories"
import HeroSection from "./HeroSection"
import LatestArrival from "./LatestArrival"
import ShippingInfo from "./ShippingInfo"
import SpecialOffer from "./SpecialOffer"
import TrendingProduct from "./TrendingProduct"


const Home = () => {
    const URL = import.meta.env.VITE_API_URL
    return (
        <>
            <HeroSection />
            <FeaturedCategories />
            <TrendingProduct />
            <Banner />
            <SpecialOffer />
            <LatestArrival />
            <Brands />
            <BlogSection />
            <ShippingInfo />
        </>
    )
}

export default Home
