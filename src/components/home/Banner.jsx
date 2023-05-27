import banner from "/banner/banner.png"
import img from "/banner/bannerImg.png"
const Banner = () => {
    return (
        <div className="bg-[url('/banner/banner.png')] bg-cover w-full h-auto">
            <img className="w-full h-screen object-cover" src={banner} alt="" />
            <div className="absolute top-[20%] container md:grid grid-cols-2 gap-5  text-white left-0 right-0 ">
                <div>
                    <h2 className=" text-4xl md:text-[75px] font-bold leading-tight">
                    Your Best Medical <br/> Help Center
                    </h2>
                    <p className="mt-4">Lorem Ipsum is simply dummy text they are printing <br /> typesetting has been the industry’s stardard.</p>
                    <button className="btn mt-5">All Service</button>
                </div>
                <div>
                    <img className="w-full" src={img} alt="" />                    
                </div>
            </div>
        </div>
    );
};

export default Banner;