import React, { useEffect, useState } from 'react';

const Header = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleScroll(e) {
    scrollClass = 'Feed scrolling';
  }

  console.log(offset);
  return (
    <header
      className="text-white body-font fixed z-10 w-full"
      onScroll={(e) => handleScroll(e)}
    >
      <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="https://res.cloudinary.com/dsafp5nqg/image/upload/v1644055068/logo-crop_sbccyp.png"
            alt="logo"
          />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Buy</a>
          <a className="mr-5 hover:text-gray-900">Sell</a>
          <a className="mr-5 hover:text-gray-900">Search</a>
          <a className="mr-5 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
