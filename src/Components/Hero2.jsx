import React from "react";

const Hero2 = () => {

    // const style = [{
    //     display: 'block',
    //     text-align: 'end',
    //     position: 'relative', 
    //     translate: 'none',
    //     rotate: 'none',
    //     scale: 'none', 'transform', 
    //     translate('0px', '0px'),
    // }]

  return (
    <section className="bg-[#C3E6F9]  relative lg:min-w-[100vw] h-screen lg:overflow-hidden flex panel lg:pl-[104px]">
      <div
        slot="body"
        className="h-full w-full flex flex-col lg:flex-row items-center"
      >
        <div className="flex flex-col h-full lg:flex-row lg:items-center lg:justify-center gap-56 lg:gap-[16vw] w-full lg:w-auto">
          <div className="lg:shrink-0 lg:h-full lg:min-w-[1800px]">
            <div className="mx-auto flex justify-center w-full h-full">
              <div className="max-w-5xl flex flex-col justify-center gap-6 md:gap-12">
                <div className="flex flex-col gap-4">
                  <h2 className="serif-primary md:text-base">
                    <div className="overflow-hidden">
                      <div>Lorem Ipsum Dor</div>
                    </div>
                  </h2>
                  <div className="text-xl lg:text-3xl 2xl:text-4xl leading-8 lg:leading-10 2xl:leading-[3rem] pl-4 md:pl-10 serif-secondary mr-[150px]">
                    <div className="overflow-hidden">
                        <div>nesciunt porro explicabo repellat eius aliquid expedita   </div>
                    </div>
                    <div className="overflow-hidden">
                        <div>nesciunt porro explicabo repellat eius aliquid expedita </div>
                    </div>
                    <div className="overflow-hidden">
                        <div>nesciunt porro explicabo repellat eius aliquid expedita </div>
                    </div>
                    <div className="overflow-hidden">
                        <div>nesciunt porro explicabo repellat eius aliquid expedita  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-end flex flex-col items-end gap-2 md:gap-4">
                <p className="serif-primary md:text-base mr-10 md:mr-36">
                    <div>Lorem ipsum dolor sit </div>
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
