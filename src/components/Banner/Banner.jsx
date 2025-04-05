import bannerImage from "../../assets/images/header/car-banner.jfif";
import s from "./Banner.module.css";
import WhiteBtn from "../Buttons/WhiteBtn/WhiteBtn";
import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <section
            className={s.banner}
            style={{
                backgroundImage: `url("${bannerImage}")`,
            }}
        >
            <WhiteBtn>
                О компании <Link className="text-blue-700">АвтоТорг</Link>
            </WhiteBtn>
        </section>
    );
}
