import Nav from "@/components/Nav";
import SpotlightEffect from "@/components/SpotlightEffect";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import CommandCenter from "@/components/CommandCenter";
import VideoSection from "@/components/VideoSection";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Credentials from "@/components/Credentials";
import Properties from "@/components/Properties";
import Discovery from "@/components/Discovery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <SpotlightEffect />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <CommandCenter />
        <VideoSection />
        <Process />
        <Team />
        <Credentials />
        <Properties />
        <Discovery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
