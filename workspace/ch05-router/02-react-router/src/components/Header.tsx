import { Link, NavLink } from "react-router";

function Header() {
  return (
    <>
      {/* <header>
        <h1>리액트 라우터 - 02 react-router 사용</h1>
        <NavLink className="menu-dark" to="/home">home</NavLink>
        <br/>
        <NavLink className="menu" to="/page1">page1</NavLink>
        <br/>
        <NavLink className="menu" to="/page2">page2</NavLink>
      </header> */}
      <header>
        <h1>리액트 라우터 - 02 react-router 사용</h1>
        <NavLink
          className={({ isActive }) => (isActive ? "menu-dark" : "menu")}
          to="/home"
        >
          home
        </NavLink>
        <br />
        <NavLink
          className={({ isActive }) => (isActive ? "menu-dark" : "menu")}
          to="/page1"
        >
          page1
        </NavLink>
        <br />
        <NavLink
          className={({ isActive }) => (isActive ? "menu-dark" : "menu")}
          to="/page2"
        >
          page2
        </NavLink>
      </header>
    </>
  );
}

export default Header;