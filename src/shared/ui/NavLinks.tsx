import { NavLink } from "react-router";

export default function NavLinks() {
  return (
    <nav>
      <ul className="flex items-center gap-10 font-medium text-neutral-500 max-sm:hidden">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/shop"}>Shop</NavLink>
        </li>
        <li>
          <NavLink to={"/blogs"}>Blogs</NavLink>
        </li>
        <li>
          <NavLink to={"/contact-us"}>Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}
