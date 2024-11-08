import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./components/LanguageToggle";
import icon from "../../assets/Navbar/AFS.png"
import "./header.css";

function Header() {
    const { t } = useTranslation();

    return (
        <header className="py-4 sticky top-0 left-0 w-full">
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
                <LanguageToggle />
            </div>
        </header>
    );
}

export default Header;
