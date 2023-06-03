'use client'

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TitleSection from "../Title/TitleSection";

import Infos from "@/app/services/infos";


const imgs = Infos.fotos

const renderSlides = imgs.map((fotos, index) => (
    <SwiperSlide className="border-white-700 border-4 rounded-md relative" key={index}>
        <Image className="w-full h-full" width={300} height={300}  src={fotos} alt="alt" />
    </SwiperSlide>
));

const SectionSlick = () => {
    

    return (

        <section id="galeria" className="h-screen lg:h-[60vh] bg-slate-700 flex flex-col px-8 pt-7 text-white text-center ">
            <TitleSection title={"Galeria"} colorText="text-white" />

            <div className="flex-1 container mx-auto flex flex-col">
                <div className="flex-1 max-w-2xl mx-auto flex items-center">
                    <p className="text-sm lg:text-base text-center">Conheça um pouco dos nossos chalés, veja um pouco do nosso ambiente. Todos os nossos chalés são equipados com tv, acesso a internet, frigobar, microondas. Oferecendo tudo para que você possa relaxar com mais tranquilidade.</p>
                </div>

                <div className="grow relative flex  items-center ">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        pagination={{
                            clickable: true
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1280: {
                                slidesPerView:4,
                                spaceBetween: 40,
                            },
                        }}
                        modules={[Autoplay]}
                    >
                        {renderSlides}
                    </Swiper>

                </div>
            </div>
        </section>
    )
}

export default SectionSlick;