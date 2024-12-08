
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className='rounded-3xl w-full h-[600px]' src="https://i.ibb.co.com/fn8v5bZ/Slider1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-3xl w-full h-[600px]' src="https://i.ibb.co.com/5K9hZQd/Slider2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-3xl w-full h-[600px]' src="https://i.ibb.co.com/sbpSCD5/Slider3.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;