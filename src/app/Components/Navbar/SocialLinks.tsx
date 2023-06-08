import Link from 'next/link';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { FaAirbnb } from 'react-icons/fa'


const SocialLinks = () => {
    return (
        <>
            <Link href='https://www.facebook.com/chalesestilodecampos' target='_blank'>
                <AiOutlineFacebook size={30} />
            </Link>
            <Link href='https://www.instagram.com/chalesestilodecampos/' target='_blank'>
                <AiOutlineInstagram size={30}/>
            </Link>
            <Link href='https://wa.me/5512997785244' target='_blank' >
                <AiOutlineWhatsApp size={30}/>
            </Link>
            <Link href='https://www.airbnb.com.br/users/234798400/listings' target='_blank' >
                <FaAirbnb size={30}/>
            </Link>
        </>);
}

export default SocialLinks;