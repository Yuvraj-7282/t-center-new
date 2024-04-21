import React, { useEffect, useState } from "react";
import UserDetails from "../../Components/UserDetails";
import AdminTab from "../../Components/Admin/AdminTab";
import { ShoppingCart, Users, List } from "lucide-react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import { Link } from "react-router-dom";

import TotalOrders from "../../Components/Admin/TotalOrders";
import TotalProducts from "../../Components/Admin/TotalProducts";
import TotalUsers from "../../Components/Admin/TotalUsers";

function Admin() {
  const user = JSON.parse(localStorage.getItem("users"));

  return (
    <div className="p-5">
      <Link
        onClick={() => {
          localStorage.clear();
          toast.success("logout successful");
        }}
        to={"/"}
        className="flex w-full justify-end"
      >
        <button
          type="button"
          className="shadow-md inline-block px-4 bg-yellow-400 text-black hover:bg-yellow-600 text-center py-2 font-bold rounded-md "
        >
          Sign Out
        </button>
      </Link>
      <br />
      <UserDetails name={user?.name} email={user?.email} role={user?.role} />
      <br />
      <br />
      <TotalProducts />
    </div>
  );
}

export default Admin;
