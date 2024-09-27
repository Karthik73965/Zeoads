import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
  const access_token = cookies().get("access_token")?.value;
  const role_token = cookies().get("role_token")?.value;
  const admin_token = cookies().get("admin_token");

  const { pathname } = req.nextUrl;

  // Define user and admin route matchers
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
  ];

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

  // Check if the current path matches any user routes
  const isUserRoute = userRoutes.some((route) => pathname.startsWith(route));
  // Check if the current path matches any admin routes
  const isAdminRoute = adminRoutes.some((route) => pathname.startsWith(route));

  // Logic for user routes
  if (isUserRoute) {
    if (!access_token) {
      return NextResponse.redirect(new URL("/signup", req.nextUrl), {
        status: 303,
      });
    }
    if (role_token) {
      return NextResponse.redirect(new URL("/onboarding", req.nextUrl), {
        status: 303,
      });
    }
  }

  // Logic for admin routes
  if (isAdminRoute) {
    if (!admin_token) {
      return NextResponse.redirect(new URL("/admin/login", req.nextUrl), {
        status: 303,
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // user routes
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
    // admin routes
    "/admin/user-management",
    "/admin/user/:slug*",
    "/admin/manage-orders",
    "/admin/product-management",
    "/admin/product-management/CreateBlog",
    "/admin/fund-management",
    "/admin/analytics",
    "/admin/manage-notifications",
    "/admin/settings",
  ],
};
