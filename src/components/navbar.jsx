import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "black", padding: "4px" }}>
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive
            ? { color: "red", paddingLeft: "4px", paddingRight: "4px" }
            : { color: "white", paddingLeft: "4px", paddingRight: "4px" }
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) =>
          isActive
            ? { color: "red", paddingLeft: "4px", paddingRight: "4px" }
            : { color: "white", paddingLeft: "4px", paddingRight: "4px" }
        }
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
