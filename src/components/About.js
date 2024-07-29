import React from 'react';
//Countup
import CountUp from 'react-countup';
//intetsection observer hook
import {useInView} from 'react-intersection-observer';
//motion
import{motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants';
import { Link } from 'react-scroll';
const About = () => {
  const [ref,inView] =useInView({
    threshold:0.5,
  });
  return( 
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20
          lg:gap-y-0 h-screen'>
          {/* img*/}
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden' 
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
          className='flex-1 bg-as2 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          </motion.div>
          {/*text*/}
          <motion.div
            variants={fadeIn('left',0.5)}
            initial='hidden' 
            whileInView={'show'}
            viewport={{once:false,amount:0.3}}
            className='flex-1'>
            <h2 className='h2 text-accent font-semibold'>About me</h2>
            <h3 className='h3 mb-4'>
            Innovative student engineer with a knack for problem-solving and a drive to create impactful solutions.
            </h3>
            <p className='mb-6'>
            I am a 3rd-year CSE student at Netaji Subhash Engineering College in Kolkata,
                 West Bengal.I have experience in MERN stack development through working on various projects
                  and i am passionate about coding and designing,with expertise in Java, C++ and C,having solved 
                  over 500+ Leetcode problems.Beyond tech,I'm a sports lover and love to play football lover.
            </p>
            {/*stats*/}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              
              <div>
                <div className='text-[40px] font-tertiary font-semibold text-accent mb-2'>
                  {inView?<CountUp start={0} end={5} duration={5}/>:null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br/>
                  in progress.
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary font-semibold text-accent mb-2'>
                  {inView?<CountUp start={0} end={3} duration={5}/>:null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Completed <br/>
                  projects.
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>
                  <Link 
                      to='contact'
                      activeClass='active'
                      smooth={true}
                      spy={true}
                      >
                      Contact Me
                    </Link>
                </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
