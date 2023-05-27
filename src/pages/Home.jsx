import Navbar from "../components/common/Navbar";
import Banner from "../components/home/Banner";
import useTitle from "../hooks/useTitle";


const Home = () => {
    useTitle("Home")
    return (
        <main>
            <Banner/>
        </main>
    );
};

export default Home;