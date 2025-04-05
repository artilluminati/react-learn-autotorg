import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";

const ProductPage = ({ products }) => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) return <div>Товар не найден</div>;

    return (
        <div className={styles.productPage}>
            <div className={styles.backLink}>
                <a href="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                    </svg>
                    На главную
                </a>
            </div>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className={styles.productImage}
                    />
                </div>
                <div className={styles.infoContainer}>
                    <h1 className={styles.productTitle}>{product.title}</h1>
                    <p className={styles.description}>{product.description}</p>
                    <div className={styles.priceContainer}>
                        <span className={styles.price}>{product.price} ₽</span>
                        <button
                            className={`bg-primary-blue text-white px-4 py-2 rounded ${styles.addToCartBtn}`}
                        >
                            Добавить в корзину
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
