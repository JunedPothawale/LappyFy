import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../widgets/Header'
import Footer from '../../widgets/Footer'
import ScrollToTop from '../components/ScrollToTop'


const Index = () => {
    return (
        <>
            <Header />
            <Outlet />
            <ScrollToTop />
            <Footer />
        </>
    )
}

export default Index
