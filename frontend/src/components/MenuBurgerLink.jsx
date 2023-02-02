import React from "react";
import { Link } from "react-router-dom";

function NavigationBarLink({ link, text }) {
  return (
    <li className="hover:scale-110 duration-150">
      <Link to={link}> {text}</Link>
      <hr />
    </li>
  );
}

export default NavigationBarLink;
