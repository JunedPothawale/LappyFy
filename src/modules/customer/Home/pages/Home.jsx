import BannerSection from "../components/Banner"
import FeaturedCategories from "../components/FeaturedCategories"
import HeroSection from "../components/HeroSection"
import TrendingProduct from "../components/TrendingProduct"
import SpecialOffer from "../components/SpecialOffer"
import LatestArrival from "../components/LatestArrival"
import Brands from "../components/Brands"
import BlogSection from "../components/BlogSection"
import ShippingInfo from "../components/ShippingInfo"



const Home = () => {
    const URL = import.meta.env.VITE_API_URL
    return (
        <>
            <HeroSection />
            <FeaturedCategories />
            <TrendingProduct />
            <BannerSection />
            <SpecialOffer />
            <LatestArrival />
            <Brands />
            <BlogSection />
            <ShippingInfo />
        </>
    )
}

export default Home
