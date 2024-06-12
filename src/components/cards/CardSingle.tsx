import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@assets/styles/splide.css.js';

import {
  aeIcon,
  tailwindIcon,
  jsIcon,
  htmlIcon,
  cssIcon,
  phpIcon,
  tsIcon,
  reactIcon,
  vueIcon,
  nuxtIcon,
  laravelIcon,
  sassIcon,
  codeIgIcon,
  bs4Icon,
  xdIcon,
  figmaIcon,
  psIcon,
  premierIcon,
} from '@components/icons/Icons';

const CardSingle = () => {
  const cardBlogSingle = [
    {
      id: 1,
      title: 'Graphic Design & Video',
      icons: [xdIcon, figmaIcon, psIcon, premierIcon, aeIcon],
      order: 3,
    },
    {
      id: 2,
      title: 'languages & tools',
      icons: [htmlIcon, cssIcon, jsIcon, tsIcon, phpIcon],
      order: 2,
    },
    {
      id: 3,
      title: 'Framework & tools',
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

  const sortedCardBlogSingle = [...cardBlogSingle].sort((a, b) => a.order - b.order);

  const getDynamicStyle = (order: number) => {
    if (order === 1) {
      return { paddingTop: '2.5rem' };
    }
    return {};
  };

  return (
    <>
      <div>
        <Splide
          style={{ padding: 'unset' }}
          options={{
            rewind: true,
            arrows: false,
            autoplay: true,
            pagination: false,
            direction: 'ttb',
            height: '200px', // Set a fixed height for the slider
            autoplaySpeed: 500,
            releaseWheel: true,
          }}
          className="w-full flex flex-col gap-10"
        >
          {sortedCardBlogSingle.map(({ id, title, order, icons }, index) => (
            <SplideSlide data-order={order} key={id}>
              <div
                style={getDynamicStyle(order)}
                className="flex w-full h-full py-8 md:py-16 px-5 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 dark:bg-slate-800 dark:bg-opacity-20 dark:border-gray-500"
              >
                <div className="w-full text-center grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 md:gap-24">
                  <h3 className="text-lg sm:text-xl font-bold flex-grow-0 dark:text-slate-100">
                    {' '}
                    {title}{' '}
                  </h3>

                  <div className="flex flex-wrap gap-5 justify-center md:justify-start items-center">
                    {icons.map((icon, index) => (
                      <img className="w-8 sm:w-12" key={index} src={icon} alt="" />
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
