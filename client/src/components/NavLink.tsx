import type { NavLinkProp } from "../types/types";
import { Link } from "react-router-dom";

function NavLink({ type, linkName, link }: NavLinkProp) {
  return (
    <div className="">
      {type === "anchor" ? (
        <a
          href={link}
          className="hover:text-primary-green transition-all duration-300"
        >
          {linkName}
        </a>
      ) : (
        <Link
          to={link}
          className="hover:text-first-primary transition-all duration-300"
        >
          {linkName}
        </Link>
      )}
    </div>
  );
}

export default NavLink;
