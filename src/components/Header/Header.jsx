import s from "./Header.module.css";
import Banner from "../../components/Banner/Banner";
import Navigation from "../Navigation/Navigation";

export default function Header(props) {
    return (
        <header className={s.header + ` ${props.className}`}>
            <div className="container">
                <Navigation />
            </div>
        </header>
    );
}
