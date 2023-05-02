// import { NavList, NavItem } from "../Nav";
import NavItem from "../Nav/NavItem/NavItem";
import NavList from "../Nav/NavList/NavList";
import styles from "./Header.module.scss";

const Header = () => {
   const { header, navList } = styles;
    return (
        <header className={header}>
            <nav className={ navList }>
              <NavList>
                  <NavItem>Home</NavItem>
                  <NavItem>About</NavItem>
                  <NavItem>CTA</NavItem>
                  <NavItem>Contact</NavItem>
              </NavList>
            </nav>
        </header>
    )
}

export default Header;