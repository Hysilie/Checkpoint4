import React from "react";

/* Styles and images */
import flowers from "@assets/others/flowers.svg";

function Error() {
  return (
    <div
      className="flex justify-center items-center h-[80vh]"
      style={{
        backgroundImage: `url('${flowers}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-center bg-main-dark text-main-white p-3 font-serif  text-3xl lg:text-5xl">
        Sorry, this page doest not exist.
      </h2>
    </div>
  );
}

export default Error;
