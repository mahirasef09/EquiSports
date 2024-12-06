import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import ProductCard from "../Components/ProductCard";

const Home = () => {
    const loadedEquipment = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
                {
                    loadedEquipment.map(equipment => <ProductCard 
                        key={equipment._id}
                        equipment={equipment}
                        ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Home;