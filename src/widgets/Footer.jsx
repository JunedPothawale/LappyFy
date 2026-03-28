import { NavLink } from "react-router-dom"
import TopFooter from "./Footer/TopFooter"
import MiddleFooter from "./Footer/MiddleFooter"
import BottonFooter from "./Footer/BottonFooter"


const Footer = () => {

    const navigations = [
        {
            id: "Shop",
            name: "Shop",
            url: "/shop",
            subNav: [
                {
                    id: "BrandNewLaptops",
                    name: "Brand New Laptops",
                    url: "/laptops"
                },
                {
                    id: "RefurbishedLaptops",
                    name: "Refurbished Laptops",
                    url: "/refurbished/laptops"
                },

                {
                    id: "Accessories",
                    name: "Accessories",
                    url: "/accessories"
                }
            ],
        },
        {
            id: "Services",
            name: "Services",
            url: "/services",
            subNav: [
                {
                    id: "SellLaptops",
                    name: "Sell Laptops",
                    url: "/sell/laptops"
                },
                {
                    id: "RentLaptops",
                    name: "Rent Laptops",
                    url: "/rent/laptops"
                },
                {
                    id: "RepairLaptops",
                    name: "Repair Laptops",
                    url: "/repair/laptops"
                }
            ],
        },
        {
            id: "Company",
            name: "Company",
            url: "/company",
            subNav: [
                {
                    id: "AboutUs",
                    name: "About Us",
                    url: "/about-us"
                },
                {
                    id: "Careers",
                    name: "Careers",
                    url: "/careers"
                },
                {
                    id: "DealerProgram",
                    name: "Dealer Program",
                    url: "/dealer-program"
                }
            ],
        },
        {
            id: "Support",
            name: "Support",
            url: "/support",
            subNav: [
                {
                    id: "Contact",
                    name: "Contact Us",
                    url: "/contact-us"
                },
                {
                    id: "TrackOrder",
                    name: "Track Order",
                    url: "/track-order"
                },
                {
                    id: "FAQs",
                    name: "FAQs",
                    url: "/faqs"
                }
            ],
        }
    ]


    const features = [
        {
            id: "Rating",
            icon: "star",
            name: "Rating"
        },
        {
            id: "Warrenty",
            icon: "safety_check",
            name: "1 Year Warrenty"
        },
        {
            id: "Delivery",
            icon: "delivery_truck_speed",
            name: "Free Delivery"
        },
        {
            id: "EmiOptions",
            icon: "credit_score",
            name: "EMI Options"
        }
    ]

    return (
        <>
            <footer className="footer">
                <TopFooter />
                <MiddleFooter />
                <BottonFooter />
            </footer>
        </>
    )
}

export default Footer
