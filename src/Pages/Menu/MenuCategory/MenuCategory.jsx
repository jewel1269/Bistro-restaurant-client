import { NavLink } from "react-router-dom";
import Cover from "../../Home/Home/Shared/Cover/Cover";
import MenuItem from "../../Home/Home/Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, coverImg, title }) => {
  return (
    <div className="pt-8 lg:ml-28 lg:mr-28">
      {title && <Cover cover={coverImg} title={title} />}
      
      <div className="lg:grid gap-5 lg:grid-cols-2 mt-16">
        {items && items.map(item => <MenuItem key={item.id} item={item} />)}
      </div>
      
      <div className="flex justify-center items-center">
        <NavLink to={`/order/${title}`}>
          <button className="btn btn-sm btn-outline mb-5 border-0 border-b-4">Order Now</button>
        </NavLink>
      </div>
    </div>
  );
};

export default MenuCategory;
