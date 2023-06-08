import { MdNaturePeople, MdWifi, MdFamilyRestroom } from 'react-icons/md'
import SectionIcons from '../Icons/SectionIcons';
import TitleSection from '../Title/TitleSection';
import AirbnbButton from '../Buttons/AirbnbButton';


const SectionInfo = () => {
    return (
        <section className='h-screen container mx-auto flex flex-col md:h-[60vh] lg:h-[50vh] px-8 py-8'>
            <TitleSection title='Faça sua Reserva' colorText='text-slate-700'/>
            <AirbnbButton/>
            <div className='grow grid grid-rows-3 items-center justify-center text-gray-900y text-sm lg:text-base lg:grid-cols-3 lg:grid-rows-none lg:gap-5'>

                <SectionIcons
                    text={'Wi-fi gratuito para você ficar conectado sem nenhum problema.'}
                    icon={MdWifi} />
                <SectionIcons
                    text={'Tenha contato direto com a natureza e aproveite a tranquilidade e sossego que só a natureza oferece.'}
                    icon={MdNaturePeople} />
                <SectionIcons
                    text={'Traga sua família para se hospedar com a gente, temos um ótimo ambiente para atender toda sua familia.'}
                    icon={MdFamilyRestroom} />
            </div>
        </section>
    )
}

export default SectionInfo;