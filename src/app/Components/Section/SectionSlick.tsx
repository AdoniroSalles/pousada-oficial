'use client'

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const imgs = [
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1555626906-fcf10d6851b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1493238792000-8113da705763?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1490641815614-b45106d6dd04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',

];

const renderSlides = imgs.map((num, i) => (
    <SwiperSlide className="border-white-700 border-8 rounded-md  ">
        <img className="trending-img" key={i} src={num} alt="" />
    </SwiperSlide>
));


const SectionSlick = () => {

    return (

        <div className="h-screen bg-slate-700 lg:h-[50vh] flex flex-col px-4">
            <div className="flex-none text-center text-white container mx-auto pt-8 text-">
                <h2 className="text-3xl uppercase font-serif font-semibold">Galeria</h2>
                <div className="max-w-4xl  mx-auto">
                    <p className="lg:text-lg">Conheça um pouco dos nossos chalés, veja um pouco do nosso ambiente. Todos os nossos chalés são equipados com tv, acesso a internet, frigobar, microondas. Oferecendo tudo para que você possa relaxar com mais tranquilidade.</p>
                </div>
            </div>
            <div className="relative grow flex  items-center ">
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
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                    modules={[Autoplay]}
                >
                    {renderSlides}
                </Swiper>

            </div>
        </div>
    )
}

export default SectionSlick;