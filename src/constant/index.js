import { B2b, B2c, Building, MasterCard, Visa } from "@/images/imgs";
import {
  Mail,
  Phone,
  Location,
} from "@/images/svg";


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
  {id:0, name: "Company", type: "MY_COMPANY", icon: Building},
  {id:1, name: "B2b", type: "B2B", icon: B2b},
  {id:2, name: "B2c", type: "B2C", icon: B2c},

]


const paymentsFooter = [
  {name: "visa", img: Visa},
  {name: "mastercard", img: MasterCard}
]


export {
  navLinks,
  contactFooter,
  footerHelp,
  ourCompany,
  accountTypes,
  paymentsFooter
};
