import CountUp from "react-countup";
import "./App.css";

//@ts-ignore
import sample from "./assets/background1080.mp4";
import { differenceInDays } from "date-fns";

export const App = () => {
    const result = differenceInDays(new Date(2024, 3, 19), new Date());
    return (
        <>
            <div className="page flex justify-center items-center relative bg-white">
                <video
                    className="absolute h-full w-full object-cover overflow-hidden object-top"
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture>
                    <source src={sample} type="video/mp4" />
                </video>

                <div className="h-20 rounded flex justify-center items-center z-20 w-1/3 md:w-full flex-col">
                    <h1 className="text-6xl text-slate-50 select-none eefenjwfont">Bruiloft Eef & JW</h1>
                    <h2 className="text-3xl text-slate-50 select-none mt-2 italic text-center w-full">
                        nog <CountUp start={500} end={result} duration={3} /> dagen
                    </h2>
                </div>
            </div>
            {/* <div className="page ">
                <h1 className="text-6xl select-none">Test</h1>
            </div> */}
        </>
    );
};

export default App;
