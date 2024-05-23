import { NavLink } from "react-router-dom";

import logo from '../images/logo.svg'; 
import logoVK from '../images/logoVK.svg';

import styles from './Menu.module.css'; 

const Menu = () => {
  return (
    <div className={styles.mainMenu}>

    <img src={logo} alt="logo" />

    <nav className={styles.mainMenu_nav}>
        <NavLink to='.' end>Главная</NavLink>
        <NavLink to='/blog'>Блог</NavLink>
        <NavLink to='/participants'>Участникам</NavLink>
        <NavLink to='/pastHackathons'>Прошедшие хакатоны</NavLink>
        <NavLink to='/teams'>Команды-участники</NavLink>
    </nav>

    <img src={logoVK} alt="VK" />

    </div>   
  )
}

export default Menu; 