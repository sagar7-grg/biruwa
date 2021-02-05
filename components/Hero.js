import Navbar from "./Navbar";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      id="home"
      className="bg-header-image bg-auto h-screen lg:h-screen w-full relative flex justify-center items-center"
    >
      <Navbar />
      <div className="container  mx-auto  flex justify-between items-center text-gray-100 flex-col lg:flex-row ">
        <div className="w-full lg:w-5/12 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-inter font-black mb-6 leading-tight">
            Eat Fresh <br></br>Eat Healthy
          </h1>
          <p className="tracking-wider ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            a nd scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="bg-primary text-lg font-md mt-4 rounded-full px-4 shadow-2xl border-primary py-2 text-gray-100 hover:opacity-80">
            Contact Us
          </button>
        </div>

        <div className="flex-1 hidden lg:flex lg:justify-end">
          <Image src="/images/hero.png" alt="hero" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
