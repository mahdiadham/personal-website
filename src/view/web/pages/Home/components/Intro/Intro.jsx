import IntroImage from "../../../../../../assets/images/elements/intro-image.webp";

const Intro = () => {
    return (
        <div className="container flex justify-between items-center">
            <div>
                <div>
                    <div className="size-10 overflow-hidden shadow-neon-sm flex justify-center items-center">
                        <img src={IntroImage} alt="intro-image" className="size-10" />
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
            <div className="rounded-custom shadow-custom-neon overflow-hidden w-1/2">
                <img src={IntroImage} alt="intro-image" />
            </div>
        </div>
    );
}

export default Intro;