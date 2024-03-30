import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#C3E6F9] relative lg:min-w-[100vw] h-screen lg:overflow-hidden flex panel lg:pl-[104px]">
      <div slot="hero" className="h-full w-full flex items-center">
        <div className="mx-auto flex items-center justify-center p-4 md:p-12 lg:p-20 mt-4 md:mt-0">
          <div className="flex flex-col gap-16 lg:gap-20">
            <div className="serif-primary font-light text-center text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] 2xl:text-[2rem] leading-[1.3] md:leading-[1.5rem] lg:leading-[1.8rem] 2xl:leading-[2rem] lg:-mb-10">
              <div className="overflow-hidden">
                <div className="display: block; text-align: center; position: relative;">
                  <div className="display: block; text-align: center; position: relative; translate: none; rotate: none; scale: none; transform: translate(0px, 0px);">
                    Lorem ipsum dolor
                  </div>
                </div>
              </div>
            </div>
            <h1
              className="text-[#DB5C20] block serif-primary italic font-bold text-orange text-7xl md:text-[12vh] lg:text-[14vh] xl:text-[19vh] 2xl:text-[24vh] w-max mx-auto text-center"
              id="gsap-landing-hero-title"
            >
              <div className="overflow-hidden px-2">
                <div>Lorem</div>
              </div>
              <div className="overflow-hidden px-2">
                <div>Ipsum</div>
              </div>
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-2 md:justify-between serif-primary font-light text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] 2xl:text-[2rem] leading-[1.3] md:leading-[1.5rem] lg:leading-[1.8rem] 2xl:leading-[2rem] lg:-mt-14">
              <div id="gsap-landing-hero-experties">
                <div className="overflow-hidden pb-1">
                  <div>Lorem</div>
                </div>
              </div>
              <div id="gsap-landing-hero-experties">
                <div className="overflow-hidden pb-1">
                  <div>Ipsum</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="absolute ml-[40%] bottom-24 md:bottom-14 scale-75 md:scale-100">
        <div className="flex items-center font-light gap-3 serif-secondary gasp-landing-see-more text-revival">
          <div className="scroll-down-container">
            <div className="scroller"></div>
          </div>
          <div>scroll to see more</div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
