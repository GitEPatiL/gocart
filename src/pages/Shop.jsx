import ProductCard from '@/components/ProductCard'
import { MoveLeftIcon } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Shop() {
    const [searchParams] = useSearchParams()
    const search = searchParams.get('search')
    const navigate = useNavigate()

    const products = useSelector(state => state.product.list)

    const filteredProducts = search
        ? products.filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase())
        )
        : products

    return (
        <div className="min-h-[70vh] mx-6">
            <div className="max-w-7xl mx-auto">
                <h1
                    onClick={() => navigate('/shop')}
                    className="text-2xl text-slate-500 my-6 flex items-center gap-2 cursor-pointer"
                >
                    {search && <MoveLeftIcon size={20} />} All <span className="text-slate-700 font-medium">Products</span>
                </h1>
                <div className="grid grid-cols-2 sm:flex flex-wrap gap-6 xl:gap-12 mx-auto mb-32">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}
