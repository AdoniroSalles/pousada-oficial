import { FaAirbnb } from 'react-icons/fa'

const AirbnbButton = () => {
    return (
        <a href="https://www.airbnb.com.br/users/234798400/listings" className='mt-5 bg-airbnb-color flex mx-auto text-white items-center px-4 py-2 rounded-md ease-in duration-300 shadow-lg hover:opacity-80' target='_blank'>
            <FaAirbnb className='mr-2' size={25} ></FaAirbnb>
            Garanta sua hospedagem !
        </a>
    );
}

export default AirbnbButton;