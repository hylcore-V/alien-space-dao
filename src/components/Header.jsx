import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import icon from "../assets/Navbar/AFS.png";
// import "./navbar.css";

function Header() {
  const { t } = useTranslation();

  return (
    <header className="py-4">
      {/* <ul>
        <li>
          <Link to="/">
            <img src={icon} className="icono1" />
          </Link>
        </li>
        <li>
          <Link to="/">{t("navbar.home")}</Link>
        </li>
        <li>
          <Link to="/about">{t("navbar.about")}</Link>
        </li>
        <li>
          <Link to="/contact">{t("navbar.contact")}</Link>
        </li>
        <li>
          <Link to="/academy">{t("navbar.academy")}</Link>
        </li>
        <li>
          <Link to="/club">{t("navbar.club")}</Link>
        </li>
        <li>
          <Link to="/conetworking">{t("navbar.conetworking")}</Link>
        </li>
        <li className="language-icon">
          <img src={icon} alt="idioma" className="icono1" />
          <div className="dropdown">
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("es")}>Español</button>
            <button onClick={() => changeLanguage("zh")}>Chino</button>
            <button onClick={() => changeLanguage("ja")}>Japones</button>
            <button onClick={() => changeLanguage("pt")}>Portugues</button>
            <button onClick={() => changeLanguage("fr")}>Frances</button>
          </div>
        </li>
      </ul> */}
      <div className="container px-4 mx-auto flex justify-between">
        <Link to="/">
          <img src={icon} width={70} height={70} />
        </Link>
        <nav className="text-yellow flex items-center gap-x-6">
          <Link to="/">{t("navbar.home")}</Link>
          <Link to="/about">{t("navbar.about")}</Link>
          <Link to="/contact">{t("navbar.contact")}</Link>
          <Link to="/academy">{t("navbar.academy")}</Link>
          <Link to="/club">{t("navbar.club")}</Link>
          <Link to="/conetworking">{t("navbar.conetworking")}</Link>

        </nav>
        {/* <div className="language-icon">
          <img src={icon} alt="idioma" className="icono1" />
          <div className="dropdown">
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("es")}>Español</button>
            <button onClick={() => changeLanguage("zh")}>Chino</button>
            <button onClick={() => changeLanguage("ja")}>Japones</button>
            <button onClick={() => changeLanguage("pt")}>Portugues</button>
            <button onClick={() => changeLanguage("fr")}>Frances</button>
          </div>
        </div> */}
      </div>
    </header>
  );
}

export default Header;
