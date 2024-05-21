import styles from './Header.module.css'; 

const Header = () => {
    return (
        <nav className={styles.Header_nav}>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Header;