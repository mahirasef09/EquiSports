
import Banner from "../Components/Banner";
import SportGallery from "../Components/SportGallery";
import SportsItemCategories from "../Components/SportsItemCategories";
import WhyUs from "../Components/WhyUs";

const Home = () => {

    return (
        <div className="space-y-10">
            <Banner></Banner>
            <SportGallery></SportGallery>
            <WhyUs></WhyUs>
            <SportsItemCategories></SportsItemCategories>
        </div>
    );
};

export default Home;