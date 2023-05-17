import { MdNaturePeople, MdWifi, MdCoffee, MdFamilyRestroom } from 'react-icons/md'
import SectionIcons from '../Icons/SectionIcons';


const SectionInfo = () => {
    return (
        <section className='h-screen container mx-auto flex flex-col lg:h-[50vh] px-8'>
            <div className='max-w-lg mx-auto mt-10 lg:w-full'>
                <div className='h-1  bg-gradient-to-r from-orange-400' />
                <h1 className='text-reserva text-3xl text-center font-serif uppercase font-bold my-3   text-slate-700'>Faça sua Reserva</h1>
                <div className='h-1 bg-gradient-to-l from-orange-400' />
            </div>
            <div className='grow grid grid-rows-3 items-center justify-center text-gray-900y lg:grid-cols-3 lg:grid-rows-none lg:gap-5'>

                <SectionIcons
                    text={'Wi-fi gratuito para você fica conectado sem nenhum problema.'}
                    icon={MdWifi} />
                <SectionIcons
                    text={'Tenha contato direto com a natureza e aproveite a tranquilidade e socego que só a natureza oferece'}
                    icon={MdNaturePeople} />
                <SectionIcons
                    text={'Traga sua família para se hospedar com a gente, temos um ótimo ambiente para atender toda sua familia.'}
                    icon={MdFamilyRestroom} />
            </div>
        </section>
    )
}

export default SectionInfo;