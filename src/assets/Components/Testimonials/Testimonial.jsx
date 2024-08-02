import React, { useEffect } from "react";
import KeenSlider from "keen-slider";
import ss from './ss.png'
import "keen-slider/keen-slider.min.css";
import './Testimonial.css'

const TestimonialSlider = () => {
  useEffect(() => {
    const keenSlider = new KeenSlider(
      "#keen-slider",
      {
        loop: true,
        slides: {
          origin: "",
          perView: 2, 
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1500px)": {
            slides: {
              origin: "auto",
              perView: 2, 
              spacing: 32,
            },
          },
        },
        
      },
      []
    );

    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");
    const keenSliderPreviousDesktop = document.getElementById(
      "keen-slider-previous-desktop"
    );
    const keenSliderNextDesktop = document.getElementById("keen-slider-next-desktop");

    keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
    keenSliderNext.addEventListener("click", () => keenSlider.next());
    keenSliderPreviousDesktop.addEventListener("click", () => keenSlider.prev());
    keenSliderNextDesktop.addEventListener("click", () => keenSlider.next());

    return () => {
      keenSlider.destroy();
    };
  }, []);

  return (
    <section className="bg-[#e8f5cd]">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:items-center w-full">
          <div className=" text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-red-500">
                Customer <br/> <span className="text-red-600  text-5xl ">Happiness</span>
            </h2>

            <p className="mt-4 text-gray-700 text-4xl font-bold">
             Guaranteed
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                className="rounded-full border border-black p-3 text-black transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next-desktop"
                className="rounded-full border border-black p-3 text-black transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0 ">
            <div id="keen-slider" className="keen-slider">
              <div className="keen-slider__slide">
                <blockquote
                  className="flex  flex-col justify-between rounded-2xl bg-white p-1 shadow-sm  lg:p-6 w-10/12 h-full"
                >
                  <div>
                    <div className="mt-4">
                      <p className="mt-4 leading-relaxed text-gray-700">
                        No, Rose, they are not breathing. And they have no arms or legs … Where are
                        they? You know what? If we come across somebody with no arms or legs,
                      </p>
                    </div>
                  </div>

              <footer className=" text-sm font-medium text-gray-700 sm:mt-1 flex items-center">
                           <img src={ss} alt="" className="w-10 h-10 rounded-full mr-2"/>
                          <span > <span className="font-bold"> Sagar Kumar </span><br />
                        <span className="text-opacity-70 text-xs">Business</span></span>
                    </footer>    <div className="flex gap-0.5 text-green-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5"
                          fill="gold"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      ))}
                    </div>
                </blockquote>
              </div>

              <div className="keen-slider__slide">
                <blockquote
                  className="flex  flex-col justify-between rounded-2xl bg-white p-1 shadow-sm  lg:p-6 w-10/12 h-full"
                >
                  <div>
                    <div className="mt-4">
                      <p className="mt-4 leading-relaxed text-gray-700">
                        No, Rose, they are not breathing. And they have no arms or legs … Where are
                        they? You know what? If we come across somebody with no arms or legs,ere?
                      </p>
                    </div>
                  </div>

                  <footer className=" text-sm font-medium text-gray-700 sm:mt-1 flex items-center">
                           <img src={ss} alt="" className="w-10 h-10 rounded-full mr-2"/>
                          <span > <span className="font-bold"> Sagar Kumar </span><br />
                        <span className="text-opacity-70 text-xs">Business</span></span>
                    </footer>
                  <div className="flex gap-0.5 text-green-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5"
                          fill="gold"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      ))}
                    </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 lg:hidden flex gap-4 justify-center">
        <button
          aria-label="Previous slide"
          id="keen-slider-previous"
          className="rounded-full border border-black p-3 text-black transition hover:bg-rose-600 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          aria-label="Next slide"
          id="keen-slider-next"
          className="rounded-full border border-black p-3 text-black transition hover:bg-rose-600 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 19.5L15.75 12l-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TestimonialSlider;
