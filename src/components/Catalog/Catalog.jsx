import styles from "./Catalog.module.css";
import Categories from "./Categories/Categories";
import CatalogGrid from "./CatalogGrid/CatalogGrid";
import { useState } from "react";
import { productsData } from "../../data/products";
import BlueBtn from "../Buttons/BlueBtn/BlueBtn";

const Catalog = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [products, setProducts] = useState(productsData);

    const handleCategorySelect = (categoryId) => {
        setActiveCategory(categoryId);
    };

    return (
        <div className={styles.catalog}>
            <h2 className="font-medium text-[40px] mb-[40px]">Каталог товаров</h2>
            <Categories
                categories={[
                    { id: "all", name: "Все товары" },
                    { id: "tires", name: "Шины/колеса" },
                    { id: "oil", name: "Масла" },
                    { id: "air-fresheners", name: "Ароматизаторы" },
                ]}
                activeCategory={activeCategory}
                onSelectCategory={handleCategorySelect}
            />
            <CatalogGrid products={products} onAddToCart={() => {}} />
            <BlueBtn className="mt-4 bg-secondary-blue text-white px-4 py-2 rounded">
                Загрузить еще товары
            </BlueBtn>
        </div>
    );
};

export default Catalog;
