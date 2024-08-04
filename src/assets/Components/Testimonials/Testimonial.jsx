import React, { useEffect } from 'react';
import KeenSlider from 'keen-slider';
import ss from './ss.png';
import './Testimonial.css'

import 'keen-slider/keen-slider.min.css';

const TestimonialSlider = () => {
  useEffect(() => {
    const keenSlider = new KeenSlider('#keen-slider', {
      loop: true,
      slides: {
        perView: 2,
        spacing: 16,
      },
      breakpoints: {
        '(max-width: 768px)': {
          slides: {
            perView: 1,
            spacing: 16,
          },
        },
        '(max-width: 640px)': {
          slides: {
            perView: 1,
            spacing: 0, // remove spacing on very small screens to avoid overflow
          },
        },
      },
    });
    

    document.getElementById('keen-slider-previous-desktop').addEventListener('click', () => keenSlider.prev());
    document.getElementById('keen-slider-next-desktop').addEventListener('click', () => keenSlider.next());

    return () => keenSlider.destroy();
  }, []);

  return (
    <section className="bg-[#e8f5cd]">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center sm:text-left">
            <h2 className=" text-3xl font-bold tracking-tight text-red-400 sm:text-4xl">
              Customer <br /> <span className='text-red-600 font-bold text-5xl'>Happiness</span>
            </h2>
            <p className="testisub mt-4 text-gray-700 text-6xl font-semibold md:text-xl">
              Guaranteed
            </p>
            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
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
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
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

          <div className="-mx-6 lg:col-span-2 lg:mx-0 w-full">
            <div id="keen-slider" className="keen-slider">
              {/* Slide 1 */}
              <div className="keen-slider__slide w-full md:w-3/4">
                <blockquote className="flex h-full flex-col justify-between  w-full md:w-11/12 md:ml-6 bg-white shadow-sm sm:p-8 lg:p-12 rounded-xl">
                  <div>
                    <p className="leading-relaxed text-gray-700">
                      No, Rose, they are not breathing. And they have no arms or legs … Where are
                      they? You know what? If we come across somebody with no arms or legs, 
                    </p>
                  </div>
                  <footer className="mt-4 flex items-center gap-4 text-sm font-medium text-gray-700 sm:mt-6">
                    <img
                      src={ss}
                      alt="Profile"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      &mdash; Sagar Kumar
                      <div className="flex gap-0.5 mt-1 text-yellow-500">
                        {[...Array(5)].map((_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 3.5l2.39 4.84 5.34.78-3.86 3.76.91 5.32L12 15.77l-4.78 2.51.91-5.32-3.86-3.76 5.34-.78L12 3.5z"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
              {/* Slide 2 */}
              <div className="keen-slider__slide w-full md:w-3/4">
                <blockquote className="flex h-full flex-col justify-between w-full md:w-11/12 bg-white shadow-sm sm:p-8 lg:p-12 rounded-xl">
                  <div>
                    <p className="leading-relaxed text-gray-700">
                      We strive to provide the best customer service experience possible. Our team is
                      always ready to help with a smile on their faces.
                    </p>
                  </div>
                  <footer className="mt-4 flex items-center gap-4 text-sm font-medium text-gray-700 sm:mt-6">
                    <img
                      src={ss}
                      alt="Profile"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      &mdash; Sagar Kumar
                      <div className="flex gap-0.5 mt-1 text-yellow-500">
                        {[...Array(5)].map((_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 3.5l2.39 4.84 5.34.78-3.86 3.76.91 5.32L12 15.77l-4.78 2.51.91-5.32-3.86-3.76 5.34-.78L12 3.5z"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
