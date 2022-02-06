const footer = () => {
  return (
    <footer className="body-font bg-[#2c3944] text-white">
      <div className="container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div className="mx-auto w-72 flex-shrink-0 text-center md:mx-0 md:text-left">
          <a className="title-font flex items-center justify-center font-medium md:justify-start ">
            <span className="ml-3 text-xl"></span>
          </a>
          <p className="text-2xl">eXp Realty in North Texas</p>
          <p className="pt-5">
            Should you require assistance in navigating our website or searching
            for real estate, please contact our offices at 972-945-9999.
          </p>
        </div>
        <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left"></div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <h2 className="title-font mb-3 text-xl font-medium text-white">
            Contact Us
          </h2>
          <nav className="mb-10 list-none leading-8">
            <li>
              <a className="text-white hover:text-gray-200 hover:underline">
                eXp Realty in North Texas
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-200 hover:underline">
                15950 Dallas Pkwy Suite 400
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-200 hover:underline">
                Dallas, TX 75248
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-gray-200 hover:underline"
                href="tel:972-945-9999"
              >
                972-945-9999
              </a>
            </li>
          </nav>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <h2 className="title-font mb-3 text-xl font-medium  text-white">
            Useful Links
          </h2>
          <nav className="mb-10 list-none leading-8">
            <li>
              <a
                className="text-white hover:text-gray-200 hover:underline"
                href="//9starprg.com"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-gray-200 hover:underline"
                href="#"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-gray-200 hover:underline"
                href="#"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-gray-200 hover:underline"
                href="#"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-gray-200 hover:underline"
                href="#"
              >
                Property Details
              </a>
            </li>
          </nav>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <h2 className="title-font mb-3 text-xl font-medium text-white">
            Other Links
          </h2>
          <nav className="mb-10 list-none leading-8">
            <li>
              <a
                className="text-white hover:text-gray-200 hover:underline"
                href="https://lands.9starprg.com/terms.php"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-gray-200 hover:underline"
                href="https://lands.9starprg.com/privacy.php"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-gray-200 hover:underline"
                href="https://lands.9starprg.com/accessibility.php"
              >
                Accessibility
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-gray-200 hover:underline"
                href="https://lands.9starprg.com/fair.php"
              >
                Fair Housing Statement
              </a>
            </li>
          </nav>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto flex flex-col items-center px-5 py-6 sm:flex-row">
          <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            <span className="ml-3 text-xl">eXp Realty</span>
          </a>
          <p className="mt-4 text-sm text-gray-500 sm:ml-6 sm:mt-0">
            <a
              href="https://insiderealestate.com/"
              rel="noopener noreferrer"
              className="ml-1 text-gray-600"
              target="_blank"
            >
              © 2022 Inside Real Estate
            </a>
          </p>
          <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default footer;
