import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="bg-gradient-to-r from-slate-200 to-sky-200 px-4 py-8 h-dvh flex fixed z-10 bg-light-orange border-r-2 border-black"
      id="menu"
    >
      <div className="flex flex-col h-full justify-between p-6 items-center">
        <div className="z-10 relative text-revival gsap-navbar">
          {/* <button className='menu relative z-50' aria-label='Main Menu' id='menu-icon'>
                    <div className='hamburger transition-700 text-left group' id='id="hamburger-12"'>
                        <span className='line !ml-0 group-hover:!w-6'></span>
                        <span className='line transition-700 '></span>
                        <span className='line2 !ml-0 '></span>
                    </div>
                </button> */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="menu relative z-50' aria-label='Main Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <menu className="pt-5 fixed text-main top-0 left-0 right-0 bottom-0 bg-[#272627] z-50">
                <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="absolute top-3 right-3 md:right-auto md:top-8 md:left-10 bg-dark-gray z-20"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
            <div className="text-center flex flex-col gap-4 justify-between h-full">
                <div className="text-light-beige text-sm md:text-[1.7vh] leading-6 md:leading-[2.7vh]">
                    <div className="serif-primary italic text-revival gasp-menu">
                        <div>Lorem</div>
                    </div>
                    <div className="serif-secondary text-revival gasp-menu">
                        <div>Ipsum</div>
                    </div>
                </div>
            </div>
            <div className="block menu-links">
                <div>
                    <button className="link serif-primary text-light-beige font-extrabold block text-revival gasp-menu text-6xl leading-[80px] md:text-[16vh] md:leading-[16vh]">
                        <div>
                            <span>Lorem</span>
                        </div>
                    </button>
                </div>
                <div>
                    <button className="link serif-primary text-light-beige font-extrabold block text-revival gasp-menu text-6xl leading-[80px] md:text-[16vh] md:leading-[16vh]">
                        <div>
                            <span>Ipsum</span>
                        </div>
                    </button>
                </div>
                <div>
                    <button className="link serif-primary text-light-beige font-extrabold block text-revival gasp-menu text-6xl leading-[80px] md:text-[16vh] md:leading-[16vh]">
                        <div>
                            <span>dor</span>
                        </div>
                    </button>
                </div>
                <div>
                    <button className="link serif-primary text-light-beige font-extrabold block text-revival gasp-menu text-6xl leading-[80px] md:text-[16vh] md:leading-[16vh]">
                        <div>
                            <span>Dot</span>
                        </div>
                    </button>
                </div>
            </div>
            </menu>
          )}
        </div>
        <button className="cursor-pointer transition-500 text-xl text-center text-vertical inline-flex rotate-60 group">
            <div className="text-xl text-center text-vertical">
                <div className="serif-primary italic gsap-navbar text-nowrap text-revival group-hover:tracking-[0.04rem] transition-700">
                    <div>
                        <span>Lorem</span>
                    </div>
                </div>
                <div className="serif-secondary gsap-navbar text-nowrap text-revival">
                    <div>
                        <span>Ipsum</span>
                    </div>
                </div>
            </div>
        </button>
        <div className="text-vertical text-revival gsap-navbar serif-secondary rotate-60 cursor-default">
            <div><span>© 2024</span></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
