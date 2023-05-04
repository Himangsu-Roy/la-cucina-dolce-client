import React from "react";
import banner from "../../assets/menu1.jpg";

const Banner = () => {
  return (
    <div className=" overflow-hidden mt-0 flex rounded-[22px]">
      <div className="grid grid-cols-12 ">
        <div></div>
        <div className=" md:col-span md:col-start-1 md:col-end-8 col-span-full">
          <img src={banner} className="w-full" alt="Menu" />
        </div>

        <div className=" md:col-span-5 col-span-full bg-[#E4F1FF] ">
          <div className="h-full flex flex-col lg:justify-center md:justify-center ml-[30px] mr-[20px] mt-[30px] pb-[30px] md:mr-[30px] md:ml-[50px] lg:ml-[60px] lg:mr-[30px] ">
            {/* <strong>
              <span className=" ">85% would make this again</span>
            </strong> */}
            <h4 className="font-[700] leading-tight text-[40px]">Mighty Super Cheesecake</h4>
            <p className="text-[19px] mt-[15px]">
              Look no further for a creamy and ultra smooth classNameic
              cheesecake recipe! no one can deny its simple decadence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
