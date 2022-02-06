const featuredItems = () => {
  return (
    <div className="mt-56">
      <section className="body-font text-gray-600">
        <div className="container mx-auto py-24">
          <div className="-m-4 flex flex-wrap">
            <div className="p-4  md:w-1/3">
              <div className="h-full overflow-hidden border-gray-200 border-opacity-60 transition-all hover:-translate-y-[5px] hover:shadow-lg">
                <img
                  className="w-full object-cover object-center md:h-36 lg:h-80"
                  src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
                  alt="blog"
                />
                <div className="border-x border-b p-6">
                  <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                    CATEGORY
                  </h2>
                  <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                    The Catalyzer
                  </h1>
                  <p className="mb-3 leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  {/* <div className="flex flex-wrap items-center ">
                    <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="mr-3 ml-auto inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                      <svg
                        className="mr-1 h-4 w-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="inline-flex items-center text-sm leading-none text-gray-400">
                      <svg
                        className="mr-1 h-4 w-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="p-4  md:w-1/3">
              <div className="h-full overflow-hidden border-gray-200 border-opacity-60 transition-all hover:-translate-y-[5px] hover:shadow-lg">
                <img
                  className="w-full object-cover object-center md:h-36 lg:h-80"
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="blog"
                />
                <div className="border-x border-b p-6">
                  <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                    CATEGORY
                  </h2>
                  <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                    The 400 Blows
                  </h1>
                  <p className="mb-3 leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  {/* <div className="flex flex-wrap items-center">
                    <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="mr-3 ml-auto inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                      <svg
                        className="mr-1 h-4 w-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="inline-flex items-center text-sm leading-none text-gray-400">
                      <svg
                        className="mr-1 h-4 w-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full overflow-hidden border-gray-200 border-opacity-60 transition-all hover:-translate-y-[5px] hover:shadow-lg">
                <img
                  className="w-full object-cover object-center md:h-36 lg:h-80"
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
                  alt="blog"
                />
                <div className="border-x border-b p-6">
                  <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                    CATEGORY
                  </h2>
                  <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                    Shooting Stars
                  </h1>
                  <p className="mb-3 leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  {/* <div className="flex flex-wrap items-center ">
                    <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="mr-3 ml-auto inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                      <svg
                        className="mr-1 h-4 w-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="inline-flex items-center text-sm leading-none text-gray-400">
                      <svg
                        className="mr-1 h-4 w-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default featuredItems;
