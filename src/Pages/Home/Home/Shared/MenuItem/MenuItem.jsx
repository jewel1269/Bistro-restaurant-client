   
const MenuItem = ({item}) => {
    const {image, price, name, recipe}=item
    return (
        <div className="lg:flex mb-5 gap-3 justify-around items-center lg:ml-28 lg:mr-28 ">
           <img style={{ borderRadius: '0px 200px 200px 200px' }} className="w-[120px]" src={image} alt="" />

            <div>
                <h3 className="uppercase text-xl font-semibold">{name}------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="font-bold text-red-500">${price}</p>
        </div>
    );
};

export default MenuItem;