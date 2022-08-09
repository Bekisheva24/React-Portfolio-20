// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import "./navbar.scss";
// import menuIcon from "../../images/menu.svg";

// function Navbar() {

	//fixed Navbar
	// window.addEventListener("scroll", function(){
	// 	const navbar = document.querySelector(".navbar");
	// 	navbar.classList.toggle("active", window.scrollY > 0)
	// });
	
//   const [menuActive, setMenuActive] = useState(false);

//   const showMenu = () => {
//     setMenuActive(!menuActive);
//   };

//   const menuItems = [
//     {
//       id: 1,
//       menu: "home",
//       link: "/",
//     },
//     {
//       id: 2,
//       menu: "about",
//       link: "about",
//     },
//     {
//       id: 3,
//       menu: "services",
//       link: "services",
//     },
//     {
//       id: 4,
//       menu: "contacts",
//       link: "contacts",
//     },
//   ];
//   return (
//     <div className="navbar">
//       <div className="container navbar__container">
//         <Link to="/" className="navbar__logo">
//           Nurgul Bekisheva
//         </Link>
//         <button onClick={showMenu} className="navbar__toggle">
//           <img src={menuIcon} alt="icon" />
//         </button>

//         <div
//           className={
//             menuActive ? "navbar__menu navbar__menu--show" : "navbar__menu"
//           }
//         >
//           {menuItems.map((menuItem) => {
//             return (
//               <NavLink
//                 onClick={showMenu}
//                 to={menuItem.link}
//                 className="navbar__menu-link"
//                 key={menuItem.id}
//               >
//                 {menuItem.menu}
//               </NavLink>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
