import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'
import Heart from '../../assets/heart.png'
import hero_img from '../../assets/hero_image.png'
import hero_img_back from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'
import { Header } from '../Header/Header'
import NumberCounter from 'number-counter'


 const Hero = () => {

    const animationTransition = {type: 'spring', duration: 3}; 
    const resMobile = window.innerWidth<= 768 ? true : false ;

  return (
    <div className='hero' id='Home'>

        <div className='blur h-blur'></div>

        <div className='left-h'>

        <Header />


            <div className='the-best-ad'>

                  { /* animation */ }
                <motion.div 
                    initial={{left: resMobile ? '165px' : '238px'}}
                    whileInView={{left: '8px'}}
                    transition= {{...animationTransition, type: 'tween'}}
                    className='animation'>
                </motion.div>

                
                <span>the best fitness club in the town</span>
            </div>


            <div className='hero-text'>
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>

                <div><span>Ideal body</span></div>

                <div>
                    In here we will help to shape and build your ideal body and live up your life to fullest.
                </div>
            </div>

            <div className='figures'>
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay='3' preFix='+' />
                    </span>
                    <span>expert coach</span>
                </div>
                <div>
                    <span>
                        <NumberCounter end={978} start={900} delay='3' preFix='+' />
                    </span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>
                        <NumberCounter end={50} start={10} delay='2' preFix='+' />
                    </span>
                    <span>fitness programs</span>
                </div>
            </div>

            <div className='hero-buttons'>
                <buttons className='btn'>Get Started</buttons>
                <buttons className='btn'>Learn More</buttons>
            </div>

        </div>

        {/* right side */}

        <div className='right-h'>
            <button className='btn'>Join Now</button>

            <motion.div
                initial={{right: '-1rem'}}
                whileInView={{right: '4rem'}}
                transition={animationTransition}
                className='heart-rate'>

                <img src={Heart} alt='heart' />

                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>

            {/* background image */}

            <img src={hero_img} alt='' className='hero-img' />
            <motion.img 
                initial={{right: '11rem'}}
                whileInView={{right: '20rem'}}
                transition={animationTransition}
                src={hero_img_back} alt='' className='hero-img-back' 
            />

            <motion.div 
                initial={{right: '37rem'}}
                whileInView={{right: '28rem'}}
                transition={animationTransition}
                className='calories'>

                <img src={Calories} alt='calories'/>

                <div>
                    <span>Calories Burned </span>
                    <span>220 kcal</span>
                </div>
            </motion.div>
        
        </div>
    </div>
  )
}

export default Hero;
