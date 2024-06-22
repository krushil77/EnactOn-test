
import Carousel from "./Carousel";


const Section = () => {
  return (
    <>
      <div className="h-full bg-black pl-52 overflow-hidden ">
        <img
          className="-mt-24"
          src="/src/assets/227.png"
          alt="227.png"
          
        />
        <div className="mx-24 -mt-20">
          <h1 className="text-[#D29A5A] text-5xl underline underline-offset-8	 ">
            CHEF MATT PRODUCTS
          </h1>
          <br />
          <p className="text-white text-2xl mt-10">
            Shop Gourmet Chef Quality products from the chef matt brand. chef it
            <br />
            yourself and Thank us later
          </p>

          <div className="mt-8 w-full flex justify-center">
            <Carousel />
            
          </div>

        </div>
      
      </div>
     
    </>
  );
};

export default Section;
