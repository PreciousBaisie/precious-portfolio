import Safelynk from "../assets/images/safelynk.svg";
import Viibre from "../assets/images/viibre-icon.webp";
import Codenova360 from "../assets/images/codenova360.png";
import Fixnotify from "../assets/images/fixnotify.png";
import Inventa from "../assets/images/inventa.png";
import Image from "next/image";

const projectLogos = [
    {
        id: 1,
        name: "Safelynk",
        logo: Safelynk,
        width: 140,
        height: 50,
    },
    {
        id: 2,
        name: "Codenova360",
        logo: <>
            <div className="flex items-center space-x-0">
                <Image src={Codenova360} alt="Codenova360" width={50} height={30} className="scale-200" />
                <span className="text-lg font-black text-gray-900"> CodeNova<span className="text-gradient bg-gradient-to-r from-primary-lime to-primary-cyan bg-clip-text text-transparent">360</span></span>
            </div>
        </>,
        width: 190,
        height: 50,
    },
    {
        id: 3,
        name: "Viibre",
        logo: Viibre,
        width: 100,
        height: 50,
    },
    {
        id: 5,
        name: "FixNotify",
        logo: <>
            <div className="flex items-center space-x-0 mr-5">
                <Image src={Fixnotify} alt="FixNotify" width={40} height={30} />
                <span className="text-lg font-black text-gray-900"> FixNotify</span>
            </div>
        </>,
        width: 190,
        height: 50,
    },
    {
        id: 6,
        name: "Inventa",
        logo: <>
            <div className="flex items-center space-x-0 mr-5">
                <Image src={Inventa} alt="Inventa" width={50} height={100} className="scale-[300%] -translate-y-1.5" />
            </div>
        </>,
        width: 190,
        height: 50,
    },
];

export default projectLogos;