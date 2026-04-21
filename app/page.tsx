import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import VideoSection from "@/components/VideoSection";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Value from "@/components/Value";
import Discovery from "@/components/Discovery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <VideoSection />
        <Process />
        <Team />
        <Value />
        <Discovery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
