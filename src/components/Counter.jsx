import { addToCart, removeFromCart } from '@/lib/features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const Counter = ({ productId }) => {
    const { cartItems } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    return (
        <div className="inline-flex items-center gap-1 sm:gap-3 px-3 py-1 rounded border border-slate-200 max-sm:text-sm text-slate-600">
            <button onClick={() => dispatch(removeFromCart({ productId }))} className="p-1 select-none">-</button>
            <p className="p-1">{cartItems[productId]}</p>
            <button onClick={() => dispatch(addToCart({ productId }))} className="p-1 select-none">+</button>
        </div>
    )
}

export default Counter
