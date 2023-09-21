import CountUp from "react-countup";
import "./App.css";

//@ts-ignore
import sample from "./assets/background1080.mp4";
import { differenceInDays } from "date-fns";
import { useEffect, useState } from "react";

// TODO: Merge other laptop branch
export const App = () => {
    const [canPlay, setCanPlay] = useState(undefined);

    const setViewHeight = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    const checkIfBackgroundVideoIsPlaying = () => {
        setTimeout(() => {
            var vid = document.getElementById("background-video-id");
            if (vid) {
                //@ts-ignore
                console.log(vid.paused);
                //@ts-ignore
                setCanPlay(!vid.paused);
            }
        }, 750);
    };

    useEffect(() => {
        window.addEventListener("resize", () => {
            setViewHeight();
        });

        setViewHeight();
        checkIfBackgroundVideoIsPlaying();
    }, []);

    const result = differenceInDays(new Date(2024, 3, 19), new Date());
    return (
        <>
            <div className={`page flex justify-center items-center relative bg-black ${canPlay ? "" : "ankeveen-bg"}`}>
                {canPlay !== false && (
                    <video
                        id="background-video-id"
                        className="absolute h-full w-full object-cover overflow-hidden object-top"
                        autoPlay
                        loop
                        muted
                        playsInline
                        disablePictureInPicture>
                        <source src={sample} type="video/mp4" />
                    </video>
                )}

                <div className="h-20 rounded flex justify-center items-center z-20 flex-col">
                    <h1 className="text-6xl text-slate-50 select-none font-rumini w-3/5 md:w-full">
                        Bruiloft Eef & JW
                    </h1>
                    <h2 className="text-3xl text-slate-50 select-none mt-2 w-3/5  whitespace-nowrap md:w-auto font-saroja ">
                        nog <CountUp start={500} end={result} duration={3} /> nachtjes
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
