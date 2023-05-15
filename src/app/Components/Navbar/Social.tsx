import Link from 'next/link';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'

const Social = () => {
    return (
        <div className="hidden xl:flex-none xl:block" >
            <div className="flex gap-3 flex-row-reverse">
                <Link href='/'>
                    <AiOutlineFacebook size={30} />
                </Link>
                <Link href='/'>
                    <AiOutlineInstagram size={30} />
                </Link>
                <Link href='/'>
                    <AiOutlineWhatsApp size={30} />
                </Link>

            </div>
        </div>
    )

}

export default Social; 