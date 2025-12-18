import CategoriesSection from "@/components/Categories";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen  ">
      <main className="flex flex-col  w-full ">
        <Header />
        <HeroSection />
        <CategoriesSection />
      </main>
    </div>
  );
}
