import Image from "next/image";
export default function Team() {
  return (
    <div id="team" className="bg-gray-50 pt-24 pb-24">
      <div className=" container mx-auto flex justify-center flex-col">
        <Image
          src="/images/restaurant.svg"
          alt="chopsticks"
          width={30}
          height={30}
        />
        <div className="flex justify-center items-center flex-col mb-8 space-y-4">
          <h1 className="text-center text-5xl font-amatic font-black">
            <span className="text-primary">Meet our</span> team
          </h1>
          <div className="border-2 border-primary w-10 "></div>
        </div>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 container mx-auto">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="relative bg-white border-gray-50 shadow-lg group profile-card"
          >
            <Image
              src="/images/profile.png"
              alt="team"
              width={700}
              height={700}
              className="absolute top-0 left-0"
            />
            <div className="bg-primary absolute w-full h-full opacity-0 top-0 left-0 group-hover:opacity-90 flex justify-center items-center flex-col text-gray-50 profile-overlay">
              <h1 className="text-4xl font-black font-amatic">
                Prabesh Shrestha
              </h1>
              <p className="font-inter">Marketing manager</p>
              <p className="font-inter">9800000000</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
