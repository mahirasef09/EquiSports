import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import ProductCard from "./ProductCard";

const SportsItems = () => {
    const { products } = useContext(AuthContext);


    return (
        <div>
            <h2 className="text-center text-5xl font-extrabold">Sports Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
                {
                    products.map(product => <ProductCard 
                        key={product._id}
                        product={product}
                        ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default SportsItems;