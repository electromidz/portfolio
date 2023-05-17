import Hero from "./features/hero";
import Who from "./features/who";
import Work from "./features/works";
import Contact from "./features/contact";
export default function Home() {
  return (
    <div className="snap-y snap-mandatory scroll-smooth h-screen overflow-y-auto scrollbar-hide text-white bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <Hero />
      <Who />
      <Work />
      <Contact />
    </div>
  );
}
