import React from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const SuperDelicious = () => {
  return (
    <div className="mt-7 ">
      <h1 className="text-[32px] font-[700] ml-5">Super Delicious</h1>
      <div className="grid lg:grid-cols-9 md:grid-cols-12 justify-items-center">
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-full relative">
          <img
            className="w-full "
            src="https://fabrx.co/preview/tastebite/assets/images/menus/menu2.jpg"
            alt={""}
          />
          <Rating
            className="mt-2"
            style={{ maxWidth: 150 }}
            value={Rating}
            readOnly
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ">
              {/* <Rating style={{ maxWidth: 150 }} value={Rating} readOnly /> */}
              Spinach and Cheese Pasta
            </div>
          </div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-full relative">
          <img
            className="w-full "
            src="https://fabrx.co/preview/tastebite/assets/images/menus/menu3.jpg"
            alt={""}
          />
          <Rating
            className="mt-2"
            style={{ maxWidth: 150 }}
            value={Rating}
            readOnly
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ">Fancy Glazed Dounts</div>
          </div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-full relative">
          <img
            className="w-full "
            src="https://fabrx.co/preview/tastebite/assets/images/menus/menu4.jpg"
            alt={""}
          />
          <Rating
            className="mt-2"
            style={{ maxWidth: 150 }}
            value={Rating}
            readOnly
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ">
              Mighty Cheesy Breakfast Burger
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperDelicious;
