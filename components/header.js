/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from "react";

const Header = () => {
  const headerRef = useRef();
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        headerRef.current.classList.add("bg-[#FFFFFF]");
        headerRef.current.classList.add("opacity-[0.8]");
        headerRef.current.classList.add('backdrop-blur-xl');
        headerRef.current.classList.add('backdrop-saturate-150');
        headerRef.current.classList.add("shadow-light");
        headerRef.current.classList.remove("text-white");
        headerRef.current.classList.add("py-2");
      } else {
        headerRef.current.classList.remove("bg-[#FFFFFF]");
        headerRef.current.classList.remove("opacity-[0.8]");
        headerRef.current.classList.remove('backdrop-blur-xl');
        headerRef.current.classList.remove('backdrop-saturate-150');
        headerRef.current.classList.remove("shadow-light");
        headerRef.current.classList.add("text-white");
        headerRef.current.classList.remove("py-2");
      }
    };

    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="body-font fixed z-10 w-full text-white transition duration-[250] ease-in-out py-4"
      onScroll={(e) => handleScroll(e)}
      style={{ "transition": "all 0.3s ease-in-out 0s", "willChange": "transform"}}
      ref={headerRef}
    >
      <div className="mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
          <img
            src="https://res.cloudinary.com/dsafp5nqg/image/upload/v1644055068/logo-crop_sbccyp.png"
            alt="logo"
            className="h-10"
          />
        </a>
        <nav className="flex flex-wrap items-center justify-center text-sm font-semibold md:ml-auto uppercase">
          <a className="mr-16 hover:text-gray-400">Buy</a>
          <a className="mr-16 hover:text-gray-400">Sell</a>
          <a className="mr-16 hover:text-gray-400">Search</a>
          <a className="mr-16 hover:text-gray-400">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
