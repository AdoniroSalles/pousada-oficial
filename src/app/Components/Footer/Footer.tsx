
import SocialLinks from "../Navbar/SocialLinks";
import TitleSection from "../Title/TitleSection";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {


    return (
        <footer id="contato" className="h-auto">
            <div className="container mx-auto px-8 pt-7 text-center text-sm lg:text-base">
                <TitleSection title="Contato" colorText="text-slate-700"></TitleSection>
                <div className="py-4">
                    <p>Ficou com alguma duvida, quer fazer sua reserva, entre em contato com a gente. Te atenderemos da melhor maneira.</p>
                </div>
                <div className="py-4">
                    <ul>
                        <li>Rua Francisco Inácio de Lima - Campos do Jordão - SP </li>
                        <li>chalesestilodecampos@gmail.com</li>
                        <li>(12)9 9778-5244</li>
                    </ul>
                </div>
                <div className="w-full flex justify-center py-4 gap-2">
                    <SocialLinks />
                </div>
            </div>
            <div className="w-full h-20  bg-slate-700 flex justify-center items-center">
                <p className="text-slate-300">Estilos de Campos - {year} </p>
            </div>
        </footer>
    );
}

export default Footer;