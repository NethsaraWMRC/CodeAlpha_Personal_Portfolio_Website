import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import BackgroundLayer from '../components/BackgroundLayer';
import Navigation from '../components/Navigation';
import SlideCard from '../components/SlideCard';
import { motion } from 'framer-motion';
import VideoPlayer from '../components/VideoPlayer';


const backImg1 = require('../assests/app.jpg')
const backImg2 = require('../assests/web.jpg')
const backImg3 = require('../assests/expense.jpg')
const backImg4 = require('../assests/table.jpg')

const video1 = require('../assests/videos/project1.mp4')
const video2 = require('../assests/videos/project4.mp4')
const video3 = require('../assests/videos/project2.mp4')
const video4 = require('../assests/videos/project3.mp4')

const data = [
    {
        subHead:'Menatal Health and wellness App',
        head:'Stress Management Mobile Application',
        description:"Our university collaboration with Paraqum company continues with the ongoing development of a mental health and well-being application. Leveraging frameworks like React(for admin panel) and React native for the frontend and Node.js for the backend, we're implementing personalized stress management tools, mood tracking features, and educational resources. This project underscores our commitment to addressing mental health challenges in today's demanding work environments through innovative technology solutions. This project not only demonstrated our technical skills but also highlighted our ability to collaborate with industry partners to tackle real-world challenges.",
        backImg:backImg1,
        pVideo:video1,
    },
    {
        subHead:'Photo Uploading platform',
        head:'Qpics',
        description:"Built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, this project is a user-friendly platform for uploading, organizing, and sharing photos.Users can register, log in, and upload images to their accounts. The platform allows for easy management of uploaded images and offers basic account functionalities. Additionally, visitors can browse and view all images on the platform through simple search and browsing features. Future improvements aim to enhance performance and user experience.",
        backImg:backImg2,
        pVideo:video2,
    },
    {
        subHead:'A full stack web application',
        head:'Expense Tracker Mini',
        description:"Developed using the MERN stack (MongoDB, Express.js, React.js, Node.js), this web application offers a basic model for expense tracking with room for improvement and expansion. Users can add and categorize income or expenses, apply filters to view past records, and maintain personalized profiles. The app also calculates and displays total expenses for specific days. With its user-friendly interface, this Expense Tracker provides a foundation for further enhancements and customization to meet evolving financial management needs.",
        backImg:backImg3,
        pVideo:video3,
    },
    {
        subHead:'Editable table',
        head:'Table Component',
        description:"This React-based table component offers seamless inline editing functionality, allowing users to modify table cells directly without the need for additional pop-up windows. Users can easily search within the table to locate specific data entries. The component's versatility shines through its customizable dropdown menus within table cells, offering flexibility to tailor options for different columns and functions. With its highly customizable nature, this table component serves as a dynamic solution for displaying and manipulating tabular data in web applications.",
        backImg:backImg4,
        pVideo:video4,
    },
]


function Projects() {
  const sectionRef = useRef(null);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [forceRender, setForceRender] = useState(false); 
  const [cardId, setCardId] = useState(0)
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  useEffect(() => {
    const calculateInitialHeight = () => {
      if (sectionRef.current) {
        setSectionHeight(sectionRef.current.offsetHeight);
      }
    };
    calculateInitialHeight();

    const handleResize = () => {
      if (sectionRef.current) {
        setSectionHeight(sectionRef.current.offsetHeight);
      }
      setForceRender(prevState => !prevState);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [forceRender]);

  const handleSeeMore = () => {
    setShowVideoPlayer(true); 
  };


  return (
    <motion.Box 
      style={{ display: 'flex', gap: '50px' }}
      initial={{opacity:0,}}
      animate={{opacity:1,}}
      transition={{duration:0.5, ease:'easeIn'}}
      >

     

      <BackgroundLayer backImg={data[cardId].backImg} sHeight={sectionHeight} />

      <Box>
        <Navigation page={'2'}/>
      </Box>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        color: 'white', 
        fontFamily: 'poppins', 
        height: '100vh', 
        marginLeft:'30px', 
        overflowY:'scroll',
        scrollbarWidth: 'none',
          '-ms-overflow-style': 'none', 
          '&::-webkit-scrollbar': {
              width: '0', 
          },
        }}>
        
        <motion.Typography 
          style={{ fontSize: '28px', marginTop: '110px' }}
          initial={{opacity:0, y:-50}}
          animate={{opacity:1, y:0}}
          transition={{duration:1, ease:'easeIn',delay:0.5}}
          >{data[cardId].subHead}</motion.Typography>
        
        <motion.Typography 
          style={{ fontSize: '60px', fontWeight: '700' }}
          initial={{opacity:0,}}
          animate={{opacity:1,}}
          transition={{duration:1, ease:'easeIn',delay:0.55}}
          >{data[cardId].head}</motion.Typography>

        <motion.Typography 
          style={{ fontSize: '16px', maxWidth: '700px', marginTop: '10px' }}
          initial={{opacity:0,}}
          animate={{opacity:1,}}
          transition={{duration:1, ease:'easeIn',delay:0.7}}
          >{data[cardId].description}</motion.Typography>
        <div
          style={{
            
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: '2px solid white',
            borderRadius: '10px',
            marginTop: '40px',
            marginBottom:'40px',
            width: '120px',
            height: '45px',
            cursor: 'pointer',
            transition: 'opacity 0.25s',
            '&:hover': { opacity: 0.8 },
            '&:active': { opacity: 0.6 }
          }}
          onClick={handleSeeMore}
        >
          <Typography>See more</Typography>
        </div>
      </Box>

      <Box sx={{ display: 'flex', width: '50%', justifyContent: 'center', color: 'white', }}>
        <Box ref={sectionRef} sx={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    position: 'absolute', 
                                    minHeight:'100%',
                                    maxHeight: '100%', 
                                    backgroundColor: 'rgba(150,150,150,0.6)', 
                                    width: '45vh',  
                                    padding: '0 30px',
                                    gap:'30px',
                                    overflowY:'scroll',
                                    right:'5%',
                                    '&::-webkit-scrollbar': {
                                      width: '0', 
                                    }
                                    }}>
         
          <SlideCard head={'Stress Management Mobile Application'} bottom={'( Currently in developing stage)'} marginTop={'30px'} passId={0} id={setCardId} clickedCard={cardId}/>
          <SlideCard head={'Qpics Photo Gallery'} sub={'Photo uploading platform'} bottom={'( Hope to do more improvements)'} passId={1} id={setCardId} clickedCard={cardId}/>
          <SlideCard head={'Expense Tracker Mini'} sub={'A full stack web application'} bottom={'( Learn lot of things as a beginner)'} passId={2} id={setCardId} clickedCard={cardId}/>
          <SlideCard head={'Table Component'} sub={'Editable table'} bottom={'(It was a requested work)'} passId={3} marginBottom={'30px'} id={setCardId} clickedCard={cardId}/>
          
        </Box>
      </Box>

      {showVideoPlayer && (
      
      <Box sx={{position:'absolute'}}>
        <VideoPlayer onClose={setShowVideoPlayer} video={data[cardId].pVideo}/>    
      </Box>
      
      
      )}

    </motion.Box>
  );
}

export default Projects;
