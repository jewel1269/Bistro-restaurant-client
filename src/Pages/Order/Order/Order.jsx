import { GiPriceTag } from 'react-icons/gi';
import useMenu from '../../../Hooks/useMenu';
import orderImg from '../../../assets/shop/banner2.jpg';
import Cover from '../../Home/Home/Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { RiFocus3Line } from 'react-icons/ri';
import FoodCard from '../../../Componants/FoodCard';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Order = () => {
  const [menu] = useMenu();
  const categories = ['Salad', 'Pizza', 'Soups', 'Desserts', 'Drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const Drinks = menu.filter(item => item.category === 'drinks');
  return (
    <div>
      <Helmet>
        <title>Our Order</title>
      </Helmet>
      <Cover cover={orderImg} title={'ORDER FOOD'}></Cover>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
          <div className="flex flex-col mt-10 mb-10 justify-center items-center ">
            <TabList>
              <Tab>Salads</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soups</Tab>
              <Tab>Dessert</Tab>
              <Tab>Drinks</Tab>
            </TabList>
          </div>
          <TabPanel>
            <div className="lg:grid lg:grid-cols-4 gap-5 lg:ml-28 lg:mr-28">
              {salad.map(item => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="lg:grid lg:grid-cols-4 gap-5 lg:ml-28 lg:mr-28">
              {pizza.map(item => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="lg:grid lg:grid-cols-4 gap-5 lg:ml-28 lg:mr-28">
              {soup.map(item => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="lg:grid lg:grid-cols-4 gap-5 lg:ml-28 lg:mr-28">
              {desserts.map(item => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="lg:grid lg:grid-cols-4 gap-5 lg:ml-28 lg:mr-28">
              {Drinks.map(item => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
