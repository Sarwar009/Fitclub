import {React,useState} from 'react'
import { motion } from 'framer-motion'
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

const Testimonials = () => {

    const animationTransition ={typ: 'spring', duration: 2}

    
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

  return (
    <div className='testimonials' id='Testimonials'>

        <div className='left-t'>

            <span>Testimonials</span>
            <span className='stroke-text'>what they</span>
            <span>say about us</span>

            <motion.span
                key={selected}
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                exit= {{opacity: 0, x: -100}}
                transition={animationTransition}
            >
                {testimonialsData[selected].review}
            </motion.span>
            <span style={{paddingBottom: '1rem'}}>
                <span style={{color: 'var(--orange)',paddingBottom: '1rem'}}>
                    {testimonialsData[selected].name}
                    </span>
                    <span>{' '}
                        - {testimonialsData[selected].status}
                </span>
            </span>

        </div>


        <div className='right-t'>

        { /* animation--------------------------- */}
            <motion.div
                initial={{opacity: 0, x: -100}}
                whileInView={{opacity: 1, x: 0}}
                transition={animationTransition}>
            </motion.div>

            <motion.div
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{...animationTransition, duration: 2.5}}
            >
            </motion.div>

            <motion.img 
                key={selected}
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                exit= {{opacity: 0, x: -100}}
                transition={animationTransition}
                src={testimonialsData[selected].image} alt='' 
            />

            <div className='arrows'>

                <img 
                    onClick={() => {
                        selected === 0 
                        ? setSelected(tLength - 1)
                        : setSelected((prev) => prev - 1);
                    }}
                    src={leftArrow} alt='' 
                 />

                <img 
                    onClick={() => {
                        selected === tLength - 1 
                        ? setSelected(0)
                        : setSelected((prev) => prev + 1)
                    }}
                    src={rightArrow} alt='' 
                />
            
            
            </div>

        </div>

    </div>
  )
}


export default Testimonials;