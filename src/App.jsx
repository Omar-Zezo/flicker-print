import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "@/pages/auth/AuthLayout";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ChangePassword from "./pages/auth/ChangePassword";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AllCategories from "./pages/category/AllCategories";
import VerifyPassword from "./pages/auth/VerifyPassword";
import VerifyEmail from "./pages/auth/VerifyEmail";
import OurGallery from "./pages/OurGallery";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import TermsAndConditions from "./pages/policies/TermsAndConditions";
import CancellationPolicy from "./pages/policies/CancellationPolicy";
import RefundPolicy from "./pages/policies/RefundPolicy";
import SelectAccountType from "./pages/auth/SelectAccountType";
import CategoryDetails from "./pages/category/CategoryDetails";
import FAQ from "./pages/FAQ";
import ProductDetails from "./pages/ProductDetails";
import Notifications from "./pages/Notifications";
import Packages from "./pages/Packages/Packages";
import PackagesDetails from "./pages/Packages/PackagesDetails";
import Profile from "./pages/user/Profile";
import ContactUs from "./pages/policies/Contactus";

const router = createBrowserRouter([
  {
    Component: Layout,
    path: "/",
    children : [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "categories",
        element: <AllCategories/>
      },
      {
        path: "categories/:id",
        element: <CategoryDetails/>
      },
      {
        path: "our-gallery",
        element: <OurGallery/>
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy/>
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions/>
      },
      {
        path: "cancellation-policy",
        element: <CancellationPolicy/>
      },
      {
        path: "refund-policy",
        element: <RefundPolicy/>
      },
      {
        path: "questions-answers",
        element: <FAQ/>
      },
      {
        path: "product/:id",
        element: <ProductDetails/>
      },
      {
        path: "/notifications",
        element: <Notifications/>
      },
      {
        path: "/packages",
        element: <Packages/>
      },
      {
        path: "/packages/:id",
        element: <PackagesDetails/>
      },
      {
        path: "/profile",
        element: <Profile/>
      },
      {
        path: "/contact-us",
        element: <ContactUs/>
      }
    ]
  },
  {
    Component: AuthLayout,
    path: "/auth",
    children: [
      {
        path: "signup",
        element: <Signup/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "forget-password",
        element: <ForgetPassword/>
      },
      {
        path: "change-password",
        element: <ChangePassword/>
      },
      {
        path: "verify-reset-password",
        element: <VerifyPassword/>
      },
      {
        path: "verify-email",
        element: <VerifyEmail/>
      },
      {
        path: "select-account-type",
        element: <SelectAccountType/>
      },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
