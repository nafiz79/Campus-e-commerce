import React from "react";
import {
  FaBoxOpen,
  FaClipboardList,
  FaSignOutAlt,
  FaStore,
  FaUser,
} from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/");
  };
  return (
    <div className="p-6 ">
      <div className="mb-6">
        <Link to="/admin" className="text-2xl font-medium ">
          Logger's Campus Fashion
        </Link>
      </div>
      <h2 className="text-xl font-medium mb-6 text-center ">Admin Dashboard</h2>
      <nav className="flex flex-col space-y-2 ">
        <NavLink
          to="/admin/users"
          className={({ isactive }) =>
            isactive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-centers space-x-2"
          }
        >
          <FaUser />
          <span>Users</span>
        </NavLink>
        <NavLink
          to="/admin/products"
          className={({ isactive }) =>
            isactive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-centers space-x-2"
          }
        >
          <FaBoxOpen />
          <span>Users</span>
        </NavLink>
        <NavLink
          to="/admin/users"
          className={({ isactive }) =>
            isactive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-centers space-x-2"
          }
        >
          <FaUser />
          <span>Products</span>
        </NavLink>
        <NavLink
          to="/admin/orders"
          className={({ isactive }) =>
            isactive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-centers space-x-2"
          }
        >
          <FaClipboardList />
          <span>Orders</span>
        </NavLink>
        <NavLink
          to="/admin/shop"
          className={({ isactive }) =>
            isactive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-centers space-x-2"
          }
        >
          <FaStore />
          <span>Shop</span>
        </NavLink>
      </nav>
      <div className="mt-6 ">
        <button
          onClick={handleLogOut}
          className="w-full bg-red-600 text-white py-2 px-4 rounded flex items-center justify-center space-x-2"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
