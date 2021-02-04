import Image from "next/image";
export default function Footer() {
  return (
    <div className="bg-header-image h-auto relative py-16 space-y-16">
      <div className="absolute left-0 bottom-0 hidden xl:block">
        <Image
          src="/images/footer1.png"
          alt="footer"
          width={500}
          height={500}
        />
      </div>

      <div className="absolute right-0 bottom-0 hidden xl:block">
        <Image
          src="/images/footer2.png"
          alt="footer"
          width={500}
          height={500}
        />
      </div>
      <div className="container mx-auto max-w-4xl flex justify-center items-center flex-col space-y-5">
        <h1 className="text-4xl font-medium text-gray-100">LOGO</h1>
        <p className="text-gray-100 text-center">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type a nd
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="container mx-auto flex justify-center  items-center flex-col space-y-10 sm:flex-row sm:justify-around ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-amatic font-bold text-4xl text-gray-100 mb-3">
            Social links
          </h1>
          <Image src="/images/facebook.svg" width={30} height={30} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-amatic font-bold text-4xl text-gray-100 mb-3">
            open time
          </h1>
          <p className="text-gray-100 ">Monday 8am-2am</p>
          <p className="text-gray-100 ">Monday 8am-2am</p>
          <p className="text-gray-100 ">Monday 8am-2am</p>
          <p className="text-gray-100 ">Monday 8am-2am</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-amatic font-bold text-4xl text-gray-100 mb-3">
            contact
          </h1>
          <p className="text-gray-100 ">address abc-2,abc</p>
          <p className="text-gray-100 ">mobile 9800000000</p>
          <p className="text-gray-100 ">email abc@gmail.com</p>
        </div>
      </div>
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-green-100">copyright@sagargurung</p>
      </div>
    </div>
  );
}
