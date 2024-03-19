import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Team from "@/components/team/Team";
import Why from "@/components/why/Why";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Why />
      <Services />
      <Team />
    </main>
  );
}
