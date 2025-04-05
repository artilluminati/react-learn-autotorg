// components/Catalog/Card/Card.jsx
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import BlueBtn from "../../Buttons/BlueBtn/BlueBtn";

const Card = ({ id, title, price, image, onAddToCart }) => {
    const handleAddToCart = (e) => {
        e.stopPropagation(); // Предотвращаем переход по ссылке
        onAddToCart(id);
    };

    return (
        <Link className={styles.card} to={`/catalog/${id}`}>
            <img src={image} alt={title} className={styles.image} />
            <div className="px-[10px]">
                <h3 className={styles.title}>{title}</h3>
                <div className="flex justify-between">
                    <p className={styles.price}>{price} ₽</p>
                    <BlueBtn
                        onClick={handleAddToCart}
                        className="bg-primary-blue text-white px-4 py-2 rounded"
                    >
                        Добавить в корзину
                    </BlueBtn>
                </div>
            </div>
        </Link>
    );
};

export default Card;
