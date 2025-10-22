import { portfolios } from "../../../../../../data/data.json";
import PortfolioCard from "./components/PortfolioCard/PortfolioCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/bundle";

const Portfolios = () => {
    return (
        <div className="container pt-40" id="portfolio">
            <h2 className="text-white text-5xl font-ubuntuBold text-center capitalize">
                {portfolios?.title}
            </h2>
            {portfolios?.projects?.length ?
                <div className="flex justify-center items-start mt-15 gap-8 flex-wrap w-full">
                    <Swiper
                        slidesPerView={5}
                        centeredSlides={true}
                        spaceBetween={150}
                        initialSlide={Math.floor(portfolios?.projects?.length / 2)}
                        className="h-full [&>.swiper-wrapper]:!flex [&>.swiper-wrapper]:!items-center [&>.swiper-wrapper]:!justify-start w-full"
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
                </div> :
                <span className="text-slate-500 capitalize text-lg font-ubuntuBold">
                    no item to display
                </span>
            }
        </div>
    );
}

export default Portfolios;