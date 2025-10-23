import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { DonateHart, Logo } from "../../svg";
import Button from "../button/button";
import * as s from "./_nav.module.scss";

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
    <nav className={isNavOpen ? s.open : ""}>
      <div className={s.right}>
        <button
          className={s.burgerBar}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            toggleNav(e);
          }}
        >
          <div className={s.line}></div>
          <div className={s.line}></div>
          <div className={s.line}></div>
        </button>
        <div className={`${s.separator} ${s.right}`} />
        <Link className={s.logo} to="/" onClick={onLogoClick}>
          <Logo />
        </Link>
        <div className={`${s.separator} ${s.left}`} />
        <button
          className={s.backgroundSideNav}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            toggleNav(e);
          }}
        ></button>
        <div className={s.links}>
          <Link
            to="/omers-butterflies"
            partiallyActive={true}
            activeClassName={s.active}
          >
            הפרפרים של עומר
          </Link>
          <Link
            to="/omers-house"
            partiallyActive={true}
            activeClassName={s.active}
          >
            הבית של עומר
          </Link>
          <Link
            to="/bracelets"
            partiallyActive={true}
            activeClassName={s.active}
          >
            צמידים
          </Link>
          <Link
            to="/donate"
            className={s.donate}
            partiallyActive={true}
            activeClassName={s.active}
          >
            מתנדבים ותורמים
          </Link>
          <Link to="/about" partiallyActive={true} activeClassName={s.active}>
            אודות
          </Link>
          <Link to="/contact" partiallyActive={true} activeClassName={s.active}>
            צור קשר
          </Link>
          <button
            className={s.language}
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              changeLang();
            }}
          >
            {lang}
          </button>
        </div>
      </div>
      <div className={s.left}>
        <button
          className={s.language}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            changeLang();
          }}
        >
          {lang}
        </button>
        <Button
          text={"לתרומה"}
          link={"donate"}
          hart={true}
          className={s.donationButton}
          // color="white"
          // hartColor="black"
        />
        {/* <Link to="/donate" className="donate-button">
          <DonateHart color="white" />
          לתרומה
        </Link> */}
      </div>
    </nav>
  );
}

export default Nav;
