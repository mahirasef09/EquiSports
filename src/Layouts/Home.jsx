
import Banner from "../Components/Banner";
import PageTitle from "../Components/PageTitle";
import SportGallery from "../Components/SportGallery";
import SportsItemCategories from "../Components/SportsItemCategories";
import WhyUs from "../Components/WhyUs";

const Home = () => {

    return (
        <div className="space-y-10">
            <PageTitle title="EquiSports | Home"></PageTitle>
            <Banner></Banner>
            <SportGallery></SportGallery>
            <WhyUs></WhyUs>
            <SportsItemCategories></SportsItemCategories>
        </div>
    );
};

export default Home;