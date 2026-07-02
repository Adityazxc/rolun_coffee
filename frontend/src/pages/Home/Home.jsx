import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/sections/Hero";
import Footer from "../../components/layout/Footer";
import Reseller from "../../components/sections/Reseller";
import Reservation from "../../components/sections/Reservation";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Reseller />
      <Reservation />
      <Footer />
    </MainLayout>
  );
}