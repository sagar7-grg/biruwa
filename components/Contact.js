import Image from "next/image";
export default function Contact() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto py-24 space-y-8">
        <div className=" flex justify-center flex-col">
          <Image
            src="/images/restaurant.svg"
            alt="chopsticks"
            width={30}
            height={30}
          />
          <div className="flex justify-center items-center flex-col mb-8 space-y-4">
            <h1 className="text-center text-5xl font-amatic font-black">
              <span className="text-primary">Contact</span> us
            </h1>
            <div className="border-2 border-primary w-10 "></div>
          </div>
        </div>
        <div className="flex justify-around items-center">
          <div className="flex justify-center items-center flex-col">
            <div className="text-primary h-10 w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h1 className="font-amatic text-3xl text-gray-800 font-black">
              Address
            </h1>
            <p className="text-gray-500">abc-2,abc</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="text-primary h-10 w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h1 className="font-amatic text-3xl text-gray-800 font-black">
              Contact
            </h1>
            <p className="text-gray-500">9800000000</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="text-primary h-10 w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h1 className="font-amatic text-3xl text-gray-800 font-black">
              Email
            </h1>
            <p className="text-gray-500">abc@gmail.com</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="relative">
            <div className="text-primary absolute top-0 bottom-0 left-3 m-auto z-40 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              placeholder="Name"
              className="pl-12 h-12 rounded-md border-2 w-full border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <div className="text-primary absolute top-0 bottom-0 left-3 m-auto z-40 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <input
              placeholder="Phone"
              className="pl-12 h-12 w-full rounded-md border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <div className="text-primary absolute top-0 bottom-0 left-3 m-auto z-40 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input
              placeholder="Email"
              className="pl-12 h-12 w-full  rounded-md border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
          </div>
          <div className="relative md:col-start-1 md:col-end-4">
            <div className="text-primary absolute top-3 bottom-0 left-3  z-40 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </div>
            <textarea
              placeholder="Message"
              className="pl-12 pt-2 h-32 w-full   rounded-md border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-primary py-2 px-4 text-green-50 rounded-full w-full md:w-auto  hover:opacity-80">
            Send Message
          </button>
        </div>
      </div>
      <div className="h-52">
        <iframe
          title="map"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}
