import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // so if user has scrolled 10px navbar bg is to be changed
      const isScrolled = window.scrollY > 10
      setScrolled(true)
    }

    window.addEventListener('scroll', handleScroll)

    // cleaning up event listner
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return ( 
    <header className={`navbar ${scrolled ? 'scrolled': 'not-scrolled'}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Keshav PJ
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({link, name}) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline"/>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>
              Contact me
            </span>
          </div>
        </a>
      </div>
    </header>
   );
}
 
export default Navbar;