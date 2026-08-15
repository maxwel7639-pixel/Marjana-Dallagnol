import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Metodo from "@/components/Metodo";
import Depoimentos from "@/components/Depoimentos";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page">
      <Nav />
      <Hero />
      <Sobre />
      <Metodo />
      <Depoimentos />
      <Faq />
      <Footer />
    </div>
  );
}
