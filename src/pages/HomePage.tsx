import About from "../components/home/About";
import Partner from "../components/home/Partner";
import GetStarted from "../components/home/GetStarted";
import KeyPoint from "../components/home/KeyPoint";

export default function Homepage() {
    return (
        <div>
            <About />
            <Partner/>
            <GetStarted/>
            <KeyPoint/>
        </div>
    );
}