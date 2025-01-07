
import PageTitle from './PageTitle';

const Gallery = () => {
    return (
        <div>
            <PageTitle title="EquiSports | Gallery"></PageTitle>
            <div className='my-5 bg-accent dark:bg-black rounded-tl-full rounded-br-full h-16 mb-5'>
                <h2 className="text-black dark:text-white text-center text-4xl font-extrabold">Gallery</h2>
            </div>
            <div className='flex justify-center'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div>
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/sR8dCtz/gallery1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/Y0xfgBH/gallery2.jpg" alt="" />
                    </div>
                    <div>
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/722fC2X/Racket8.jpg" alt="" />
                    </div>
                    <div>
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/89MXGG5/gallery3.jpg" alt="" />
                    </div>
                    <div>
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/fn8v5bZ/Slider1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/5K9hZQd/Slider2.jpg" alt="" />
                    </div>
                    <div>
                        <img className="rounded-3xl w-72 h-72" src="https://i.ibb.co.com/sbpSCD5/Slider3.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Gallery;