import { useState } from "react";
import data from "../../assets/JsonData/data.json";
import { useAppSelector } from "../../ReduxStore/hooks";

export default function CarouselComp() {
  const value: any = useAppSelector((state: any) => state.counter.value);

  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = data?.slides;

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log(data);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className="w-[100%] h-[450px]  flex flex-row justify-center gap-4 items-center bg-white">
        <div
          onClick={prevSlide}
          className="w-[45px] h-[45px] flex flex-row justify-center items-center  hover:bg-green-200 hover:cursor-pointer bg-white rounded-full border border-neutral-200"
        >
          <img src="src/assets/imges/LeftNav.png" />
        </div>

        <div className={`flex flex-row items-center gap-4 relative`}>
          <div className="flex flex-col justify-start items-end">
            <img
              className="w-[595px] h-[364px]"
              src={slides[currentIndex].url}
              alt="Fruits"
            />

            <div className="w-[80px] h-[80px] mr-5 mt-16 absolute">
              <div className="w-[80px] h-[80px] bg-amber-500 rounded-full" />
              <div className="w-[45px] h-[34px] left-[18px] top-[11px] absolute flex-col justify-start items-center inline-flex">
                <div className="text-center text-white text-[22px] font-semibold font-primary leading-[38.40px]">
                  {value}%
                </div>
                <div className="text-center text-white text-base font-medium font-primary uppercase leading-none tracking-tight">
                  off
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start gap-4">
            <div className="w-[436px] h-[156px] flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-center text-green-600 text-sm font-normal font-primary uppercase leading-[14px] tracking-tight">
                Welcome to shopery
              </div>
              <div className="w-[436px] text-green-950 text-[56px] font-semibold font-primary leading-[67.20px]">
                Fresh & Healthy
                <br />
                Organic Food
              </div>
            </div>

            <div className="w-[435px] text-neutral-500 text-lg font-normal font-primary leading-[27px]">
              Free shipping on all your orders. We deliver, you enjoy.
            </div>

            <div className="w-[191px] h-[51px] bg-green-600 rounded-[43px] inline-flex px-[40px] items-center pt-[0px] pb-[9px] gap-4">
              <div className="text-white text-base font-semibold font-primary leading-tight">
                Shop now
              </div>
              <img
                className="w-[15px] h-[13px] items-center"
                src="src/assets/imges/RightNav.png"
                alt="Right Nav"
              />
            </div>
          </div>
        </div>

        <div
          onClick={nextSlide}
          className="w-[45px] h-[45px] flex flex-row justify-center items-center  hover:bg-green-200 hover:cursor-pointer bg-white rounded-full border border-neutral-200"
        >
          <img src="src/assets/imges/RightNav.png" />
        </div>
      </div>
      <div className="flex  gap-2 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            {currentIndex === slideIndex ? (
              <div className="w-4 h-2 bg-green-600 rounded-[50px]" />
            ) : (
              <div className="w-2 h-2 bg-stone-300 rounded-full" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
