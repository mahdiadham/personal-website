import { motion } from "motion/react";
import { technologies } from "../../../../../../data/data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/bundle";

const Skills = () => {
    return (
        <div className="container flex flex-col justify-start items-center pt-20 md:pt-40" id="skills">
            <motion.div
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2 className="text-white text-center capitalize text-5xl max-sm:text-4xl max-xs:!text-3xl font-ubuntuBold">
                    {technologies?.title}
                </h2>
                <p className="text-slate-600 capitalize font-ubuntuMedium mt-7 text-lg text-center w-auto max-md:text-base max-xs:!text-sm">
                    {technologies?.description}
                </p>
            </motion.div>
            {technologies?.list?.length ?
                <motion.div
                    className="flex justify-start items-start gap-10 mt-10 w-full"
                    initial={{ y: 300, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Swiper
                        className="h-30 [&>.swiper-wrapper]:!flex [&>.swiper-wrapper]:!items-center [&>.swiper-wrapper]:!justify-start"
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
                        initialSlide={Math.floor(technologies?.list?.length / 2 - 1)}
                        breakpoints={{
                            320: {
                                slidesPerView: 3.1,
                                spaceBetween: 1
                            },
                            480: {
                                slidesPerView: 4
                            },
                            640: {
                                slidesPerView: 5
                            },
                            768: {
                                slidesPerView: 7
                            },
                            1024: {
                                slidesPerView: 9
                            },
                            1280: {
                                slidesPerView: 11,
                            },
                        }}
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
                </motion.div> :
                <span className="text-slate-500 capitalize text-lg font-ubuntuBold">
                    no item to display
                </span>
            }
        </div>
    );
}

export default Skills;