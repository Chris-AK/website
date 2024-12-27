import pic1 from "../pic1.jpg"
import pic2 from "../pic2.jpg"
import pic3 from "../pic3.jpg"
import pic4 from "../pic4.jpg"
import pic5 from "../pic1.jpg"
import pic6 from "../pic2.jpg"
import pic7 from "../pic3.jpg"

import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const images = [pic1,pic2,pic3,pic4,pic5,pic6,pic7]

export default function About() {
    
  const [animation, setAnimation] = useState({
    direction: 'stop',
    imageIndex: 0,
  });

  const getSecondImageIndex = (
    currIndex,
    dir
  ) => {
    return dir === 'stop'
      ? currIndex
      : (currIndex + (dir === 'right' ? 1 : -1) + images.length) %
          images.length;
  };

  const onTransitionEnd = () => {
    setAnimation((prevAnimation) => ({
      ...prevAnimation,
      direction: 'stop',
      imageIndex: getSecondImageIndex(
        prevAnimation.imageIndex,
        prevAnimation.direction
      ),
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (animation.direction === 'stop') {
        setAnimation((prevAnimation) => ({
          ...prevAnimation,
          direction: 'left',
        }));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [animation.direction]);

    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-white">

            <p className="mb-12 leading-relaxed">
            On weekdays, I make peoples lives esier though cheap and reliable energy, by imbuing intellingence in renewable systems, both municipal and mobile. I'm an embedded firmware engineer and C, Python and Rust are my trusty tools. 
            On weekends, I aide peoples mental health at scale. I do this by enabling them to feel the full range of human emotion through music and poetry. I Dj with an Afrobeats base, fused with genres from EDM to J-pop to Country  
            Lastly, I'm passionately interested in the empowerment of Sub Saharan Africa and other developing countries through direct philantropy. I founded a charity that brings togehter people of generosity and intellignece to make lasting difference in deserving communities
            </p>
          </div>
          <div className=" carousel lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="image firstImage object-cover object-center rounded"
            alt="Pic"
            src={images[animation.imageIndex]}
            data-animate={animation.direction}
            onTransitionEnd={onTransitionEnd}
          />
          <img
            className="image object-cover object-center rounded"
            alt="Pic2"
            src={
            images[getSecondImageIndex(animation.imageIndex, animation.direction)]}
          />
          </div>
        </div>
      </section>
    );
  }


