import { Link } from "react-router-dom";

function NavLink({ page, selected }) {
  const title = page.charAt(0).toUpperCase() + page.slice(1);
  let selectedClass = selected ? "navlink-active" : " ";
  let navClass = "navlink " + selectedClass;

  return (
    <Link to={`/${page}`} className={navClass}>
      {title.toUpperCase()}
      <div className={selected ? "display-indicator" : "no-indicator"}>⎯⎯</div>
    </Link>
  );
}

export default function NavBar({ page }) {
  return (
    <div className="nav">
      <NavLink page="home" selected={page === ""} />
      <NavLink page="about" selected={page === "about"} />
      <NavLink page="list" selected={page === "list"} />
      <NavLink page="gallery" selected={page === "gallery"} />
      <NavLink page="shop" selected={page === "shop"} />
    </div>
  );
}
