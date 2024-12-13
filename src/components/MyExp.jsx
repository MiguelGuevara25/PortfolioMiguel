import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { data } from "../data";
import "swiper/css/pagination";
import "swiper/css";

const MyExp = () => {
    return (
        <>
            <h3 className="text-4xl font-bold mb-8">My Experience</h3>

            <Swiper
                slidesPerView={1}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper [&>div>div]:mb-14 [&>div>span]:bg-gray-300"
            >
                {data.map(({ id, title, description, date }) => (
                    <SwiperSlide key={id}>
                        <div className="bg-gray-300 text-slate-900 p-7 rounded-3xl shadow-lg">
                            <h4 className="font-bold text-2xl mb-3">{title}</h4>
                            <p className="mb-5">{description}</p>
                            <p className="font-bold md:text-right">{date}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default MyExp;
