const CardComponent = () => {
    return (
      <div className="  h-full  bg-black pl-48   shadow-lg">
        <div className="grid grid-cols-2 gap-0 pt-24">
          <img 
            className="w-full h-56 object-fit"
            src="./src/assets/236.png"
            alt="Image 1"
          />
          <img
            className="w-full h-56 object-fit"
            src="./src/assets/232.jpg"
            alt="Image 2"
          />
          <img
            className="w-full h-full object-fit"
            src="./src/assets/234.jpg"
            alt="Image 3"
          />
          <img
            className="w-full h-full object-fit"
            src="./src/assets/235.jpg"
            alt="Image 4"
          />
        </div>
      </div>
    );
  };
  
  export default CardComponent;
  