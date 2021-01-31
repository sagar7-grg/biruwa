import Head from "next/head";

import Hero from "../components/Hero";
import About from "../components/About";
import Featured from "../components/Featured";
import Service from "../components/Service";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Featured />
      <Service />
    </div>
  );
}
