import styles from "./Categories.module.css";

const Categories = ({ categories, activeCategory, onSelectCategory }) => {
    return (
        <div className={styles.categories}>
            {categories.map((category) => (
                <button
                    key={category.id}
                    className={`${styles.category} ${
                        category.id === activeCategory ? styles.active : ""
                    }`}
                    onClick={() => onSelectCategory(category.id)}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default Categories;
