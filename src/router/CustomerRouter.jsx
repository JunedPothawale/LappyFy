import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../modules/customer/Home/Home'
import Cart from '../modules/customer/Cart/Cart'
import FileNotFound from '../shared/components/FileNotFound'
import Index from '../shared/layouts/CustomerLayout'
import Login from '../modules/customer/Auth/Login'
import Register from '../modules/customer/Auth/Register'
import Checkout from '../modules/customer/Checkout/Checkout'
import MailSend from '../shared/components/MailSend'
import ProductDetails from '../modules/customer/Product/ProductDetails'
import AboutUs from '../modules/customer/Pages/AboutUs'
import Product from '../modules/customer/Product/Products'

const CustomerRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Index />}>
                    <Route index element={<Home />}></Route>
                    <Route path='/cart' element={<Cart />}></Route>
                    <Route path='/checkout' element={<Checkout />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/product-details' element={<ProductDetails />}></Route>
                    <Route path='/product' element={<Product />}></Route>
                    <Route path='/about' element={<AboutUs />}></Route>
                    <Route path="*" element={<Navigate to="/not-found" replace />} />
                </Route>
                <Route path='/not-found' element={<FileNotFound />}></Route>
                <Route path='/mail-send' element={<MailSend />}></Route>
            </Routes>
        </>
    )
}

export default CustomerRouter
