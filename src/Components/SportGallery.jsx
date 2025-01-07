import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SportGallery = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <div>
            <h2 className="my-5 text-black dark:text-white text-center text-5xl font-extrabold">Sports Gallery</h2>
            <Link to={'/gallery'}>
                <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                    <div data-aos="flip-left">
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/sR8dCtz/gallery1.jpg" alt="" />
                    </div>
                    <div data-aos="flip-left">
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/Y0xfgBH/gallery2.jpg" alt="" />
                    </div>
                    <div data-aos="flip-right">
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/722fC2X/Racket8.jpg" alt="" />
                    </div>
                    <div data-aos="flip-right">
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/89MXGG5/gallery3.jpg" alt="" />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SportGallery;