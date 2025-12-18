import React from "react";
import Image from "next/image";
import cartimg from "../assets/img/cart.svg";
import logoimg from "../assets/img/logo-CMLzTNjw.svg";
import searchimg from "../assets/img/search.svg";
import Link from "next/link";
const Header = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-row justify-around w-full pt-9 pb-6 gap-3  bg-white border-b border-gray-500 py-2 ">
        <div>
          <Image
            src={logoimg}
            data-selected="true"
            data-label-id="0"
            data-metatip="true"
            width={150}
            height={100}
            quality={100}
            alt="greencart"
          />
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-4">
            <ul className="flex flex-row gap-4 px-4 text-gray-600">
              <li>Home</li>
              <li>
                <Link href="َshop">َAll Products</Link>
              </li>
            </ul>
          </div>
          <div className="relative ">
            <input
              type="text"
              placeholder="Search products"
              className="w-full border px-3 py-1 pr-10 rounded-2xl border-gray-500"
            />

            <Image
              src={searchimg}
              width={18}
              height={18}
              alt="search"
              className="absolute right-3 top-1/2 -translate-y-2/3 text-gray-400"
            />
          </div>

          <Image
            className="w-6 opacity-80"
            alt="cart"
            src={cartimg}
            data-selected="true"
            data-label-id="0"
            data-metatip="true"
            width={100}
            height={100}
            quality={100}
          />

          <button className="bg-[#4fbf8b] rounded-4xl text-white px-8 py-2">
            Login
          </button>
        </div>
      </div>
      ;
    </div>
  );
};

export default Header;
