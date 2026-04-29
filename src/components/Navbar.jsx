import { assets } from '@/assets/assets'
import { Search, ShoppingCart, UserRound } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const cartCount = useSelector(state => state.cart.total)

    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`/shop?search=${search}`)
    }

    return (
        <nav className="relative bg-white">
            <div className="mx-6">
                <div className="flex items-center justify-between max-w-7xl mx-auto py-4 transition-all">
                    <Link to="/" className="relative">
                        <img src={assets.yourcart_logo} alt="YourCart Logo" className="w-28 sm:w-32 h-26" />
                        <p className="absolute text-[10px] font-semibold -top-2 -right-5 px-2 p-0.5 rounded-full flex items-center gap-1 text-white bg-red-800">plus</p>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex items-center gap-4 lg:gap-8 text-slate-600">
                        <Link to="/">Home</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/">About</Link>
                        <Link to="/">Contact</Link>

                        <form onSubmit={handleSearch} className="hidden xl:flex items-center w-xs text-sm gap-2 bg-slate-100 px-4 py-3 rounded-full">
                            <Search size={18} className="text-slate-600" />
                            <input className="w-full bg-transparent outline-none placeholder-slate-600" type="text" placeholder="Search products" value={search} onChange={(e) => setSearch(e.target.value)} required />
                        </form>

                        <Link to="/cart" className="relative flex items-center gap-2 text-slate-600">
                            <ShoppingCart size={18} />
                            Cart
                            <button className="absolute -top-1 left-3 text-[8px] text-white bg-slate-600 size-3.5 rounded-full">{cartCount}</button>
                        </Link>

                        <button className="px-8 py-2 bg-red-600 hover:bg-red-700 transition text-white rounded-full">Login</button>
                    </div>

                    {/* Mobile User Button */}
                    <div className="sm:hidden">
                        <button className="px-7 py-1.5 bg-red-600 hover:bg-red-700 text-sm transition text-white rounded-full">Login</button>
                    </div>
                </div>
            </div>
            <hr className="border-red-200" />
        </nav>
    )
}

export default Navbar
