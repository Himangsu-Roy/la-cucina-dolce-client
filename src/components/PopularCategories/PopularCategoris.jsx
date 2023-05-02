import React from "react";

const PopularCategoris = () => {
  return (
    <div>
      <div className="mt-[40px] mb-8">
        <h1 className="text-[35px] font-[700] ml-5 mb-2">Popular Categories</h1>
        <div className="flex flex-wrap justify-around">
          <div className="">
            <figure className="my-3 text-center tstbite-card">
              <a
                href="#"
                className="tstbite-animation stretched-link rounded-full"
              >
                <img
                  src="https://fabrx.co/preview/tastebite/assets/images/menus/menu8.png"
                  className="rounded-circle"
                  alt="Menu"
                />
              </a>
              <figcaption className="mt-2">
                <a href="#" className="tstbite-category-title">
                  Pasta
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-4">
            <figure className="my-3 text-center tstbite-card">
              <a
                href="#"
                className="tstbite-animation stretched-link rounded-circle"
              >
                <img
                  src="https://fabrx.co/preview/tastebite/assets/images/menus/menu9.png"
                  className="rounded-circle"
                  alt="Menu"
                />
              </a>
              <figcaption className="mt-2">
                <a href="#" className="tstbite-category-title">
                  Pizza
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-4">
            <figure className="my-3 text-center tstbite-card">
              <a
                href="#"
                className="tstbite-animation stretched-link rounded-circle"
              >
                <img
                  src="https://fabrx.co/preview/tastebite/assets/images/menus/menu10.png"
                  className="rounded-circle"
                  alt="Menu"
                />
              </a>
              <figcaption className="mt-2">
                <a href="#" className="tstbite-category-title">
                  Vegan
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-4">
            <figure className="my-3 text-center tstbite-card">
              <a
                href="#"
                className="tstbite-animation stretched-link rounded-circle"
              >
                <img
                  src="https://fabrx.co/preview/tastebite/assets/images/menus/menu11.png"
                  className="rounded-circle"
                  alt="Menu"
                />
              </a>
              <figcaption className="mt-2">
                <a href="#" className="tstbite-category-title">
                  Desserts
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-4">
            <figure className="my-3 text-center tstbite-card">
              <a
                href="#"
                className="tstbite-animation stretched-link rounded-circle"
              >
                <img
                  src="https://fabrx.co/preview/tastebite/assets/images/menus/menu12.png"
                  className="rounded-circle"
                  alt="Menu"
                />
              </a>
              <figcaption className="mt-2">
                <a href="#" className="tstbite-category-title">
                  Smoothies
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-4">
            <figure className="my-3 text-center tstbite-card">
              <a
                href="#"
                className="tstbite-animation stretched-link rounded-circle"
              >
                <img
                  src="https://fabrx.co/preview/tastebite/assets/images/menus/menu13.png"
                  className="rounded-circle"
                  alt="Menu"
                />
              </a>
              <figcaption className="mt-2">
                <a href="#" className="tstbite-category-title">
                  Breakfast
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategoris;
