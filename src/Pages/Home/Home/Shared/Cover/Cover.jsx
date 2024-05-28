import { Parallax } from 'react-parallax';

const Cover = ({cover, title}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={cover}
        bgImageAlt="the menu"
        strength={-200}
    >
           <header>
    <div
        className="w-full lg:h-[700px]  bg-center bg-cover h-[38rem]"
        
    >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
                <h1 className="text-7xl mb-3 font-bold text-white lg:text-4xl">
                {title}
                </h1>
                <p className="text-white uppercase text-xl">Would you like to try a dish?</p>
            </div>
        </div>
    </div>
</header>
    </Parallax>
     

    );
};

export default Cover;





