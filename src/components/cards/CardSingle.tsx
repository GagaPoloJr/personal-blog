import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

import jsIcon from "../../../public/icon/js.svg";
import htmlIcon from "../../../public/icon/html.svg";
import cssIcon from "../../../public/icon/css.svg";
import phpIcon from "../../../public/icon/php.svg";
import tsIcon from "../../../public/icon/ts.svg";

import reactIcon from "../../../public/icon/react.svg";
import vueIcon from "../../../public/icon/vue.svg";
import nuxtIcon from "../../../public/icon/nuxt.svg";
import laravelIcon from "../../../public/icon/laravel.svg";
import sassIcon from "../../../public/icon/sass.svg";
import codeIgIcon from "../../../public/icon/ci.svg";

import tailwindIcon from "../../../public/icon/tailwind.svg";
import bs4Icon from "../../../public/icon/b4.svg";

import xdIcon from "../../../public/icon/xd.svg";
import figmaIcon from "../../../public/icon/figma.svg";
import psIcon from "../../../public/icon/ps.svg";

import aeIcon from "../../../public/icon/ae.svg";
import premierIcon from "../../../public/icon/premier.svg";
import { useEffect, useState } from "react";
const CardSingle = () => {
  const cardBlogSingle = [
    {
      title: "Graphic Design & Video",
      description:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vitae, corrupti modi tempore repellendus fuga dignissimos quisquam minus quam in.",
      icons: [xdIcon, figmaIcon, psIcon, premierIcon, aeIcon],
      order: 3,
    },
    {
      title: "languages & its counterparts",
      description:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vitae, corrupti modi tempore repellendus fuga dignissimos quisquam minus quam in.",
      icons: [htmlIcon, cssIcon, jsIcon, tsIcon, phpIcon],
      order: 2,
    },
    {
      title: "Framework & libraries",
      description:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vitae, corrupti modi tempore repellendus fuga dignissimos quisquam minus quam in.",
      icons: [
        vueIcon,
        nuxtIcon,
        reactIcon,
        tailwindIcon,
        bs4Icon,
        laravelIcon,
        codeIgIcon,
        sassIcon,
      ],
      order: 1,
    },
  ];

  const sortedCardBlogSingle = [...cardBlogSingle].sort(
    (a, b) => a.order - b.order
  );

  const getDynamicStyle = (order: number) => {
    if (order === 1) {
      return { paddingTop: "2.5rem" };
    }
    return {};
  };

  return (
    <>
      <div>
        <Splide
          style={{ padding: "unset" }}
          options={{
            rewind: true,
            arrows: false,
            autoplay: true,
            pagination: false,
            direction: "ttb",
            height: "200px", // Set a fixed height for the slider
            autoplaySpeed: 500,
            releaseWheel: true,
          }}
          className="w-full flex flex-col gap-10"
        >
          {sortedCardBlogSingle.map(({ title, order, icons }, index) => (
            <SplideSlide data-order={order} key={index}>
              <div
                style={getDynamicStyle(order)}
                className="flex w-full h-full py-8 md:py-16 px-5 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100"
              >
                <div className="w-full text-center grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 md:gap-24">
                  <h3 className="text-lg sm:text-xl font-bold flex-grow-0"> {title} </h3>

                  <div className="flex flex-wrap gap-5 justify-center md:justify-start items-center">
                    {icons.map((icon, index) => (
                      <img
                        className="w-8 sm:w-12"
                        key={index}
                        src={icon}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default CardSingle;
