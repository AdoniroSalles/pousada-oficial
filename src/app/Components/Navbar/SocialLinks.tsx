import Link from 'next/link';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'

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
        </>);
}

export default SocialLinks;