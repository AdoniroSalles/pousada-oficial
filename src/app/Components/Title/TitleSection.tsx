
interface TitleSectionProps {
    title: string,
    colorText: string
}

const TitleSection = ({ title, colorText }: TitleSectionProps) => {
    return (
        <div className='max-w-lg mx-auto lg:w-full'>
            <div className='h-1  bg-gradient-to-r from-orange-400' />
            <h1 className={`text-reserva text-3xl text-center font-serif uppercase font-bold my-2  ${colorText}`}>{ title }</h1>
            <div className='h-1 bg-gradient-to-l from-orange-400' />
        </div>
    );
}

export default TitleSection;