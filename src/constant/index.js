import { B2b, B2c, Building, MasterCard, Visa } from "@/images/imgs";
import { Mail, Phone, Location } from "@/images/svg";

const navLinks = [
  { name: "home", link: "/" },
  { name: "all categories", link: "/categories" },
  { name: "our Gallery", link: "/our-gallery" },
  { name: "about Us", link: "/about-us" },
  { name: "contact Us", link: "/contact-us" },
];

const contactFooter = [
  { name: "+87 01928491", icon: Phone, link: "" },
  { name: "Flicker@gmail.com", icon: Mail, link: "" },
  { name: "381, cairo, egypt ", icon: Location, link: "" },
];

const footerHelp = [
  { name: "my Account", link: "" },
  { name: "fAQs", link: "/questions-answers" },
  { name: "contact & Support", link: "/contact-us" },
  { name: "all categories", link: "/categories" },
  { name: "all Products", link: "" },
];

const ourCompany = [
  { name: "about Us", link: "" },
  { name: "our Gallery", link: "/our-gallery" },
  { name: "privacy Policy", link: "/privacy-policy" },
  { name: "terms and Conditions", link: "terms-and-conditions" },
  { name: "cancellation Policy", link: "cancellation-policy" },
  { name: "refund Policy", link: "refund-policy" },
];

const accountTypes = [
  { id: 0, name: "Company", type: "MY_COMPANY", icon: Building },
  { id: 1, name: "B2b", type: "B2B", icon: B2b },
  { id: 2, name: "B2c", type: "B2C", icon: B2c },
];

const paymentsFooter = [
  { name: "visa", img: Visa },
  { name: "mastercard", img: MasterCard },
];

const pathes = [
  "/notifications",
  "/my-profile",
  "/cart",
  "/checkout",
  "/track-order",
  "/order-details",
  "/product-status",
  "/my-profile/my-address",
  "/my-profile/order-history",
  "/my-profile/track-order"
];


// add to cart
function addToCart(product) {
  // get current cart or create new one
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  // if product is exists in cart
  const existingProductIndex = cart.findIndex(item => (item.item_id === product.item_id) && (item.type === product.type));
  
  if (existingProductIndex > -1) {
      // if exists increse qty
      cart[existingProductIndex].qty += product.qty || 1;
  } else {
      // if not exists add to cart
      cart.push({ ...product, qty: product.qty || 1 });
  }
  
  // update cart in localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
}


export {
  navLinks,
  contactFooter,
  footerHelp,
  ourCompany,
  accountTypes,
  paymentsFooter,
  pathes,
  addToCart
};
