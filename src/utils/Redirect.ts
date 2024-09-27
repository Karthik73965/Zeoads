"use server";

import { cookies } from "next/headers";

export const Admin_Redirect = (url: string) => {
  const admin_token = cookies().get("admin_token")?.value; 
  if (admin_token && adminRoutes.includes(url)) {
    return false;
  } else {
    return true;
  }
};

export const User_Redirect = (url: string) => {
  const user_token = cookies().get("access_token")?.value;
  if(user_token && userRoutes.includes(url)){
    return true 
  }
};

const adminRoutes = [
  "/admin/user-management",
  "/admin/user/:slug*",
  "/admin/manage-orders",
  "/admin/product-management",
  "/admin/product-management/CreateBlog",
  "/admin/fund-management",
  "/admin/analytics",
  "/admin/manage-notifications",
  "/admin/settings",
];

const userRoutes = [
  "/dashboard",
  "/account",
  "/account/:slug*",
  "/courses",
  "/billing/Recharge-wallet",
  "/billing/Transaction-history",
  "/billing/Plans",
  "/settings/Account-settings",
  "/settings/Invoice-information",
  "/settings/User-Management",
]
