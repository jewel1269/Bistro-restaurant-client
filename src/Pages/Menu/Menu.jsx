import { Helmet } from "react-helmet-async";
import Cover from "../Home/Home/Shared/Cover/Cover";
import cover from '../../assets/home/banner.jpg';
import useMenu from "../../Hooks/useMenu";
import CategoryTitle from "../Home/CategoryTitle/CategoryTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessretImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"


const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item=>item.category === 'dessert')
    const soup = menu.filter(item=>item.category === 'soup')
    const salad = menu.filter(item=>item.category === 'salad')
    const pizza = menu.filter(item=>item.category === 'pizza')
    const offered = menu.filter(item=>item.category === 'offered')
    return (
        <div>
            <Helmet><title>Menu</title></Helmet>
            <Cover cover={cover} title={"OUR MENU"}/>
            <CategoryTitle subHeading={"Don't Miss"} heading={"Todays Offer"}></CategoryTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert */}
            <MenuCategory
            items={desserts}
            title={"Desert"}
            coverImg={dessretImg}
            >
            </MenuCategory>
            <MenuCategory
            items={pizza}
            title={"Pizza"}
            coverImg={pizzaImg}
            
            >

            </MenuCategory>
            <MenuCategory
            items={soup}
            title={"Soups"}
            coverImg={soupImg}
            
            >

            </MenuCategory>
            <MenuCategory
            items={salad}
            title={"Salad"}
            coverImg={saladImg}
            
            >

            </MenuCategory>
            
        </div>
    );
};

export default Menu;