import React from "react";

function AboutIntro() {
  return (
    <section className='bg-gray-900'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 bg-gray-900'>
        <div className='pt-16 pb-12 md:pt-15 md:pb-10'>
          {/* Section header */}
          <div
            className='hover:scale-105
        transform transition duration-200 ease-out max-w-3xl mx-auto text-center'
          >
            <h1
              className='text-white text-6xl mx-auto md:text-6xl md:mx-10 font-extrabold leading-tighter tracking-tighter'
              data-aos='zoom-y-out'
            >
              <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-800 myx-auto'>
                From a great family...
              </h1>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-transparent myx-auto>raised in the Valley'>
                Raised in the Valley...
              </span>
            </h1>
          </div>
          <div
            className='hover:scale-102
        transform transition duration-300 ease-out'
          >
            <img
              className='hover:scale-105
              transform transition duration-300 ease-out rounded shadow-2xl item-center my-10 py-0 px-12 mxy-auto'
              src={require("../images/sun-fog-43.png").default}
              alt='About us'
            />
          </div>

          <div className='flex justify-center items-start'>
            <img
              className='flex flex-grow rounded shadow-2xl mxy-auto'
              src={require("../images/the-family.jpg").default}
              alt='About us'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;
