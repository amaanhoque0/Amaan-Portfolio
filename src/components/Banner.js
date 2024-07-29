import React from 'react';
//images
import Image from '../assets/a2.svg';
//icons
import {FaGithub,FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
//animation
import {TypeAnimation} from 'react-type-animation';
//motion
import{motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants';
import { Link } from 'react-scroll';

const Banner = () => {
  return( 
   <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/*text*/}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up',0.4)}
          initial='hidden' 
          whileInView={'show'}
          viewport={{once:false,amount:0.7}}
          className='text-[55px] font-semibold leading-[1] lg:text-[110px]'>
            Amaan <span>Hoque</span>
            </motion.h1>
            <motion.div
            variants={fadeIn('up',0.4)}
            initial='hidden' 
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}
            className='mr-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation 
                sequence={[
                  'Learner.',
                   2000,
                   'Designer.',
                    2000,
                  'Programmer.',
                    2000,
                  'Developer.',
                   2000
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div> 
              <motion.p
              variants={fadeIn('up',0.5)}
              initial='hidden' 
              whileInView={'show'}
              viewport={{once:false,amount:0.7}}
              className='mb-8 max-w-lg mx-auto lg:mx-0 font-extrabold'>
                Aspiring Engineer | Passionate about Designing, Innovation and Problem-Solving
              </motion.p>
              <motion.div
              variants={fadeIn('up',0.6)}
              initial='hidden' 
              whileInView={'show'}
              viewport={{once:false,amount:0.7}}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                <button className='btn btn-lg'>
                  <Link 
                    to='contact'
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    >
                    Contact me
                  </Link>
                  
                </button>
                <a href='#' className='text-accent text-[20px] font-semibold uppercase leading-[1] btn-link'>
                <Link 
                    to='about'
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    >
                    About Me
                  </Link>
                  </a>
                
              </motion.div>
              {/*socials*/}
              <motion.div
              variants={fadeIn('up',0.7)}
              initial='hidden' 
              whileInView={'show'}
              viewport={{once:false,amount:0.7}}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                <a href='https://www.facebook.com/amaan.hoque'>
                  <FaFacebook />
                </a>
                <a href='https://www.linkedin.com/in/amaan-hoque-ab41b4203/'>
                  <FaLinkedin />
                </a>
                <a href='https://github.com/amaanhoque0'>
                  <FaGithub />
                </a>
                <a href='https://www.instagram.com/amaan__hoque_/'>
                  <FaInstagram/>
                </a>
              </motion.div>
              </div>
        {/*image*/}
        <motion.div
        variants={fadeIn('down',0.5)}
        initial='hidden' 
        whileInView={'show'}
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={Image} alt=''/>
        </motion.div>
      </div>
    </div>
   </section>

  );
};

export default Banner;
