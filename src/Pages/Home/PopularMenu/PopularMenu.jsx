import { useEffect, useState } from "react";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import { data } from "autoprefixer";
import MenuItem from "../Home/Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu]= useMenu()
  console.log(menu);
  const Popular = menu.filter(item=>item.category === 'popular')
  return (
    <section>
      <CategoryTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></CategoryTitle>
      <div className="lg:grid gap-5 lg:grid-cols-2">
        {
            Popular.map(item=><MenuItem key={item.id} item={item}></MenuItem> )
        }
      </div>
      <div className="flex justify-center">
  <button className="btn btn-outline border-0 border-b-4 shadow-lg ">View All Menu</button>
</div>
    </section>
  );
};

export default PopularMenu;
