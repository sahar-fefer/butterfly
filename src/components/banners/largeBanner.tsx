import { Link } from "gatsby";

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
      <img loading="lazy" src={bgImage} alt={bgImageAlt} />
      <h3 className="title">{title}</h3>
      <div className="text">{text}</div>
      <Link to={`/${link}`} className="button">
        {linkText}
      </Link>
    </div>
  );
};
