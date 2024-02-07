import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    title: "Devdatep Consulting EIRL (Frontend Trainee)",
    description:
      "I developed the company's system, together with a team of developers (Frontend) and also with the help of the backend team for the best communication regarding the data. I used new technologies such as: Zustand, React Router DOM, React Calendar, Tanstack Query, React Table, etc. I also learned how to factor and distribute the files in a correct way for the best performance in the visualization of the repository.",
    date: "March 2023 - July 2023",
  },
  {
    id: 2,
    title: "Glinvergy SAC (Frontend Developer)",
    description:
      "I made the Glinseal system, a real time tracking system for RFID seals, this I did with the help of a template called Metronic. I received constant support from the backend team to understand much better the flow of the system, while I learned to use the context handler called 'Redux'. As time went by, I was given the job of creating the web pages for the clients that accessed Glinvergy's company. I also made the website of the soccer team 'Gandía CF' to which I applied NextJS and Strapi technologies, the latter as Headless CMS.",
    date: "July 2023 - Actuality",
  },
  {
    id: 3,
    title: "Contactek Soft SAC (Frontend Developer)",
    description:
      "I developed the SUNASS system, with constant help from the backend team, consuming API's and interacting with the 'Scriptcase' software. I apply the Vanilla methodology for the coding of the system. Also together with other developers, we implemented ideas to improve the technologies to be used in future projects.",
    date: "November 2023 - Actuality",
  },
  {
    id: 4,
    title: "Susana Ferrel Coaching & Consultoría (Freelance)",
    description:
      "I developed the website of 'Susana Ferrel Coaching & Consultancy', the page was made with the following technologies, 'React' for the Frontend and 'Strapi' which I used as CMS, constant communication with the designer, to see specific points and add good practices, for customer satisfaction.",
    date: "September 2023 - December 2023",
  },
];

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
