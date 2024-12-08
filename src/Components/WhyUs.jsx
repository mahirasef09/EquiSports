import { Fade } from "react-awesome-reveal";

const WhyUs = () => {
    return (
        <div>

            <h2 className="mb-5 text-black dark:text-white text-center text-5xl font-extrabold">Why Us</h2>
            <div className="hero bg-base-100 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <Fade duration={6000}>
                        <img
                            src="https://i.ibb.co.com/fQj6cbd/WhyUs.jpg"
                            className="max-w-xs rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-4xl font-bold">We Provide the Best</h1>
                            <p className="text-2xl py-6">
                                We, EquiSports, situated at Dhaka, Bangladesh, are a leading E-commerce site  offering a wide range of Sports Equipment Services for all. Our uniquely selected Sports Items make our customers ready for different games. If you have any confusion or doubt regarding any aspect of your Sports Equipment, we will help you with our outmost services. Our professional team works harmoniously to give you the best product.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </Fade>
                </div>
            </div>

        </div>
    );
};

export default WhyUs;