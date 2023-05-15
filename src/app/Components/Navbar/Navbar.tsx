import Social from "./Social";

const Navbar = () => {
    return (
        <div className="flex flex-col justify-between items-center md:flex-row">
            <div className="text-2xl xl:flex-none">
                Estilo de Campos
            </div>
            <div className="xl:grow">
                <nav>
                    <ul className="flex gap-5 text-lg justify-center items-center links xl:text-xl">
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