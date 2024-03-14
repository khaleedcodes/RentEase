import NavLink from "./NavLink";
import { LinkType } from "../types/types";
function NavLinks() {
  const links: LinkType[] = [
    { type: "router", linkName: "Lawyer AI", link: "/about" },
  ];
  return (
    <div className="flex gap-6 max-sm:justify-center">
      {links.map(({ type, linkName, link }, index) => {
        return (
          <NavLink type={type} linkName={linkName} link={link} key={index} />
        );
      })}
    </div>
  );
}

export default NavLinks;
