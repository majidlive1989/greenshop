import React from "react";
import Image from "next/image";
import organicimg from "../assets/img/organic_vegitable.png";
import freshFruits from "../assets/img/fresh_fruits_.png";
import drinks from "../assets/img/bottles.png";
import maggi from "../assets/img/maggi.png";
import dairy from "../assets/img/dairy_product.png";
import bakery from "../assets/img/bakery.png";
import grains from "../assets/img/grain.png";
const CategoriesSection = () => {
  return (
    <div className="flex flex-col gap-6 px-32 pt-6">
      <p className="text-3xl font-medium text-grey700">Categories</p>
      <div className="flex gap-4 justify-between">
        <div className="group cursor-pointer py-5 px-6 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#fef6da]">
          <Image
            className="max-w-28 group-hover:scale-105 transition"
            src={organicimg}
            alt="organic fruits"
            width={100}
            height={100}
            quality={100}
          />
          <p className="text-sm font-medium text-grey700">Organic veggies</p>
        </div>
        <div className="group cursor-pointer py-5 px-6 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#fee0e0]">
          <Image
            className="max-w-28 group-hover:scale-105 transition"
            src={freshFruits}
            alt="freshFruits"
            width={100}
            height={100}
            quality={100}
          />
          <p className="text-sm font-medium text-grey700">Fresh Fruits</p>
        </div>
        <div className="group cursor-pointer py-5 px-6 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#f0f5de]">
          <Image
            className="max-w-28 group-hover:scale-105 transition"
            src={drinks}
            alt="drinks"
            width={100}
            height={100}
            quality={100}
          />
          <p className="text-sm font-medium text-grey700">Cold Drinks</p>
        </div>
        <div className="group cursor-pointer py-5 px-6 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#e1f5ec]">
          <Image
            className="max-w-28 group-hover:scale-105 transition"
            src={maggi}
            alt="maggi"
            width={100}
            height={100}
            quality={100}
          />
          <p className="text-sm font-medium text-grey700">Instant Food</p>
        </div>
        <div className="group cursor-pointer py-5 px-6 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#fee6cd]">
          <Image
            className="max-w-28 group-hover:scale-105 transition"
            src={dairy}
            alt="dairy"
            width={100}
            height={100}
            quality={100}
          />
          <p className="text-sm font-medium text-grey700">Dairy Products</p>
        </div>
        <div className="group cursor-pointer py-5 px-6 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#e0f6fe]">
          <Image
            className="max-w-28 group-hover:scale-105 transition"
            src={bakery}
            alt="bakery"
            width={100}
            height={100}
            quality={100}
          />
          <p className="text-sm font-medium text-grey700">Bakery & Breads</p>
        </div>
        <div className="group cursor-pointer py-5 px-6 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#f1e3f9]">
          <Image
            className="max-w-28 group-hover:scale-105 transition"
            src={grains}
            alt="grains"
            width={100}
            height={100}
            quality={100}
          />
          <p className="text-sm font-medium text-grey700">Grains & Cereals</p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
