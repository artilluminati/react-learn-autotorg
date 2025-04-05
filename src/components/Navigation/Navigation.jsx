import s from "../Navigation/Navigation.module.css";
import logo from "../../assets/images/avtotorgLogo.svg";
import BlueBtn from "../Buttons/BlueBtn/BlueBtn";
import GrayBtn from "../Buttons/GrayBtn/GrayBtn";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <div className={s.navigation}>
            <nav className={s.nav}>
                <NavLink to="#" className={s.nav__item}>
                    О нас
                </NavLink>
                <NavLink to="/catalog" className={s.nav__item}>
                    Каталог
                </NavLink>
                <NavLink to="#" className={s.nav__item}>
                    Где нас найти
                </NavLink>
            </nav>
            <div className="flex justify-center">
                <img src={logo} alt="" className="logo" />
            </div>
            <div className="flex gap-5 justify-end">
                <GrayBtn>Регистрация</GrayBtn>
                <BlueBtn>Вход</BlueBtn>
            </div>
        </div>
    );
}
