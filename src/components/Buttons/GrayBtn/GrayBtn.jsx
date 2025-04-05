import s from "../Buttons.module.css";

export default function GrayBtn({ children }) {
    return <button className={`${s.btn} ${s["btn-gray"]}`}>{children}</button>;
}