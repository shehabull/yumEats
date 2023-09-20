import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
  const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    const isFristSlide = currentIndex === 0;
    const newInex = isFristSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newInex);
  };
  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newInex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newInex);
  };

  const moveToNextSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1520px] h-[500px] w-full py-4 relative mx-auto group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-orange-700 cursor-pointer text-white p-2">
        <BsChevronCompactLeft onClick={prevSlider} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-orange-700 cursor-pointer text-white p-2">
        <BsChevronCompactRight onClick={nextSlider} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {sliders.map((sliderItems, sliderIndex) => (
          <div
            className="text-2xl cursor-pointer"
            key={sliderIndex}
            onClick={() => moveToNextSlide(sliderIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
