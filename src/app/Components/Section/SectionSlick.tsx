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

const renderSlides = imgs.map((num, index) => (
    <SwiperSlide className="border-white-700 border-8 rounded-md relative" key={index}>
        <Image className="w-full h-full" width={0} height={0} sizes="100vw" src={num} alt="alt" />
    </SwiperSlide>
));


const SectionSlick = () => {

    return (

        <div className="h-screen bg-slate-700 flex flex-col px-8  text-white text-center lg:h-[50vh] ">
            <div className="flex-1 mt-10">
                <div className='h-1  bg-gradient-to-r from-orange-400' />                
                <h2 className=" text-3xl uppercase font-serif font-semibold my-3">Galeria</h2>
                <div className='h-1 bg-gradient-to-l from-orange-400' />
            </div>
            <div className="flex-1 max-w-4xl  mx-auto">
                <p className="lg:text-lg">Conheça um pouco dos nossos chalés, veja um pouco do nosso ambiente. Todos os nossos chalés são equipados com tv, acesso a internet, frigobar, microondas. Oferecendo tudo para que você possa relaxar com mais tranquilidade.</p>
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