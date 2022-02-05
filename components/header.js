/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from "react";

const Header = () => {
  const headerRef = useRef();
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        headerRef.current.classList.add("bg-white");
        headerRef.current.classList.add("shadow-light");
        headerRef.current.classList.remove("text-white");
      } else {
        headerRef.current.classList.remove("bg-white");
        headerRef.current.classList.remove("shadow-light");
        headerRef.current.classList.add("text-white");
      }
    };

    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="body-font fixed z-10 w-full text-white transition"
      onScroll={(e) => handleScroll(e)}
      ref={headerRef}
    >
      <div className="mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
          <img
            src="https://res.cloudinary.com/dsafp5nqg/image/upload/v1644055068/logo-crop_sbccyp.png"
            alt="logo"
          />
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
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
