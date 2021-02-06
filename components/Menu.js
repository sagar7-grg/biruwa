import Image from "next/image";
export default function Menu() {
  return (
    <div id="menu" className="menu pt-24 pb-24">
      <div className=" container mx-auto">
        <div className="flex justify-center flex-col">
          <Image
            src="/images/restaurant1.svg"
            alt="chopsticks"
            width={30}
            height={30}
          />

          <div className="flex justify-center items-center space-y-4 flex-col mb-8">
            <h1 className="text-center text-5xl font-amatic font-black text-gray-100">
              <span className="text-primary">Our</span> Menu
            </h1>
            <div className="border-2 border-primary w-10 "></div>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-14">
          {[1, 2, 3, 4].map((item) => (
            <div
              className="flex space-x-3 justify-center items-center cursor-pointer menu-list"
              key={item}
            >
              <img
                src="/images/breakfast.svg"
                alt="breakfast"
                width={40}
                height={40}
                className="menu-icons"
              />
              <h1 className="font-amatic font-black text-4xl text-gray-50 items hidden md:block">
                Breakfast
              </h1>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 mt-20 ">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              className="flex space-x-8 flex-col justify-center items-center md:flex-row md:flex-around"
              key={item}
            >
              <div className="flex-none">
                <Image
                  src="/images/breakfast.png"
                  alt="breakfast"
                  width={120}
                  height={120}
                />
              </div>
              <div className="flex-auto space-y-4">
                <div className="flex justify-between border-gray-100 border-b-2 pb-4 border-dashed">
                  <h1 className="font-black font-amatic text-3xl text-gray-100">
                    breakfast complete
                  </h1>
                  <h1 className="font-black font-amatic text-3xl text-primary">
                    Rs.200
                  </h1>
                </div>
                <p className="text-gray-100 text-sm font-inter">
                  Salmon fillet in a rich red curry with coconut milk, sweet
                  basil leaves ,pea aubergine, and kaffir lime leaves
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
