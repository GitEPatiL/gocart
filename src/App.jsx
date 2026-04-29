import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Public layout + pages
import PublicLayout from '@/layouts/PublicLayout'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ShopByUser from '@/pages/ShopByUser'
import Product from '@/pages/Product'
import Cart from '@/pages/Cart'
import Orders from '@/pages/Orders'
import Pricing from '@/pages/Pricing'

// Admin layout + pages
import AdminLayout from '@/layouts/AdminLayout'
import AdminDashboard from '@/pages/admin/AdminDashboard'
import AdminApprove from '@/pages/admin/AdminApprove'
import AdminCoupons from '@/pages/admin/AdminCoupons'
import AdminStores from '@/pages/admin/AdminStores'

// Store (seller) layout + pages
import StoreLayout from '@/layouts/StoreLayout'
import StoreDashboard from '@/pages/store/StoreDashboard'
import StoreAddProduct from '@/pages/store/StoreAddProduct'
import StoreManageProduct from '@/pages/store/StoreManageProduct'
import StoreOrders from '@/pages/store/StoreOrders'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:username" element={<ShopByUser />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="approve" element={<AdminApprove />} />
          <Route path="coupons" element={<AdminCoupons />} />
          <Route path="stores" element={<AdminStores />} />
        </Route>

        {/* Store (seller) routes */}
        <Route path="/store" element={<StoreLayout />}>
          <Route index element={<StoreDashboard />} />
          <Route path="add-product" element={<StoreAddProduct />} />
          <Route path="manage-product" element={<StoreManageProduct />} />
          <Route path="orders" element={<StoreOrders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
