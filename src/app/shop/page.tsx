"use client";
import React from "react";
import Image from "next/image";
import stars from "../../assets/img/star.svg";
import axios from "@/api/axios";
import { useQuery } from "@tanstack/react-query";
import { TProductsResponse } from "@/components/BestSeller";
import mminicart from "../../assets/img/minicart.svg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const Shop = () => {
  const { data } = useQuery<TProductsResponse>({
    queryKey: ["shop"],
    queryFn: async () => {
      const { data } = await axios.get("/api/product/list");
      return data;
    },
  });
  return (
    <div>
      <Header />

      <div className="flex flex-col gap-6 px-32 pt-6 pb-6">
        <p className="text-3xl font-medium text-grey700">All products</p>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {data?.products
            .filter((product) => product.name.toLocaleLowerCase())
            .map((item) => (
              <li
                key={item._id}
                className="flex flex-col group gap-2 p-4 border border-gray-300 rounded-lg"
              >
                <div className="px-5 py-2">
                  <Image
                    width={100}
                    height={100}
                    quality={100}
                    className="max-w-36 group-hover:scale-105"
                    src={item.image[0]}
                    alt=""
                  />
                </div>
                <div className="flex flex-col ">
                  <p className="text-gray-500/60 text-sm">{item.category}</p>
                  <p className="text-grey700 font-medium text-lg ">
                    {item.name}
                  </p>
                  <div className="flex items-center gap-1">
                    <Image
                      width={100}
                      height={100}
                      quality={100}
                      className="w-3.5"
                      src={stars}
                      alt=""
                    />
                    <Image
                      width={100}
                      height={100}
                      quality={100}
                      className="w-3.5"
                      src={stars}
                      alt=""
                    />
                    <Image
                      width={100}
                      height={100}
                      quality={100}
                      className="w-3.5"
                      src={stars}
                      alt=""
                    />
                    <Image
                      width={100}
                      height={100}
                      quality={100}
                      className="w-3.5"
                      src={stars}
                      alt=""
                    />
                    <Image
                      width={100}
                      height={100}
                      quality={100}
                      className="w-3.5"
                      src={stars}
                      alt=""
                    />

                    <p className="text-sm text-gray-500/60">(4)</p>
                  </div>
                  <div className="flex justify-between pt-4">
                    <div className="flex gap-1 items-center">
                      <p className="text-primary font-bold text-xl">
                        $<span>{item.price}</span>
                      </p>
                      <p className="text-sm self-end text-gray-500/60 ">
                        $<span className="line-through">{item.offerPrice}</span>
                      </p>
                    </div>
                    <div className="flex items-center cursor-pointer justify-center gap-1 bg-[#e1fee2] border border-[#4fbf8b] px-4 py-1 rounded-sm">
                      <Image src={mminicart} alt="" />
                      <button>Add</button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
