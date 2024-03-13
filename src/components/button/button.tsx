import React, { useState } from "react";
import { Link } from "gatsby";
import { DonateHart } from "./../../svg";
import "./_button.scss";

interface Props {
  text: string;
  link: string;
  color?: string;
  hartColor?: string;
  width?: number;
  height?: number;
  hart?: boolean;
  noBorder?: boolean;
}

function Button(props: Props) {
  const { text, link, color, hartColor, hart, noBorder } = props;
  return (
    <Link
      to={`/${link}`}
      className={`button ${color ? color : ""} ${hart ? "hart" : ""} ${
        noBorder ? "no-border" : ""
      }`}
    >
      {hart ? <DonateHart color={hartColor ? hartColor : ""} /> : ""}
      {text}
    </Link>
  );
}

export default Button;
