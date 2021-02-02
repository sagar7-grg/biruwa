import Image from "next/image";
import images from "./data";
import React, { useState, useEffect } from "react";
import FilterButton from "./FilterButton";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Modal from "react-modal";

export default function Gallery() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  const handleOpenModal = async (item) => {
    await setShowModal(true);
    await setName(item);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="gallery pt-24 pb-24">
      <div className="container mx-auto flex justify-center items-center flex-col space-y-10">
        <div className="flex justify-center flex-col">
          <Image
            src="/images/restaurant1.svg"
            alt="chopsticks"
            width={30}
            height={30}
          />

          <div className="flex justify-center items-center space-y-4 flex-col mb-8">
            <h1 className="text-center text-5xl font-amatic font-black text-gray-100">
              <span className="text-primary">Our</span> gallery
            </h1>
            <div className="border-2 border-primary w-10 "></div>
          </div>
        </div>
        <div className="flex w-80 justify-between">
          <FilterButton
            name="all"
            tagActive={tag === "all" ? true : false}
            handleSetTag={setTag}
          />
          <FilterButton
            name="breakfast"
            tagActive={tag === "breakfast" ? true : false}
            handleSetTag={setTag}
          />
          <FilterButton
            name="dinner"
            tagActive={tag === "dinner" ? true : false}
            handleSetTag={setTag}
          />
          <FilterButton
            name="lunch"
            tagActive={tag === "lunch" ? true : false}
            handleSetTag={setTag}
          />
        </div>

        <TransitionGroup className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredImages.map((image) => (
            <CSSTransition key={image.id} timeout={500} classNames="item">
              <Image
                src={`/gallery/${image.name}`}
                alt="all"
                width={500}
                height={350}
                className="transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
                onClick={() => handleOpenModal(image.name)}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>

        <Modal
          isOpen={showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={handleCloseModal}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            },
            content: {
              position: "absolute",
              top: "0",
              left: "0",
              bottom: "0",
              right: "0",
              margin: "auto",
              width: "500px",
              height: "350px",
              border: "none",
            },
          }}
        >
          <Image src={`/gallery/${name}`} layout="fill" />
        </Modal>
      </div>
    </div>
  );
}
