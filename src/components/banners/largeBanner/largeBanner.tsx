import * as React from "react";
import { Link } from "gatsby";
import "./_large-banner.scss";
import Button from "../../button/button";

interface Props {
  bgImage: string;
  bgImageAlt: string;
  title: string;
  text: string;
  link: string;
  linkText: string;
}
export const LargeBanner = (props: Props) => {
  const { bgImage, bgImageAlt, title, text, link, linkText } = props;
  return (
    <div className="large-banner">
      <img className="bg-image" loading="lazy" src={bgImage} alt={bgImageAlt} />
      <div className="text-wrapper">
        <h3 className="title">{title}</h3>
        <div className="text">{text}</div>
        {/* <Link to={`/${link}`} className="button">
          {linkText}
        </Link> */}
        <Button text={"לתרומה"} link={"donate"} hart={true} />
      </div>
    </div>
  );
};
