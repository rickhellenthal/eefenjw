import CountUp from "react-countup";
import "./App.css";

//@ts-ignore
import sample from "./assets/background1080.mp4";
import { differenceInDays } from "date-fns";
import { useEffect } from "react";

export const App = () => {
    const setViewHeight = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    useEffect(() => {
        window.addEventListener("resize", () => {
            setViewHeight();
        });

        setViewHeight();
    }, []);

    const result = differenceInDays(new Date(2024, 3, 19), new Date());
    return (
        <>
            <div className="page flex justify-center items-center relative bg-black">
                <video
                    className="absolute h-full w-full object-cover overflow-hidden object-top"
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture>
                    <source src={sample} type="video/mp4" />
                </video>

                <div className="h-20 rounded flex justify-center items-center z-20 w-3/6 md:w-full flex-col">
                    <h1 className="text-6xl text-slate-50 select-none eefenjwfont">Bruiloft Eef & JW</h1>
                    <h2 className="text-3xl text-slate-50 select-none mt-2 italic w-full md:w-auto whitespace-nowrap">
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
