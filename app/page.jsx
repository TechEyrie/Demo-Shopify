import AboutStudio from "@/components/AboutStudio";
import Benefits from "@/components/Benefits";
import CategoryBar from "@/components/CategoryBar";
import FeatureCollection from "@/components/FeatureCollection";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import VipSignup from "@/components/VipSignup";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="w-full pt-28 bg-surface-canvas">
        <div className="flex flex-col w-full">
          <Hero />
          <CategoryBar />
          <FeatureCollection />
          <Benefits />
          <AboutStudio />
          <Reviews />
          <VipSignup />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
