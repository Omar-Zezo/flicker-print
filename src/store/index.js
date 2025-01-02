import {configureStore} from "@reduxjs/toolkit"
import signup from "./slices/auth/signup"
import verifyEmail from "./slices/auth/verifyEmail"
import login from "./slices/auth/login"
import logout from "./slices/auth/logout"
import loggeduser from "./slices/auth/loggeduser"
import sendEmail from "./slices/auth/sendEmail"
import checkOtp from "./slices/auth/checkOtp"
import resetPassword from "./slices/auth/resetPassword"
import langDetect from "./slices/translation/translation"
import categories from "./slices/category/categories"
import subcategory from "./slices/category/subcategory"
import galleryPhoto from "./slices/gallery/photo-gallery"
import settings from "./slices/setting/settings"
import policy from "./slices/policies/policy"
import specialProducts from "./slices/product/specialProducts"
import productDetails from "./slices/product/productDetails"
import trendingProduct from "./slices/product/trendingProduct"
import productsFilter from "./slices/product/productsFilter"
import featuredCategories from "./slices/category/featuredCategories"
import businessCategories from "./slices/category/businessCategories"
import questions from "./slices/question/questions"
import packagesHome from "./slices/packages/packagesHome"
import packages from "./slices/packages/packages"
import packageDetails from "./slices/packages/packageDetails"


const store = configureStore({
    reducer:{
        langDetect,
        signup,
        verifyEmail,
        login,
        loggeduser,
        sendEmail,
        checkOtp,
        resetPassword,
        categories,
        galleryPhoto,
        settings,
        logout,
        policy,
        subcategory,
        specialProducts,
        trendingProduct,
        productsFilter,
        featuredCategories,
        businessCategories,
        questions,
        productDetails,
        packagesHome,
        packages,
        packageDetails
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
    }),
})

export default store