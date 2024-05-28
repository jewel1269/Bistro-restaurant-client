import { Helmet } from "react-helmet-async";
import BistroBoss from "../BistroBoss/BistroBoss";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import ChefRecommad from "./ChefRecommad/ChefRecommad";
import ContactMini from "./MiniContact/ContactMini";
import Banner from "./Shared/Navbar/Banner/Banner";
import Category from "./Shared/Navbar/Category/Category";


const Home = () => {
    return (
        <div>
            <Helmet><title>Bistro Boss|| Home</title></Helmet>
            <Banner/>
            <Category/>
            <BistroBoss/>
            <PopularMenu/>
            <ContactMini/>
            <ChefRecommad/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;