"use client";
import React from "react";
import Image from "next/image";
import banner from "../assets/img/banner.png";

import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  return (
    <section className="w-full px-40">
      <div className="relative w-full h-80 rounded-xl overflow-hidden">
        <Image
          src={banner}
          alt="banner"
          width={1000}
          height={400}
          quality={100}
          className="object-cover absolute w-full bg-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 h-full flex flex-col justify-center gap-4 px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Freshness You Can Trust,
            <span className="block">Savings You will Love!</span>
          </h2>

          <div>
            <button
              onClick={() => router.push("/shop")}
              className="py-3 px-8 rounded-sm bg-[#4fbf8b] text-white font-semibold"
            >
              Shop now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
