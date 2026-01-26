import { Menu, X } from "lucide-react";
import { useState } from "react";
type NavItemProps = {
  id: string;
  label: string;
  active: string;
  setActive: (id: string) => void;
  onClick?: () => void;
};

const NavItem = ({ id, label, active, setActive, onClick }: NavItemProps) => {
  const liStyle =
    "list-none text-xl hover:rounded-3xl px-7 py-2 hover:cursor-pointer hover:font-semibold transition-all duration-200 ease-in-out";

  const liActive = "bg-blue text-white font-semibold rounded-3xl";
  const liHover = "hover:bg-blue hover:text-white";

  return (
    <li
      className={`${liStyle} ${active === id ? liActive : liHover}`}
      onClick={() => {
        setActive(id);
        onClick?.();
      }}
    >
      <a href={`#${id}`}>{label}</a>
    </li>
  );
};

function NavBar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="md:relative fixed top-0 left-0 right-0 z-50 bg-white shadow-md md:bg-transparent md:shadow-none">
      <div className="max-w-7xl mx-auto">
        {/* DESKTOP & MOBILE HEADER */}
        <div className="flex justify-between items-center h-20 md:h-auto">
          {/* Botón Hamburguesa - Solo visible en MOBILE */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo centrado en móvil */}
          <div className="flex-1 md:hidden flex justify-center">
            <img src="/magic-logo2.png" className="w-22" alt="Logo" />
          </div>

          {/* Espacio vacío para balance en móvil */}
          <div className="md:hidden w-12"></div>

          <ul className="hidden md:flex justify-between items-center w-full">
            <NavItem
              id="home"
              label="Home"
              active={active}
              setActive={setActive}
            />
            <NavItem
              id="about"
              label="About"
              active={active}
              setActive={setActive}
            />

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
        </div>
        {/* MENÚ MÓVIL - Solo visible cuando isOpen es true */}
        <div className={`md:hidden overflow-hidden bg-white transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col items-center py-4 space-y-2">
            <NavItem id="home" label="Home" active={active} setActive={setActive} onClick={closeMenu} />
            <NavItem id="about" label="About" active={active} setActive={setActive} onClick={closeMenu} />
            <NavItem id="products" label="Products" active={active} setActive={setActive} onClick={closeMenu} />
            <NavItem id="contact" label="Contact" active={active} setActive={setActive} onClick={closeMenu} />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
