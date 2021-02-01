import Head from "next/head";

import Hero from "../components/Hero";
import About from "../components/About";
import Featured from "../components/Featured";
import Service from "../components/Service";
import Menu from "../components/Menu";
import Team from "../components/Team";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Featured />
      <Service />
      <Menu />
      <Team />
      <Gallery />
    </div>
  );
}
