import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

const CardSingle = () => {
  const cardBlogSingle = [
    {
      title: "Design",
      description:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vitae, corrupti modi tempore repellendus fuga dignissimos quisquam minus quam in.",
    },
    {
      title: "Design",
      description:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vitae, corrupti modi tempore repellendus fuga dignissimos quisquam minus quam in.",
    },
    {
      title: "Design",
      description:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vitae, corrupti modi tempore repellendus fuga dignissimos quisquam minus quam in.",
    },
  ];
  return (
    <>
      <div>
        <Splide style={{ padding: 'unset' }}
          options={{
            rewind: true,
            arrows: false,
            autoplay: true,
            pagination: false,
            direction: "ttb",
            height: "170px", // Set a fixed height for the slider
            wheel: true,
            releaseWheel: true,
          }}
          className="w-full flex flex-col gap-10"
          aria-label="My Favorite Images"
        >
          {cardBlogSingle.map(({ title, description }, index) => (
            <SplideSlide key={index}>
              <div className="flex w-full h-full py-8 md:py-16 px-5 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-24">
                  <h3 className="text-xl font-bold"> {title} </h3>
                  <p className="text-sm"> {description} </p>
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
