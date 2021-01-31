import Head from "next/head";

import Hero from "../components/Hero";
import About from "../components/About";
import Featured from "../components/Featured";
import Service from "../components/Service";
import Menu from "../components/Menu";
import Team from "../components/Team";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Featured />
      <Service />
      <Menu />
      <Team />
    </div>
  );
}
