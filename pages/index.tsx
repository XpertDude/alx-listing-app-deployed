// pages/index.tsx
import FilterSection from "@/components/FilterSection";
import HeroSection from "@/components/HeroSection";
import ListingSection from "@/components/ListingSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <FilterSection />
      <ListingSection />
    </main>
  );
};

export default HomePage;