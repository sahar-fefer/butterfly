import React, { useState, createContext } from "react";
import classNames from "classnames";
import "../styles/styles.css";
import Footer from "./footer/footer";
import Nav from "./nav/nav";

const langContext = createContext<string>("EN");
interface Props {
  children?: JSX.Element[] | JSX.Element;
  needWrapper?: boolean;
}
export const Layout = (props: Props) => {
  const { children, needWrapper = true } = props;
  const [lang, setLang] = useState<string>("EN");

  const changeLang = (e: React.MouseEvent<HTMLElement>) => {
    if (lang === "עב") setLang("EN");
    else setLang("עב");
    console.log(lang);
  };

  return (
    <langContext.Provider value={lang}>
      <div className={`${lang === "EN" ? "heb" : "eng"} layout`}>
        {/* <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&display=swap" rel="stylesheet" /> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&display=swap" rel="preload" as="style" /> */}

        <Head />
        <Nav lang={lang} changeLang={changeLang} />
        <div className={classNames({ "page-wrapper": needWrapper })}>
          {children}
          {!needWrapper && <Footer />}
        </div>
        {needWrapper && <Footer />}
        {/* <div className="page-wrapper">{children}</div> */}
      </div>
    </langContext.Provider>
  );
};
export default Layout;

export const Head = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&display=swap"
        rel="stylesheet"
      ></link>
    </>
  );
};
