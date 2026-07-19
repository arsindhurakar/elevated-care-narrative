import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { About } from "@/components/sections/About";
import { Awards } from "@/components/sections/Awards";
import { Contact } from "@/components/sections/Contact";
import { Expertise } from "@/components/sections/Expertise";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Memberships } from "@/components/sections/Memberships";
import { Philosophy } from "@/components/sections/Philosophy";
import { Research } from "@/components/sections/Research";

export default function LandingPage() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Journey />
      <Expertise />
      <Research />
      <Awards />
      <Philosophy />
      <Memberships />
      <Contact />
      <Footer />
    </div>
  );
}
