import Image from "next/image";
export default function Service() {
  return (
    <div className="h-auto pt-20 pb-20 relative bg-gray-50">
      <div className="absolute right-0 top-0 hidden lg:block">
        <Image src="/images/about2.jpg" alt="about" width={150} height={150} />
      </div>
      <div className="absolute left-0 bottom-0 hidden lg:block">
        <Image src="/images/abou1.jpg" alt="about" width={150} height={150} />
      </div>

      <div className="container mx-auto flex justify-center flex-col">
        <Image
          src="/images/restaurant.svg"
          alt="chopsticks"
          width={30}
          height={30}
        />
        <div className="flex justify-center items-center flex-col mb-8 space-y-4">
          <h1 className="text-center text-5xl font-amatic font-black">
            <span className="text-primary">Our</span> Services
          </h1>
          <div className="border-2 border-primary w-10 "></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((item) => (
            <div
              className="bg-white cursor-pointer shadow-2xl  border-2 rounded-lg border-gray-100 card relative px-16 py-40"
              key={item}
            >
              <div className=" child1 flex h-full w-full justify-center items-center flex-col space-y-4 absolute top-0 left-0 z-20 ">
                <Image
                  src="/images/cake-box.svg"
                  alt="Cake"
                  width={100}
                  height={100}
                  className="logo"
                />
                <h1 className="text-4xl font-black font-amatic ">
                  Birthday Party
                </h1>

                <p className="card-desc text-center text-gray-100 transition duration-500 delay-200">
                  We help you celebrate your auspicious occassions in a
                  memorable way!
                </p>
              </div>
              <div className="overlay absolute top-0 left-0 h-full w-full z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
