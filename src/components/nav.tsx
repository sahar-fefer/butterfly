import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { DonateHart, Logo } from "../svg";

interface Props {
  lang: String;
  changeLang: Function;
}

function Nav(props: Props) {
  const { lang, changeLang } = props;
  let getDataFromLocalStorage: boolean | undefined;
  if (
    typeof localStorage !== "undefined" &&
    localStorage.getItem("isNavOpen")
  ) {
    getDataFromLocalStorage = JSON.parse(
      localStorage.getItem("isNavOpen") || ""
    );
  }
  const [isNavOpen, setIsNavOpen] = useState<boolean>(
    getDataFromLocalStorage ? true : false
  );

  useEffect(() => {
    // setIsNavOpen(JSON.parse(localStorage.getItem('isNavOpen') || ""))
    if (isNavOpen) {
      setTimeout(() => {
        setIsNavOpen(false);
        localStorage.setItem("isNavOpen", JSON.stringify(false));
      }, 400);
    }
  }, []);

  useEffect(() => {
    if (isNavOpen) localStorage.setItem("isNavOpen", JSON.stringify(isNavOpen));
  }, [isNavOpen]);

  const toggleNav = (e: React.MouseEvent<HTMLElement>) => {
    setIsNavOpen(!isNavOpen);
    e.preventDefault();
  };

  const onLogoClick = () => {
    localStorage.setItem("isNavOpen", JSON.stringify(false));
  };

  return (
    <nav className={isNavOpen ? "open" : "close"}>
      <div className="right">
        <button
          className="burger-bar"
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            toggleNav(e);
          }}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
        <div className="separator right" />
        <Link className="logo" to="/" onClick={onLogoClick}>
          <Logo />
        </Link>
        <div className="separator left" />
        <button
          className="background-side-nav"
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            toggleNav(e);
          }}
        ></button>
        <div className="links">
          <Link
            to="/omers-butterflies"
            partiallyActive={true}
            activeClassName="active"
          >
            הפרפרים של עומר
          </Link>
          <Link
            to="/omers-house"
            partiallyActive={true}
            activeClassName="active"
          >
            הבית של עומר
          </Link>
          <Link to="/bracelets" partiallyActive={true} activeClassName="active">
            צמידים
          </Link>
          <Link
            to="/donate"
            className={"donate"}
            partiallyActive={true}
            activeClassName="active"
          >
            מתנדבים ותורמים
          </Link>
          <Link to="/about" partiallyActive={true} activeClassName="active">
            אודות
          </Link>
          <Link to="/contact" partiallyActive={true} activeClassName="active">
            צור קשר
          </Link>
          <button
            className="language"
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              changeLang();
            }}
          >
            {lang}
          </button>
        </div>
      </div>
      <div className="left">
        <button
          className="language"
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            changeLang();
          }}
        >
          {lang}
        </button>
        <Link to="/donate" className="donate-button">
          <DonateHart color="white" />
          לתרומה
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
