import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";

import { images } from "../../constants";

const Navbar = () => {
  const [hamMenu, setHamMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
        <span className="p-text">Portfolio</span>
      </div>
      <ul className="app__navbar-links">
        {["Home", "Habilidades", "Proyectos", "Contacto"].map(
          (item) => (
            <li className="app_flex p-text" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
              <div />
            </li>
          )
        )}
      </ul>

      {/* mobile nav */}
      <div className="app__navbar-menu">
        <HiMenuAlt3 onClick={() => setHamMenu(true)} />

        {hamMenu && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setHamMenu(false)} />
            <ul>
              {["Home", "Habilidades", "Proyectos", "Contacto"].map(
                (item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setHamMenu(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
