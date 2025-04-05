// components/Catalog/Card/Card.jsx
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ id, title, price, image, onAddToCart }) => {
    const handleAddToCart = (e) => {
        e.stopPropagation(); // Предотвращаем переход по ссылке
        onAddToCart(id);
    };

    return (
        <Link className={styles.card} to={`/catalog/${id}`}>
            <img src={image} alt={title} className={styles.image} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.price}>{price} ₽</p>
            <button
                onClick={handleAddToCart}
                className="bg-primary-blue text-white px-4 py-2 rounded"
            >
                Добавить в корзину
            </button>
        </Link>
    );
};

export default Card;
