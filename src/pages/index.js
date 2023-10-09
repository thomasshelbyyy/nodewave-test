import Applications from "@/components/Applications";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import StartCreating from "@/components/StartCreating";
import Testimony from "@/components/Testimony";
import Works from "@/components/Works";


export default function Home() {
  return (
    <main className="bg-black w-screen text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <Testimony />
      <Works />
      <HowWeWork />
      <Applications />
      <StartCreating />
      <Footer />
    </main>
  )
}
