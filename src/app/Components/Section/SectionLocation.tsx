import TitleSection from "../Title/TitleSection";

const SectionLocation = () => {
    return (
        <div id="localizacao" className="container mx-auto h-full pt-8 flex flex-col">
            <TitleSection title='Localização' colorText='text-slate-700' />
            <div className="flex-1 flex flex-col gap-10 mt-2 lg:flex-row items-center">
                <div className="text-sm lg:text-base indent-10 text-justify lg:flex-1">
                    <p>A os chalés Estilo de Campos estão localizados em Campos do Jordão, uma encantadora cidade montanhosa situada na Serra da Mantiqueira, no estado de São Paulo. Rodeada por uma paisagem exuberante, os chalés desfrutam de uma localização privilegiada em meio a uma vegetação exuberante e belas montanhas.</p>
                    <br />
                    <p>Os chalés estão estrategicamente posicionada em uma área tranquila e serena, oferecendo aos seus hóspedes um refúgio tranquilo longe do burburinho da cidade. Ela proporciona uma atmosfera relaxante, perfeita para quem busca descanso, conforto e contato com a natureza.</p>
                </div>
                <div className="pb-8 h-full md:h-72 w-full lg:flex-1">
                    <iframe width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14720.152196835053!2d-45.5895141!3d-22.7268271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc89dfc82134f5%3A0x55195479928a0d35!2sChal%C3%A9s%20Estilo%20de%20Campos!5e0!3m2!1spt-BR!2sbr!4v1685743613644!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
                </div>
            </div>
        </div>

    );
}

export default SectionLocation;