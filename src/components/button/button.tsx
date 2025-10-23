import React, { useState } from "react";
import { Link } from "gatsby";
import { DonateHart } from "./../../svg";
import * as s from "./_button.module.scss";

interface Props {
  text: string;
  link: string;
  color?: string;
  hartColor?: string;
  width?: number;
  height?: number;
  hart?: boolean;
  noBorder?: boolean;
  className?: string;
}

function Button(props: Props) {
  const { text, link, color, hartColor, hart, noBorder, className } = props;
  return (
    <Link
      to={`/${link}`}
      className={`${s.button} ${color ? s[color] : ""} ${hart ? s.hart : ""} ${
        noBorder ? s.noBorder : ""
      } ${className ? className : ""}`}
    >
      {hart ? <DonateHart color={hartColor ? hartColor : ""} /> : ""}
      {text}
    </Link>
  );
}

export default Button;
