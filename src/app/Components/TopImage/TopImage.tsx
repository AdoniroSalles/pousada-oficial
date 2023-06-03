import Navbar from "../Navbar/Navbar";
import TopText from "./TopText";

const TopImage = () => {
    return (
        <>
            <div className="h-screen bg-top-img bg-cover bg-center before:absolute before:bg-slate-600 before:top-0 before:left-0 before:w-full before:h-full before:opacity-40">
                <div className="flex flex-col container mx-auto relative text-white  h-full">
                    <Navbar />
                    <TopText />
                </div>
            </div>
        </>

    )
}

export default TopImage;