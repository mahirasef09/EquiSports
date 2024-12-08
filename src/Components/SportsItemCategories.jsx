import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { AuthContext } from "../Providers/AuthProvider";
import Loading from "./Loading";

const SportsItemCategories = () => {
    const {loading, state} = useContext(AuthContext);

    const [items, setItems] = useState([]);
    const [allData, setAllData] = useState([]);
    const [btn, setBtn] = useState("");

    useEffect(() => {
        fetch('http://localhost:5000/equipment')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [state]);

    useEffect(() => {
        fetch('http://localhost:5000/equipment')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [state]);

    if (loading) {
        return <Loading></Loading>;
    }

    const shoes = allData.filter(shoe => shoe.category === "Shoe");
    const footballs = allData.filter(football => football.category === "Football");
    const rackets = allData.filter(racket => racket.category === "Racket");
    const bicycles = allData.filter(bicycle => bicycle.category === "Bicycle");


    const handleBtn = (btnType) => {
        setBtn(btnType);

        if (btn === "" || btn === "All") {
            setItems(allData);
        }

        if (btn === "Shoe") {
            setItems(shoes);
        }

        if (btn === "Football") {
            setItems(footballs);
        }

        if (btn === "Racket") {
            setItems(rackets);
        }

        if (btn === "Bicycle") {
            setItems(bicycles);
        }
    }

    return (
        <div className="space-y-8">
            <h2 className="text-black dark:text-white text-center text-5xl font-extrabold">Sports Item Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                <button onClick={() => handleBtn("All")} className="btn btn-accent">All Items</button>
                <button onClick={() => handleBtn("Shoe")} className="btn btn-accent">Sports Shoe</button>
                <button onClick={() => handleBtn("Football")} className="btn btn-accent">Football</button>
                <button onClick={() => handleBtn("Racket")} className="btn btn-accent">Tennis Racket</button>
                <button onClick={() => handleBtn("Bicycle")} className="btn btn-accent">Bicycle</button>
            </div>

            <h2 className="text-black dark:text-white text-center text-5xl font-extrabold">Sports Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
                {
                    items.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default SportsItemCategories;