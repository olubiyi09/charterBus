"use client"
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Loader from "@/components/loader/Loader";
import Services from "@/components/services/Services";
import Team from "@/components/team/Team";
import Why from "@/components/why/Why";
import { useSelector } from "react-redux";


export default function Home() {
  const { loading } = useSelector((state: any) => state.loaders)
  return (
    <main className="">
      {loading && <Loader />}
      <Hero />
      <About />
      <Why />
      <Services />
      <Team />
      <Footer />
    </main>
  );
}
