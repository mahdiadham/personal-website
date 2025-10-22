import { technologies } from "../../../../../../data/data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/bundle";

const Skills = () => {
    return (
        <div className="container flex flex-col justify-start items-center pt-40" id="skills">
            <h2 className="text-white capitalize text-5xl font-ubuntuBold">
                {technologies?.title}
            </h2>
            <p className="text-slate-600 capitalize font-ubuntuMedium mt-7 text-lg">
                {technologies?.description}
            </p>
            {technologies?.list?.length ?
                <div className="flex justify-start items-start gap-10 mt-10 w-full">
                    <Swiper
                        modules={[EffectCoverflow]}
                        slidesPerView={11}
                        centeredSlides={true}                                       
                        spaceBetween={1}
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 70,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        className="h-30 [&>.swiper-wrapper]:!flex [&>.swiper-wrapper]:!items-center [&>.swiper-wrapper]:!justify-start"
                        initialSlide={Math.floor(technologies?.list?.length / 2 - 1)}
                    >
                        {technologies?.list?.map((tech) => (
                            <SwiperSlide
                                key={tech?.name}
                                className="[&.swiper-slide-active>div]:scale-100 [&.swiper-slide-active>div]:opacity-100"
                            >
                                <div className="flex flex-col justify-start items-center gap-y-2 transition-all duration-500 ease-in-out scale-80 opacity-50">
                                    <img
                                        src={tech?.icon}
                                        alt={tech?.name}
                                        className="size-20 object-contain"
                                    />
                                    <span className="text-white">
                                        {tech?.name}
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div> :
                <span className="text-slate-500 capitalize text-lg font-ubuntuBold">
                    no item to display
                </span>
            }
        </div>
    );
}

export default Skills;