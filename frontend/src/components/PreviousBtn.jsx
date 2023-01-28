import React from "react";
import { useNavigate } from "react-router-dom";
import previousBtn from "../assets/icons/FramereturnArrow.svg";

function PreviousBtn() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="absolute lg:p-6"
    >
      <img src={previousBtn} alt="Return button" />
    </button>
  );
}

export default PreviousBtn;
