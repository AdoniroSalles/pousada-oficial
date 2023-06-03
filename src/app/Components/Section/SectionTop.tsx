import Image from "next/image";

const SectionTop = () => {
    return (
        <div id="chales" className="h-full flex justify-center items-center">
            <div className="container grid lg:grid-cols-2 gap-y-10 lg:flex-row">
                <div className="mx-auto">
                    <Image 
                    src="/image/image-front.jpeg" 
                    height={230} 
                    width={230} 

                    alt="Chalé"/>
                </div>
                <div className="flex flex-col justify-center gap-y-4">
                    <h2 className="text-2xl text-center font-semibold font-serif text-slate-700 lg:text-3xl">SEU REFÚGIO EM CAMPOS DO JORDÃO</h2>
                    <p className="text-sm text-justify lg:text-base">
                        Os chalés são o melhor lugar para você fugir da correria da cidade grande. Um lugar tranquilo e aconchegante para você  e sua familia passarem os melhores dias na cidade.
                    </p>
                    <p className="text-sm text-justify lg:text-base">
                        Com 12 chalés a disposição, ocupando uma aréa de Xm² em uma região tranquila da cidade e proporcionando um bom contato com a natureza.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SectionTop;