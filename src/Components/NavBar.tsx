import { useState } from "react";
type NavItemProps = {
  id: string;
  label: string;
  active: string;
  setActive: (id: string) => void;
};

const NavItem = ({ id, label, active, setActive }: NavItemProps) => {
  const liStyle =
    "list-none text-xl hover:rounded-3xl px-7 py-2 hover:cursor-pointer hover:font-semibold transition-all duration-200 ease-in-out";

  const liActive = "bg-blue text-white font-semibold rounded-3xl";
  const liHover = "hover:bg-blue hover:text-white";

  return (
    <li
      className={`${liStyle} ${active === id ? liActive : liHover}`}
      onClick={() => setActive(id)}
    >
      <a href={`#${id}`}>{label}</a>
    </li>
  )
};

function NavBar() {
  const [active, setActive] = useState("home");

  return (
    <nav>
      <ul className="flex justify-between items-center max-w-7xl mx-auto">
        <NavItem id="home" label="Home" active={active} setActive={setActive} />
        <NavItem id="about" label="About" active={active} setActive={setActive} />

        <img src="/magic-logo2.png" className="w-22" alt="Logo" />

        <NavItem
          id="products"
          label="Products"
          active={active}
          setActive={setActive}
        />
        <NavItem
          id="contact"
          label="Contact"
          active={active}
          setActive={setActive}
        />
      </ul>
    </nav>
  );
}

export default NavBar;
