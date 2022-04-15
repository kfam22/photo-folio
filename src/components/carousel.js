import {motion} from 'framer-motion';
import {useRef, useEffect, useState} from 'react';
import images from '../images';

function Carousel() {

    const [width, setWidth] = useState(0);
    const carousel = useRef();
  
    useEffect(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);
    
    return (
       <motion.div ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}}>
       <motion.div drag='x' dragConstraints={{right:0, left: -width}} className='inner-carousel'>
          {images.map(image => {
              console.log("current image", image)
            if(typeof image === 'object'){
                console.log("we're inside the if statement", image, "image.title", image.collection1.title)
                return(
                <motion.div className='item imageInfo'>
                    <div>
                    <h1>{image.collection1.title}</h1>
                    <p>{image.collection1.date}</p>
                    <p>{image.collection1.location}</p>
                    <p>{image.collection1.info}</p>
                    <p>------></p>
                    </div>
                </motion.div>
                )
            }
            else {return(
              <motion.div className='item' key={image}>
                <img src={image} alt=''/>
              </motion.div>
            );}
          })}
       </motion.div>
     </motion.div>  
    )
   
}

export default Carousel;
