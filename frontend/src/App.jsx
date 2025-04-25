import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import AdminLayout from "./components/Admin/AdminLayout";
import { EditProductPage } from "./components/Admin/EditProductPage";
import ProductManagement from "./components/Admin/ProductManagement";
import UserManagement from "./components/Admin/UserManagement";
import Checkout from "./components/Cart/Checkout";
import UserLayout from "./components/Layout/UserLayout";
import OrderDetialsPage from "./components/Products/OrderDetialsPage";
import ProductDetails from "./components/Products/ProductDetails";
import AdminHomePage from "./pages/AdminHomePage";
import CollectionPage from "./pages/CollectionPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyOrdersPage from "./pages/MyOrdersPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="collections/:collection" element={<CollectionPage />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route
            path="order-confirmation"
            element={<OrderConfirmationPage />}
          />
          <Route path="order/:id" element={<OrderDetialsPage />} />
          <Route path="my-orders" element={<MyOrdersPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          {/* Admin Layout*/}
          <Route index element={<AdminHomePage />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="products/:id/edit" element={<EditProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
