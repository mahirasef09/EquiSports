
import Banner from "../Components/Banner";
import SportsItemCategories from "../Components/SportsItemCategories";
import SportsItems from "../Components/SportsItems";

const Home = () => {

    return (
        <div className="space-y-10">
            <Banner></Banner>
            <SportsItemCategories></SportsItemCategories>
            <SportsItems></SportsItems>
        </div>
    );
};

export default Home;