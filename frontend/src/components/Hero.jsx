import React from "react";


const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <h1 className='head_text'>
        Crop Protection with <br className='max-md:hidden' />
        <span className='orange_gradient '>Potato Disease Classification</span>
      </h1>
      <h2 className='desc'>
        Automate disease detection system for potato plants using our state-of-the-art CNN model.
      </h2>
      <button
        type='button'
        onClick={() =>
          window.open("https://github.com/asish918/Major-Project", "_blank")
        }
        className='black_btn'
      >
        GitHub
      </button>
    </header>
  );
};

export default Hero;
