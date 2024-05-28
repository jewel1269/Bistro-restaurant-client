import CategoryTitle from "../CategoryTitle/CategoryTitle";
import featuredImage from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div className="lg:ml-28 pt-16 pb-6 bg-fixed  mt-8 lg:mr-28" style={{ backgroundImage: `url(${featuredImage})`}}>
            <CategoryTitle subHeading={"check it out"} heading={"Featured Item "}></CategoryTitle>
        <div className="md:flex bg-opacity-60 py-8 px-28 justify-center items-center lg:flex gap-5">
        <div>
            <img className="h-72 rounded-xl" src={featuredImage} alt="" />
        </div>
        <div className="md:ml-10 py-2 text-white">
            <p>Aug 20, 2029</p>
            <p>WHERE CAN I GET SOME?</p>
            <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Error voluptate <br /> facere, deserunt dolores maiores quod nobis quas quasi.
 Eaque repellat recusandae ad <br /> laudantium tempore
 consequatur consequuntur omnis ullam maxime tenetur.</p>

 <button className="btn shadow-xl btn-sm text-white border-0 border-b-4 shadow-slate-700 mt-4 hover:bg-green-600 btn-outline">Order Now</button>
            
        </div>
        </div>
        </div>
    );
};

export default Featured;