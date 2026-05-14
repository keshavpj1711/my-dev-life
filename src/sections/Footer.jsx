import { navLinks } from "../constants";

const footerSocials = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/keshavpj1711",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "GitHub",
    url: "https://github.com/keshavpj1711",
    imgPath: "/images/logos/github_white.png",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} Keshav Prajapati. All rights reserved.
        </p>

        <div className="socials">
          {footerSocials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <img src={social.imgPath} alt={social.name} className="size-6 object-contain rounded-sm" />
            </a>
          ))}
        </div>

        <nav className="flex items-center justify-center md:justify-end gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.link}
              className="text-white-50 hover:text-white transition-colors duration-200 text-sm"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
