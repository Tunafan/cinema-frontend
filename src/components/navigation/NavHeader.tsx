import { NavLink } from "react-router-dom";
// import AuthStatus from "./security/AuthStatus";
// import { useAuth } from "./security/AuthProvider";

export default function NavHeader() {
  //   const auth = useAuth();
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cinemas">Cinemas</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        {/* {auth.isLoggedIn() && ( */}
        <li>
          <NavLink to="/add">Edit users</NavLink>
        </li>
        {/* )} */}
        {/* <AuthStatus /> */}
      </ul>
    </nav>
  );
}
