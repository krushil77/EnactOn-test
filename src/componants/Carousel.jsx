import  { useState } from "react";

const Carousel = () => {
  const images = [
    "/src/assets/229.png", 
    "/src/assets/229.png",
    "/src/assets/230.png",
    "/src/assets/229.png",
    "/src/assets/229.png",
    "/src/assets/230.png",
    "/src/assets/230.png",
    "/src/assets/230.png",
    // Add more image paths as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative   bg-black p-4">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex * 100) / images.length}%)`,
          }}
        >
          {images.map((src, index) => (
            <div key={index} className="flex-none w-1/4 p-2">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-80 object-cover "
              />
            </div>
          ))}
        </div>
      </div>
      <button className="absolute top-1/2 left-0 -ml-16 transform -translate-y-1/2 p-2 text-white ">
        <svg
          width="76"
          height="77"
          viewBox="0 0 76 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handlePrev}
        >
          <path d="M38 19.25L19 38.5L38 57.75" stroke="white" strokeWidth="2" />
          <path d="M57 19.25L38 38.5L57 57.75" stroke="white" strokeWidth="2" />
        </svg>
      </button>
      <button className="absolute top-1/2 right-0 -mr-16 transform -translate-y-1/2 p-2 text-white ">
        <svg
          width="76"
          height="77"
          viewBox="0 0 76 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleNext}
        >
          <path d="M38 19.25L57 38.5L38 57.75" stroke="white" strokeWidth="2" />
          <path d="M19 19.25L38 38.5L19 57.75" stroke="white" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
