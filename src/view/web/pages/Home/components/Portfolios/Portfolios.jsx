import { motion } from "motion/react";
import { portfolios } from "../../../../../../data/data.json";
import PortfolioCard from "./components/PortfolioCard/PortfolioCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/bundle";

const Portfolios = () => {
    return (
        <div className="container pt-20 md:pt-40" id="portfolio">
            <motion.h2
                className="text-white text-5xl max-sm:text-4xl max-xs:!text-3xl font-ubuntuBold text-center capitalize"
                initial={{ y: 300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                {portfolios?.title}
            </motion.h2>
            {portfolios?.projects?.length ?
                <motion.div
                    className="flex justify-center items-start mt-15 gap-8 flex-wrap w-full"
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Swiper
                        className="h-full !pb-10 [&>.swiper-wrapper]:!flex [&>.swiper-wrapper]:!items-center [&>.swiper-wrapper]:!justify-start w-full [&>.swiper-pagination]:!-bottom-0"
                        modules={[ Navigation, Pagination, Scrollbar, A11y]}
                        pagination={{
                            clickable: true,
                            renderBullet: function (index, className) {
                                return '<span class="' + className + ' !bg-emerald-500 !w-2 !h-2 !rounded-full"></span>';
                            },
                        }}
                        slidesPerView={5}
                        centeredSlides={true}
                        spaceBetween={150}
                        initialSlide={Math.floor(portfolios?.projects?.length / 2)}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.21,
                                spaceBetween: 1
                            },
                            400: {
                                slidesPerView: 1.3,
                                spaceBetween: 20
                            },
                            450: {
                                slidesPerView: 1.5,
                                spaceBetween: 20
                            },
                            480: {
                                slidesPerView: 1.53,
                                spaceBetween: 30
                            },
                            520: {
                                slidesPerView: 1.45,
                                spaceBetween: 30
                            },
                            600: {
                                slidesPerView: 1.6,
                                spaceBetween: 30
                            },
                            640: {
                                slidesPerView: 1.9,
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView: 2.3,
                                spaceBetween: 30
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 150
                            },
                            1400: {
                                slidesPerView: 4.25,
                                spaceBetween: 150
                            },
                            1550: {
                                slidesPerView: 4.8,
                                spaceBetween: 150
                            },
                            1700: {
                                slidesPerView: 5,
                                spaceBetween: 150
                            },
                        }}
                    >
                        {portfolios?.projects?.map(portfolio =>
                            <SwiperSlide
                                key={portfolio?.name}
                                className="[&.swiper-slide-active>div]:scale-100 [&.swiper-slide-active>div]:opacity-100 pt-2"
                            >
                                <div className="flex flex-col justify-start items-center gap-y-2 transition-all duration-500 ease-in-out scale-90 opacity-50">
                                    <PortfolioCard key={portfolio.name} data={portfolio} />
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </motion.div> :
                <span className="text-slate-500 capitalize text-lg font-ubuntuBold">
                    no item to display
                </span>
            }
        </div>
    );
}

export default Portfolios;