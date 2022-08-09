import { useState } from "react"; // add
import { Link, NavLink } from "react-router-dom"; // add
import menuIcon from "../../images/menu.svg";
import { useRef, useEffect } from "react";
import { init } from "ityped";

import "./home.scss";

function Home() {
  
	//fixed Navbar
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active", window.scrollY > 0);
  });

  const [menuActive, setMenuActive] = useState(false);

  const showMenu = () => {
    setMenuActive(!menuActive);
  };

  const animatedTextRef = useRef();

  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      strings: ["Frontend React Developer"],
      backDelay: 1500,
      backSpeed: 60,
    });
  }, []);

  const menuItems = [
    {
      id: 1,
      menu: "home",
      link: "/",
    },
    {
      id: 2,
      menu: "about",
      link: "about",
    },
    {
      id: 3,
      menu: "services",
      link: "services",
    },
    {
      id: 4,
      menu: "contacts",
      link: "contacts",
    },
  ];

  return (
    <div className="home" id="home">
      <div className="home__bg">
        <div className="navbar">
          <div className="container navbar__container">
            <Link to="/" className="navbar__logo">
              Nurgul Bekisheva
            </Link>
            <button onClick={showMenu} className="navbar__toggle">
              <img src={menuIcon} alt="icon" />
            </button>

            <div
              className={
                menuActive ? "navbar__menu navbar__menu--show" : "navbar__menu"
              }
            >
              {menuItems.map((menuItem) => {
                return (
                  <NavLink
                    onClick={showMenu}
                    to={menuItem.link}
                    className="navbar__menu-link"
                    key={menuItem.id}
                  >
                    {menuItem.menu}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>

        <div className="container home__container">
          <div className="home__content">
            <h1 className="home__text">Welcome to my World</h1>
            <h2 className="home__text1">Hi, I'm Nurgul</h2>
            <h3 className="home__text2">
              <span ref={animatedTextRef}></span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
