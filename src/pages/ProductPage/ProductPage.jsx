import { Link, useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";
import WhiteBtn from "../../components/Buttons/WhiteBtn/WhiteBtn";
import BlueBtn from "../../components/Buttons/BlueBtn/BlueBtn";

const ProductPage = ({ products }) => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) return <div>Товар не найден</div>;

    return (
        <div className={styles.productPage}>
            <div className={styles.backLink}>
                <Link to="/">
                    <WhiteBtn>
                    <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1.5L2 10.5L11 19.5" stroke="#0009EA" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                        На главную
                    </WhiteBtn>
                </Link>
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
                        <BlueBtn
                            className={`bg-primary-blue text-white px-4 py-2 rounded ${styles.addToCartBtn}`}
                        >
                            Добавить в корзину
                        </BlueBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
