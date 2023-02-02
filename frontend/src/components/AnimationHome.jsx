import React from "react";

/* Flowers */
import flower1 from "../assets/others/flowerBanner1.svg";
import flower2 from "../assets/others/flowerbanner2.svg";

function AnimationHome() {
  return (
    /* Love is the flower you’ve got to let grow.” */
    <div className="mt-8 mb-6 relative  font-serif font-thin flex overflow-x-hidden border-b-[2px] border-t-[2px] border-main-dark">
      <div className=" animate-marquee whitespace-nowrap">
        <img
          src={flower1}
          className="inline text-2xl mx-4"
          alt="Home Banner with Quote"
        />
        <span className="text-2xl mx-2">
          Love is the flower you’ve got to let grow.
        </span>

        <img
          src={flower2}
          className="inline text-2xl mx-4"
          alt="Home Banner with Quote"
        />
        <span className="text-2xl mx-2">
          If we could see the miracle of a single flower clearly our whole life
          would change
        </span>
      </div>

      <div className="absolute top-0  animate-marquee2 whitespace-nowrap">
        <img
          src={flower1}
          className="inline text-2xl mx-4"
          alt="Home Banner with Quote"
        />
        <span className="text-2xl mx-2">
          Love is the flower you’ve got to let grow.{" "}
        </span>

        <img
          src={flower2}
          className="inline text-2xl mx-4"
          alt="Home Banner with Quote"
        />
        <span className="text-2xl mx-2">
          If we could see the miracle of a single flower clearly our whole life
          would change
        </span>
      </div>
    </div>
  );
}

export default AnimationHome;
