import s from "../Buttons.module.css";

export default function WhiteBtn({ children }) {
    return (
        <button className={`${s.btn} ${s["btn-light-gray"]}`}>
            {children}
        </button>
    );
}
