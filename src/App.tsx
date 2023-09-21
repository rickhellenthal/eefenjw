import CountUp from "react-countup";
import "./App.css";

//@ts-ignore
import sample from "./assets/background1080.mp4";
import { differenceInDays } from "date-fns";
import { useEffect, useState } from "react";

export const App = () => {
    const [canPlay, setCanPlay] = useState(true);

    const setViewHeight = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    const checkIfBackgroundVideoIsPlaying = () => {
        if (window.innerWidth > 800) {
            return;
        }

        var videoElement = document.getElementById("background-video-id");
        if (videoElement) {
            setTimeout(() => {
                var videoElement = document.getElementById("background-video-id");
                if (videoElement) {
                    //@ts-ignore
                    var currentTime: number = videoElement.currentTime;

                    if (currentTime === 0) {
                        setCanPlay(false);
                    }
                }
            }, 2500);
        }
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
            <div
                id="video-container"
                className={`page flex justify-center items-center relative bg-black ${canPlay ? "" : "ankeveen-bg"}`}>
                {canPlay && (
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
                    <h2 className="text-3xl text-slate-50 select-none mt-2 w-3/5  whitespace-nowrap md:w-auto font-nevermind ">
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
