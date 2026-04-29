import ProductDescription from '@/components/ProductDescription'
import ProductDetails from '@/components/ProductDetails'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Product() {
    const { productId } = useParams()
    const [product, setProduct] = useState()
    const products = useSelector(state => state.product.list)

    const fetchProduct = async () => {
        const found = products.find((p) => p.id === productId)
        setProduct(found)
    }

    useEffect(() => {
        if (products.length > 0) {
            fetchProduct()
        }
        window.scrollTo(0, 0)
    }, [productId, products])

    return (
        <div className="mx-6">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumbs */}
                <div className="text-gray-600 text-sm mt-8 mb-5">
                    Home / Products / {product?.category}
                </div>

                {/* Product Details */}
                {product && <ProductDetails product={product} />}

                {/* Description & Reviews */}
                {product && <ProductDescription product={product} />}
            </div>
        </div>
    )
}
