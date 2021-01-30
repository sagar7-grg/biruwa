import Image from "next/image";
export default function About() {
  return (
    <div className="h-auto pt-20 pb-20 relative">
      <div className="absolute right-0 top-0 hidden lg:block">
        <Image src="/images/about2.jpg" alt="about" width={150} height={150} />
      </div>
      <div className="absolute left-0 bottom-0 hidden lg:block">
        <Image src="/images/abou1.jpg" alt="about" width={150} height={150} />
      </div>

      <div className=" max-w-4xl container mx-auto flex justify-center flex-col">
        <Image
          src="/images/restaurant.svg"
          alt="chopsticks"
          width={30}
          height={30}
        />
        <div className="flex justify-center items-center flex-col mb-8 space-y-4">
          <h1 className="text-center text-5xl font-amatic font-black">
            <span className="text-primary">Welcome to</span> our cottage
          </h1>
          <div className="border-2 border-primary w-10 "></div>
        </div>

        <p className="text-center">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type a nd
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="hidden lg:flex lg:justify-around lg:items-center lg:container lg:mx-auto lg:max-w-4xl lg:mt-10 ">
        <h1 className=" text-5xl font-amatic font-black text-right">
          <span className="text-primary">Checkout our</span> <br></br> delecious
          menu
        </h1>
        <Image src="/images/arrow.png" alt="arrow" width={153} height={32} />
        <div className="h-48 w-48 border-black bg-yellow-700">Our Menu</div>
      </div>
    </div>
  );
}
