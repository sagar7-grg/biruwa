import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import Image from "next/image";

export default function Featured() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <div className="bg-header-image bg-auto pt-24 pb-24">
      <div className="flex justify-center flex-col container mx-auto">
        <Image
          src="/images/restaurant1.svg"
          alt="chopsticks"
          width={30}
          height={30}
        />

        <div className="flex justify-center items-center space-y-4 flex-col mb-8">
          <h1 className="text-center text-5xl font-amatic font-black text-gray-100">
            <span className="text-primary">Our Popular</span> Dishes
          </h1>
          <div className="border-2 border-primary w-10 "></div>
        </div>
        <Carousel itemsToShow={4} breakPoints={breakPoints}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div className="flex justify-center items-center flex-col space-y-4">
              <Image src="/images/breakfast.png" width={200} height={200} />
              <h1 className="text-3xl font-amatic font-black text-gray-100">
                Breakfast Complete
              </h1>
              <h1 className="text-4xl font-amatic font-black text-primary">
                Rs.200
              </h1>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
