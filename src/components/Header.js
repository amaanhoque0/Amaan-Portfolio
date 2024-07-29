import React from 'react';
//images
import Logo from '../assets/11.svg'
const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/*logo*/}
        <a href='#'>
          <img src={Logo} alt='' />
        </a>
        {/*button*/}
        <a href='#'>
          <button className='btn btn-sm font-semibold'>Download CV</button>
        </a>
      </div>
    </div>
  </header>;
};

export default Header;
