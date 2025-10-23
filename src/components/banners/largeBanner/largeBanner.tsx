import * as React from "react";
import { Link } from "gatsby";
import * as s from "./_large-banner.module.scss";
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
    <div className={s.largeBanner}>
      <img className={s.bgImage} loading="lazy" src={bgImage} alt={bgImageAlt} />
      <div className={s.textWrapper}>
        <h3 className={s.title}>{title}</h3>
        <div className={s.text}>{text}</div>
        {/* <Link to={`/${link}`} className="button">
          {linkText}
        </Link> */}
        <Button text={"לתרומה"} link={"donate"} hart={true} />
      </div>
    </div>
  );
};
