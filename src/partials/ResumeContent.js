import Header from "./Header";
import { Link } from "react-router-dom";

function ResumeContent() {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className='bg-gray-900 flex-grow'>
        <section className='relative'>
          {/* Illustration behind content */}
          <div
            className='absolute left-1/2 transform -translate-x-1/2 mb-64 bottom-0 pointer-events-none -z-1'
            aria-hidden='true'
          >
            <svg
              width='1360'
              height='578'
              viewBox='0 0 1360 578'
              xmlns='http://www.w3.org/2000/svg'
            >
              <defs>
                <linearGradient
                  x1='50%'
                  y1='0%'
                  x2='50%'
                  y2='100%'
                  id='illustration-01'
                >
                  <stop stopColor='#FFF' offset='0%' />
                  <stop stopColor='#EAEAEA' offset='77.402%' />
                  <stop stopColor='#DFDFDF' offset='100%' />
                </linearGradient>
              </defs>
              <g fill='url(#illustration-01)' fillRule='evenodd'>
                <circle cx='1200' cy='300' r='128' />
                <circle cx='85' cy='443' r='64' />
                <circle cx='165' cy='70' r='64' />
              </g>
            </svg>
          </div>

          <div className='flex flex-grow max-w-6xl mx-auto px-4 sm:px-6'>
            <div className='flex flex-grow pt-16 pb-12 md:pt-40 md:pb-20'>
              <div className='max-w-3xl mx-auto text-center'>
                {/* 404 content */}
                <h1 className='flex flex-grow text-gray-100 font-semibold h1 mb-4'>
                  My Resume
                </h1>

                <div className='flex-grow bg-transparent'>
                  <div>
                    <span className='text-gray-600'>By </span>
                    <a
                      className='font-medium hover:underline text-gray-100 hover:text-white'
                      href='#author'
                    >
                      Micheal Calendo
                    </a>
                    <span className='text-purple-600 font-semibold'>
                      {" "}
                      · September 12th, 2021
                    </span>
                  </div>

                  <div className='flex flex-grow bg-gray-900'></div>

                  <div className='resume-form-container'></div>
                  <div className='flex flex-col justify-center items-start'>
                    <Link
                      to='https://divoperations.com/resources/resume/sc2.jpg'
                      className='btn-sm text-gray-200 bg-transparent outline-white hover:bg-gray-800 ml-3'
                    >
                      <img
                        className='flex rounded shadow-2xl mxy-auto'
                        src={require("../images/sc2.jpg").default}
                        alt='About us'
                      />
                    </Link>
                  </div>

                  <div className='flex justify-center py-10 items-start'>
                    <Link
                      to='https://divoperations.com/resources/resume/sc3.jpg'
                      className='btn-sm text-gray-200 bg-transparent outline-white hover:bg-gray-800 ml-3'
                    >
                      <img
                        className='rounded shadow-2xl mxy-auto'
                        src={require("../images/sc3.jpg").default}
                        alt='About us'
                      />
                    </Link>
                  </div>

                  <div className='flex justify-center py-10 items-start'>
                    <Link
                      to='https://divoperations.com/resources/resume/sc1.jpg'
                      className='btn-sm text-gray-200 bg-transparent outline-white hover:bg-gray-800 ml-3'
                    >
                      <img
                        className='flex flex-grow rounded shadow-2xl mxy-auto'
                        src={require("../images/sc1.jpg").default}
                        alt='About us'
                      />
                    </Link>
                  </div>

                  <div className='max-w-3xl mx-auto text-center'>
                    {/* 404 content */}
                    <h1 className='flex flex-grow text-gray-100 font-semibold h1 mb-4'>
                      Project Preview
                    </h1>
                  </div>
                </div>

                <div className='file-attatachment-container'></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ResumeContent;
