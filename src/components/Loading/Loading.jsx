import LoadingImage from "../../../public/assets/logo/logo.webp";

const Loading = () => {
    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-xl flex justify-center items-center z-101">
            <img src={LoadingImage} alt="loading" className="w-2/3 md:w-1/4" />
        </div>
    );
}

export default Loading;