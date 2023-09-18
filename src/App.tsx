import "./App.css";

//@ts-ignore
import sample from "./assets/background.mp4";
import { differenceInDays } from "date-fns";

export const App = () => {
    const result = differenceInDays(new Date(2024, 3, 19), new Date());

    return (
        <div className="h-screen flex justify-center items-center relative">
            <video className="absolute h-screen w-screen object-cover" autoPlay loop muted>
                <source src={sample} type="video/mp4" />
            </video>

            <div className="h-20 rounded flex justify-center items-center z-20 w-1/3 md:w-full flex-col">
                <h1 className="text-6xl text-slate-50 select-none">Bruiloft Eef & JW</h1>
                <h2 className="text-4xl text-slate-50 select-none mt-2">over {result} dagen</h2>
            </div>
        </div>
    );
};

export default App;
