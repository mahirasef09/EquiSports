
import Banner from "../Components/Banner";
import ProductCard from "../Components/ProductCard";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Home = () => {
    const { products } = useContext(AuthContext);

    return (
        <div>
            <Banner></Banner>
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

export default Home;