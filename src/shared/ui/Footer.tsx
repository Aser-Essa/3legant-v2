import { Link, NavLink } from "react-router";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { TbBrandYoutube } from "react-icons/tb";

function Footer() {
  return (
    <>
      <div className="h-62.25 bg-neutral-900 px-40 py-20 pb-8 max-lg:px-10 max-md:h-auto max-sm:h-auto max-sm:px-8 max-sm:py-12">
        <div className="flex items-center justify-between max-sm:flex-col">
          <div className="flex items-center divide-x divide-neutral-500 max-sm:mb-10 max-sm:flex-col max-sm:divide-x-0 max-sm:divide-y">
            <div className="pr-8 text-2xl leading-6 font-medium text-white max-sm:pr-0 max-sm:pb-4">
              <Link to={"/"} className="flex">
                <span>3legant</span>
                <span className="text-neutral-500">.</span>
              </Link>
            </div>
            <div className="font-inter text-surface-border pl-8 text-sm leading-5.5 max-sm:pt-4 max-sm:pl-0 max-sm:font-normal">
              <span>Gift & Decoration Store</span>
            </div>
          </div>
          <ul className="font-inter flex items-center gap-10 text-sm font-medium text-nowrap text-[#fefefe] max-sm:flex-col max-sm:gap-8 max-sm:font-normal">
            <li>
              <NavLink to={"/"}>
                <p className="text-[#fefefe]">Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/shop"}>
                <p className="text-[#fefefe]">Shop</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>
                <p className="text-[#fefefe]">Blog</p>
              </NavLink>
            </li>
            <li className="text-[#fefefe]">
              <NavLink to={"/contact-us"}>
                <p className="text-[#fefefe]">Contact Us</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mt-12.25 flex items-center justify-between max-md:flex-col max-md:gap-4 max-sm:mt-10 max-sm:flex-col-reverse">
          <div className="flex items-center gap-7 py-4 text-xs leading-5 text-nowrap text-[#fefefe] max-sm:flex-col-reverse max-sm:pt-8 max-sm:pb-0">
            <p className="text-surface-border text-nowrap max-sm:text-xs max-sm:font-normal">
              Copyright © 2023 3legant. All rights reserved
            </p>
            <div className="flex items-center justify-center gap-7 text-nowrap">
              <p className="font-semibold text-nowrap">Privacy Policy</p>
              <p className="font-semibold text-nowrap">Terms of Use</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-[#fefefe]">
            <Link to={"https://www.instagram.com/asser_essa_/"} target="_blank">
              <FiInstagram className="h-6 w-6" />
            </Link>
            <Link
              to={"https://www.facebook.com/profile.php?id=100004553357437"}
              target="_blank"
            >
              <FiFacebook className="h-6 w-6" />
            </Link>
            <TbBrandYoutube className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
