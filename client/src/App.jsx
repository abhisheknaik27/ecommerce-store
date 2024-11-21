import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/AuthLayout";
import AuthLogin from "./pages/auth/AuthLogin";
import AuthRegister from "./pages/auth/AuthRegister";
import AdminLayout from "./components/admin-view/AdminLayout";
import AdminDashboard from "./pages/admin-view/AdminDashboard";
import AdminProducts from "./pages/admin-view/AdminProducts";
import AdminOrders from "./pages/admin-view/AdminOrders";
import AdminFeatures from "./pages/admin-view/AdminFeatures";
import ShoppingLayout from "./components/shopping-view/ShoppingLayout";
import NotFound from "./pages/not-found/NotFound";
import Account from "./pages/shopping-view/Account";
import ProductListing from "./pages/shopping-view/ProductListing";
import ShopHome from "./pages/shopping-view/ShopHome";
import Checkout from "./pages/shopping-view/Checkout";
import CheckAuth from "./components/common/CheckAuth";
import UnauthPage from "./pages/not-found/UnauthPage";

const App = () => {
  const isAuthenticated = true;
  const user = {
    name: "abhi",
    role: "user",
  };

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>HEADER</h1>

      <Routes>
        {/* auth routes */}
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        {/* admin routes */}
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        {/* shopping routes */}
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShopHome />} />
          <Route path="listing" element={<ProductListing />} />
          <Route path="account" element={<Account />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/unauth-page" element={<UnauthPage />} />
      </Routes>
    </div>
  );
};

export default App;
