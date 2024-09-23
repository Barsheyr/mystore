import Hero from "@/components/home/Hero";
import SectionTwo from "@/components/home/SectionTwo";
import SectionThree from "@/components/home/SectionThree";
import SectionFour from "@/components/home/SectionFour";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FAQ from "@/components/home/FAQ";

function HomePage() {
  return (
    <div>
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <FeaturedProducts />
      <FAQ />
    </div>
  );
}
export default HomePage;
