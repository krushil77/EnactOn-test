import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css';
import 'tailwindcss/tailwind.css';

const Product = () => {
  return (
    <div className="bg-black overflow-hidden">
      <CCarousel controls indicators>
        <CCarouselItem>
          <div className="flex flex-col items-center">
            <CImage className=" my-12  mx-48 pl-36" src={"/src/assets/233.jpg"} alt="slide 1" />
            <div className="text-center -mt-64 ml-24">
              <h1 className="text-black text-3xl">ONLINE ONLY</h1>
              <p className="text-gray-400 text-xl">GET 20% OFF YOUR ORDER OF $50 OR MORE Use code “Chef20”</p>
              <button className="border-4 font-semibold text-2xl text-black px-20 mb-10 mt-4">
                SHOP NOW
              </button>
            </div>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <div className="flex flex-col items-center">
            <CImage className="my-12  mx-48 pl-36" src={"/src/assets/233.jpg"} alt="slide 2" />
            <div className="text-center text-center -mt-64  ml-24">
              <h1 className="text-black text-3xl">LIMITED TIME OFFER</h1>
              <p className="text-gray-400 text-xl">SAVE ON YOUR NEXT PURCHASE WITH CODE “Chef20”</p>
              <button className="border-4 font-semibold text-2xl text-black px-20 mb-10 mt-4">
                SHOP NOW
              </button>
            </div>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <div className="flex flex-col items-center">
            <CImage className="my-12  mx-48 pl-36" src={"/src/assets/233.jpg"} alt="slide 3" />
            <div className="text-center text-center -mt-64  ml-24">
              <h1 className="text-black text-3xl">EXCLUSIVE DEALS</h1>
              <p className="text-gray-400 text-xl">JOIN OUR NEWSLETTER FOR SPECIAL OFFERS</p>
              <button className="border-4 font-semibold text-2xl text-black px-20 mb-10 mt-4">
                SIGN UP NOW
              </button>
            </div>
          </div>
        </CCarouselItem>
      </CCarousel>
    </div>
  );
};

export default Product;
