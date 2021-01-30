import Head from "next/head";

import Hero from "../components/Hero";
import About from "../components/About";
import Featured from "../components/Featured";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Featured />
    </div>
  );
}
