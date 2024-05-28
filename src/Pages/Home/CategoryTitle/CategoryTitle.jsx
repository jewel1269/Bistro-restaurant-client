
const CategoryTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center md:w-3/12 mx-auto ">
            <h3 className="text-2xl italic text-orange-400 mb-3 font-semibold">{subHeading}</h3>
            <h1 className="text-4xl font-bold mb-8 border-y-2 uppercase mt-3">{heading}</h1>
           
        </div>
    );
};

export default CategoryTitle;