import Banner from "../../components/Banner/Banner";
import Catalog from "../../components/Catalog/Catalog";
import Header from "../../components/Header/Header";

export default function HomePage() {
    return (
        <>
            <Header className="absolute top-0" />
            <Banner></Banner>
            <Catalog></Catalog>
        </>
    );
}
