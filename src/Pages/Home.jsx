import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from './components/Slider';
import HomeData from './components/HomeData'
import Aboutfacility from './components/Aboutfacility';
import Classessfacility from './components/Classessfacility';
import MeetourTrainers from './components/MeetourTrainers';

function Home() {
  
  return (
    <div className='space-y-10 space-x-10'>
  <Slider/>
{/* <HomeData/> */}
{/* <Aboutfacility  /> */}
{/* <Classessfacility/> */}
{/* <MeetourTrainers/> */}
    </div>
  );
}

export default Home;
