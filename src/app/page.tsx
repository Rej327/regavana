import Biography from "@/section/Biography";
import Events from "@/section/Events";
import Hero from "@/section/Hero";
import Mssg from "@/section/Mssg";
import Navbar from "@/section/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Events />
      <Biography />
      <Mssg />
    </main>
  );
}
