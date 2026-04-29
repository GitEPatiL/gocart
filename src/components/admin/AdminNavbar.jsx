import { assets } from '@/assets/assets'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
    return (
        <div className="flex items-center justify-between px-12 py-3 border-b border-slate-200 transition-all">
            <Link to="/" className="relative">
                <img src={assets.yourcart_logo} alt="YourCart Logo" className="w-28 sm:w-32 h-auto" />
                <p className="absolute text-[10px] font-semibold -top-2 -right-8 px-2 p-0.5 rounded-full flex items-center gap-1 text-white bg-red-800">Admin</p>
            </Link>
            <div className="flex items-center gap-3">
                <p>Hi, Admin</p>
            </div>
        </div>
    )
}

export default AdminNavbar
