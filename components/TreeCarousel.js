import React from "react";
import { useEffect, useRef, useCallback, useState } from "react";
import TreeCard from "../components/TreeCard";
import PrevButton from "../components/assets/PrevButton";
import NextButton from "../components/assets/NextButton";
// import useWindowDimensions from "../helpers/dimensions";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, {
  Navigation,
  EffectFade,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { trees } from "../helpers/utils";

// SwiperCore.use([Navigation, Pagination]);

function TreeCarousel({ treeList }) {
  const size = useWindowSize();
  const swiper = useSwiper();

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const chunk = (arr, chunkSize) => {
    if (chunkSize <= 0) throw "Invalid chunk size";
    var R = [];
    for (var i = 0, len = arr.length; i < len; i += chunkSize)
      R.push(arr.slice(i, i + chunkSize));
    return R;
  };

  const [chunkedTrees, setChunkedTrees] = useState([]);

  const [smallPhoneScreen, setSmallPhoneScreen] = useState(false);

  useEffect(() => {
    if (size.width > 865) {
      setChunkedTrees(chunk(trees, 3));
    } else if (size.width > 620) {
      setChunkedTrees(chunk(trees, 2));
    } else {
      setChunkedTrees(chunk(trees, 1));
    }

    if (size.width < 354) {
      setSmallPhoneScreen(true);
    } else {
      setSmallPhoneScreen(false);
    }
  }, [size]);

  return (
    <div className=" flex justify-center overflow-hidden mx-4">
      <button ref={navigationPrevRef} className=" z-20">
        <PrevButton width={24} height={24}></PrevButton>
      </button>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
          disabledClass: "btn-disabled",
        }}
        className="justify-center"
      >
        <div className="flex">
          {chunkedTrees.map((trees, i) => (
            <SwiperSlide key={i} className="flex items-center">
              <div className="flex items-center justify-center py-16 space-x-4 px-4 mx-auto">
                {trees.map((tree) => (
                  <TreeCard
                    key={tree.id}
                    img={tree.img}
                    treename={tree.treename}
                    className="object-scale-down max-h-40"
                    outerClassName={`${
                      smallPhoneScreen ? "w-44" : "w-60 max-h-60 lg:w-72"
                    } `}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <button ref={navigationNextRef} className=" z-20">
        <NextButton width={24} height={24}></NextButton>
      </button>
    </div>
  );
}

export default TreeCarousel;

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
