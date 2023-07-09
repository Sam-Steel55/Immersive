'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';


const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />

      <motion.div
        variants={staggerContainer}
        initial= 'hidden'
        whileInView='show'
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
       <TypingText title="| About Metaversus" textStyles="text-center"/>

        <motion.p
          variants={fadeIn('up', 'tween', 0.2,1 )}
          className = 'mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
          >

        <span className='font-extrabold text-white'>Welcome to Immersive</span>,
        the ultimate destination for diving into the captivating world of the metaverse! Step into a new dimension where <span className='font-extrabold text-white'>reality and imagination</span>{' '}
        seamlessly blend together, offering you boundless opportunities to explore, create, and connect like never before. Immersive is not just a website; it's  <span className='font-extrabold text-white'> a gateway</span> to an extraordinary digital
        realm where virtual experiences come to life. Here, you can <span className='font-extrabold text-white'>embark</span> on thrilling adventures, build stunning virtual landscapes, and interact with a vibrant community of <span className='font-extrabold text-white'> like-minded explorers from all corners of the globe.</span> Whether you're an avid gamer, an aspiring artist, or simply curious about the limitless possibilities of the metaverse.
        </motion.p> 

        <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />

      </motion.div>

  </section>
);

export default About;
