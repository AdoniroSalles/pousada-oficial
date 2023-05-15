import { IconType } from "react-icons/lib";

interface SectionIconsProps {
    text: string,
    icon: IconType
}

const SectionIcons = ({text, icon: Icon} : SectionIconsProps) =>{
    return (
        <div className="text-center ">
            <Icon size={120} className="text-orange-400 mx-auto"></Icon>
            <p className="lg:text-lg">{text}</p>

        </div>
    )
}

export default SectionIcons;