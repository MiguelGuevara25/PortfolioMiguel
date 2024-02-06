import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    title: "Devdatep Consulting EIRL (Practicante Frontend)",
    date: "Marzo 2023 - Julio 2023",
  },
  {
    title: "Glinvergy SAC (Frontend Developer)",
    date: "Julio 2023 - Actualidad",
  },
  {
    title: "Contactek Soft SAC (Frontend Developer)",
    date: "Noviembre 2023 - Actualidad",
  },
];

const MyExp = () => {
  return (
    <>
      <h3 className="text-4xl mb-8">My Experience</h3>

      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper [&>div>div]:mb-14 [&>div>span]:bg-gray-300"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-300 text-slate-900 p-7 rounded-3xl shadow-lg">
              <h4 className="font-bold text-2xl mb-6">{item.title}</h4>
              <span>{item.date}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MyExp;
