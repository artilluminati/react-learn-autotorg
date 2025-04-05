import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import { productsData } from "../src/data/products";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/catalog" element={<CatalogPage />}></Route>
                <Route
                    path="/catalog/:id"
                    element={<ProductPage products={productsData} />}
                ></Route>
            </Routes>
        </>
    );
}

export default App;
