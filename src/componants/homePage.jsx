
import { useState } from "react";
import CardComponent from "./card";
import Navbar from "./navbar";
import Product from "./product";
import Section from "./section";
import ContectUs from "./contectus";

const HomePage = () => {

  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };
  
  return (
    <>
      <div className="bg-[url('/src/assets/221.jpg')] bg-cover bg-center h-screen bg-black ">
        <Navbar toggleCard={toggleCard}  />
        <div className=" flex justify-center items-end  w-full h-full ">
          <button className="hover:border-[#D29A5A] font-semibold	text-2xl	mx-24 ml-48  my-36 text-white  px-24 py-3 border-4 gap-2 ">
            Meet Chef MATT
          </button>
        </div>
        <Section />
        <Product/>
        {showCard && <CardComponent />}
        <ContectUs/>
      
      </div>
    </>
  );
};

export default HomePage;
