import styles from "./CatalogGrid.module.css";
import Card from "../Card/Card";

const CatalogGrid = ({ products, onAddToCart }) => {
    return (
        <div className={styles.grid}>
            {products.map((product) => (
                <Card
                    key={product.id}
                    {...product}
                    onAddToCart={() => onAddToCart(product.id)}
                />
            ))}
        </div>
    );
};

export default CatalogGrid;
