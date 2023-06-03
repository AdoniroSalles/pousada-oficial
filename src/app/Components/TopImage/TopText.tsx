import Link from "next/link";

const TopText = () => {
    return (
        <div className="grow flex flex-col justify-center items-center text-white gap-8">
            <h1 className="text-4xl text-center font-bold font-sans xl:text-5xl xl:max-w-2xl ">Conforto e Qualidade em Campos do Jordão</h1>

            <a href='#chales' type='button' className='rounded-lg text-center text-base font-semibold text-white mx-6 px-6 py-3 bg-orange-400 md:text-base md:w-72 hover:bg-orange-300 transition'>
                Mais Informações
            </a>
        </div>

    )
}

export default TopText;