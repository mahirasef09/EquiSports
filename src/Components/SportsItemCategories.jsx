import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { AuthContext } from "../Providers/AuthProvider";
import Loading from "./Loading";

const SportsItemCategories = () => {
    const {state, loading} = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://server-of-equisports.vercel.app/equipment')
            .then(res => res.json())
            .then(data => setData(data))
    }, [state]);

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className="space-y-8">
            <h2 className="text-black dark:text-white text-center text-5xl font-extrabold">Sports Item Categories We Provide</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <button className="btn btn-accent rounded-none">Sports Shoe</button>
                <button className="btn btn-accent rounded-none">Football</button>
                <button className="btn btn-accent rounded-none">Tennis Racket</button>
                <button className="btn btn-accent rounded-none">Bicycle</button>
            </div>

            <h2 className="text-black dark:text-white text-center text-5xl font-extrabold">Sports Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-7 my-5">
                {
                    data.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default SportsItemCategories;