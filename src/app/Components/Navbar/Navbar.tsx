import Social from "./Social";
import logo from  "../../../../public/svg/logo.svg";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className=" pt-5 flex flex-col justify-between items-center md:flex-row lg:pt-0 lg:px-4">
            <div className="text-2xl order-2 lg:order-1 xl:flex-none max-w-[150px]">
                <Image src={logo} alt="Logo estilo de Campos" className="w-full h-full pt-4" width={0} height={0} sizes="100vw"/>
            </div>
            <div className="order-1 lg:order-2 xl:grow">
                <nav>
                    <ul className="flex gap-4 text-lg justify-center items-center links xl:text-xl">
                        <li>
                            <a href="#chales">Os Chalés</a>
                        </li>
                        <li>
                            <a href="#galeria">Galeria</a>
                        </li>
                        <li>
                            <a href="#localizacao">Localização</a>
                        </li>
                        <li>
                            <a href="#contato">Contato</a>
                        </li>
                    </ul>
                </nav>

            </div>
            <Social/>
        
        </div>
    )

}

export default Navbar;