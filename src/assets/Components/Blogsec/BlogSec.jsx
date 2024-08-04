import React from 'react';

const BlogSec = () => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Featured Insights
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Explore our featured technology insights on news boards that are popular among our readers.
            </p>
          </div>
          {/* text - end */}
          <div className="mainblogcont w-full flex justify-center">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8 justify-center w-full px-4 sm:px-8 md:px-12 lg:px-0">
              <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm">
                <a
                  href="#"
                  className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
                >
                  <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 rounded-xl group-hover:scale-110"
                  />
                </a>

                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <span className="block text-m text-gray-400">April 07, 2024 | Views 7777</span>
                  <h2 className="mb-2 text-2xl font-semibold text-gray-800">
                    <a
                      href="#"
                      className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Working with legacy stacks and Queue
                    </a>
                  </h2>

                  <p className="mb-8 text-gray-500">
                    This is a section of some simple filler text, also known as placeholder text. It
                    shares some characteristics of a real written text.
                  </p>
                </div>
              </div>

              {/* Repeat the above block for other articles */}
              <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm">
                <a
                  href="#"
                  className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
                >
                  <img
                    src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover rounded-lg object-center transition duration-200 group-hover:scale-110"
                  />
                </a>

                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <span className="block text-m text-gray-400">April 07, 2024 | Views 7777</span>
                  <h2 className="mb-2 text-lg text-2xl font-semibold text-gray-800">
                    <a
                      href="#"
                      className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      10 best smartphones for devs
                    </a>
                  </h2>

                  <p className="mb-8 text-gray-500">
                    This is a section of some simple filler text, also known as placeholder text. It
                    shares some characteristics of a real written text.
                  </p>
                </div>
              </div>

              <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm">
                <a
                  href="#"
                  className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
                >
                  <img
                    src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="absolute inset-0 h-full w-full object-cover rounded-lg object-center transition duration-200 group-hover:scale-110"
                  />
                </a>

                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <span className="block text-m text-gray-400">April 07, 2024 | Views 7777</span>
                  <h2 className="mb-2 text-lg text-2xl font-semibold text-gray-800">
                    <a
                      href="#"
                      className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      8 High performance Notebooks
                    </a>
                  </h2>

                  <p className="mb-8 text-gray-500">
                    This is a section of some simple filler text, also known as placeholder text. It
                    shares some characteristics of a real written text.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* article - end */}
        </div>
      </div>
    </div>
  );
};

export default BlogSec;
