import React from 'react'
import { PushToTalkButtonContainer, PushToTalkButton, ErrorPanel } from '@speechly/react-ui'
import { Grid, IconButton } from '@material-ui/core';
import useStyles from './Styles'
import CardDetails from './app/Components/CardDetails/CardDetails';
import MainCard from './app/Components/MainCard/MainCard';

import './App.css'
import logo from './Assets/logo-white.png'
import backgroud from './Assets/hero.jpg'

import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import PersonIcon from '@material-ui/icons/Person';
import StarIcon from '@material-ui/icons/Star';
import TwitterIcon from '@material-ui/icons/Twitter';

import image1 from '../src/Assets/1.jpg'
import image5 from '../src/Assets/7.jpg'
import image2 from '../src/Assets/2.jpg'
import image3 from '../src/Assets/3.jpg'
import image4 from '../src/Assets/4.jpg'
import image6 from '../src/Assets/6.jpg'
import image8 from '../src/Assets/8.jpg'

import city1 from '../src/Assets/berlin.jpg'
import city2 from '../src/Assets/lisbon-3.jpg'
import city3 from '../src/Assets/london.jpg'
import city4 from '../src/Assets/lisbon-3.jpg'


function App() {
  const classes = useStyles()


  return (
    <>
      {/* <div>
        <Grid className={classes.grid} container alignItems='center' justify='center' spacing={0} style={{height:'100vh'}}>
          <Grid item xs={12} sm={4}>
            <CardDetails title='Income' price={120} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <MainCard />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardDetails title='Expense' price={70} />
          </Grid>
        </Grid>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
          <ErrorPanel />
        </PushToTalkButtonContainer>
      </div> */}

      <div>


      <div 
      style={{
        backgroundImage: `linear-gradient( rgba(0, 01, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${backgroud})`,
      }}
        className='background'
      >
        <div className='navbar_container'>
            <div className='logo'>
              <img src={logo} alt='Logo' />
            </div>
            <div className='links'>
                <div className='link'>Food delivery</div>
                <div className='link'>How it works</div>
                <div className='link'>Our City</div>
                <div className='link'>Sign up</div>
            </div>
        </div>

        <div className='text_container'>
          <p>
            GOODBYE JUNK FOOD. <br/>
            HELLO SUPER HEALTHY MEALS.
          </p>
          <div className='btn_group'>
            <button className='btn_hungary'>I'm Hungary </button>
            <button className='btn_more'>Show me more</button>
          </div>
        </div>
      </div>

      </div>

      
    </>

);
}

export default App;
