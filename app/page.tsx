import Hero from "@/components/home/Hero";
import SectionTwo from "@/components/home/SectionTwo";
import SectionThree from "@/components/home/SectionThree";
import SectionFour from "@/components/home/SectionFour";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FAQ from "@/components/home/FAQ";
import CTO from "@/components/global/CTO";

function HomePage() {
  return (
    <div>
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <FeaturedProducts />
      <FAQ />
      <CTO />
    </div>
  );
}
export default HomePage;
