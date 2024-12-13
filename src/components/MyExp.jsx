import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { data } from "../data";

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
                modules={[Pagination]}
                className="mySwiper [&>div>div]:mb-14 [&>div>span]:bg-gray-300"
            >
                {data.map(({ id, title, description, date }) => (
                    <SwiperSlide className="" key={id}>
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
