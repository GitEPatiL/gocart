import { Outlet } from 'react-router-dom'
import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PublicLayout() {
    return (
        <>
            <Banner />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
