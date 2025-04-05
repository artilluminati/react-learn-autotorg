import s from "../Buttons.module.css";

export default function BlueBtn({ children }) {
    return <button className={`${s.btn} ${s["btn-blue"]}`}>{ children }</button>;
}