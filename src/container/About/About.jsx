import React, { useEffect, useState } from 'react'
import './About.scss';
import { motion } from 'framer-motion';
// import { images } from '../../constants';
import { urlFor, client } from '../../client';
import { AppWrapper } from '../../wrapper/AppWrapper';
import MotionWrap from '../../wrapper/MotionWrap';


// const abouts = [
//   {title:"Web Development",description:'I am a good  web developer',imgUrl:images.about01},
//   {title:"Frontend Development",description:'I have a good experience with advanced frontend development libraries such as ReactJs & TailwindCSS',imgUrl:images.about02},
//   {title:"MERN Stack",description:'I can create efficient Full Stack websites using MERN',imgUrl:images.about03},
//   {title:"Backend Development",description:'I am also good at creating APIs for backend',imgUrl:images.about04},
// ]



const About = () => {
  
  const [abouts,setAbouts] = useState([]);

  useEffect(()=>{
    const query = '*[_type=="abouts"]';
    client.fetch(query)
    .then((data)=>{ setAbouts(data);})
  },[])
  
  return (
    <>
      <div>
        <h2 className='head-text'>I Know That
          <span> Good Development </span>
          means
          <span> Good Business </span>
        </h2>

      </div>
      <div className='app__profiles'>
          {abouts.map((about,index)=>(
            <motion.div
              whileInView={{opacity:1}}
              whileHover={{scale:1.1}}
              transition={{duration:0.5, type:'tween'}}
              className='app__profile-item'
              key={about.title + index}
            >
                <img src={urlFor(about.imgUrl)} alt={about.title}/>
                <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
                <p className='p-text' style={{marginTop:10}}>{about.description}</p>

            </motion.div>
          ))}
      </div>
    </>
  )
}

export default AppWrapper(
  MotionWrap(About,'app__about'),
  'about',
  "app__whitebg"
);