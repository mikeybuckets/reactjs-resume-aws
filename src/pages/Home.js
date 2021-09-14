import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import Footer from "../partials/Footer";

function Home() {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden bg-gray-900'>
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className='flex-grow'>
        {/*  Page sections */}
        <HeroHome className='relative' />
      </main>

      <Footer />

    </div>
  );
}

export default Home;
