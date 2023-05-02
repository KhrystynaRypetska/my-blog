import NavList from "../Nav/NavList/NavList";
import NavItem from "../Nav/NavItem/NavItem";
import styles from "./Footer.module.scss";

const Footer = () => {
    const { footer, navList } = styles;
    return (
        <footer className={footer}>
            <h4><i>Footer Navigation</i></h4>
            <nav className={ navList }>
                <NavList>
                    <NavItem>Home</NavItem>
                    <NavItem>About</NavItem>
                    <NavItem>CTA</NavItem>
                    <NavItem>Contact</NavItem>
                </NavList>
            </nav>
        </footer>
    )
}

export default Footer;