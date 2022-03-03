import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import './Header.css'
import { Avatar, IconButton } from '@mui/material';
import { Add, ExpandMore, Forum, NotificationsActive, SearchOutlined } from '@mui/icons-material';


function Header() {
  return <div className='header'>
      <div className='header__left'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/FaceB.png" alt="facebook logo" />
            <div className='header__input'>
            <SearchOutlined />
            <input placeholder='Search Facebook' type="text"/>
            
            </div>
      </div>
      <div className='header__center'>
          <div className='header__option header__option--active'>
              <HomeIcon fontSize='large'/>
              
          </div>
          <div className='header__option'>
              <FlagIcon fontSize='large'/>
          </div>
          <div className='header__option'>

              <SubscriptionOutlinedIcon fontSize='large'/>
          </div>
          <div className='header__option'>
          <StorefrontOutlinedIcon fontSize='large'/>

          </div>
          <div className='header__option'>
          <SupervisedUserCircleIcon fontSize='large'/>

          </div>

      </div>
      <div className='header__right'>
          <div className='header__info'>
              <Avatar />
              <h4>Shahbaz Sialvi</h4>
          </div>
          <IconButton>
              <Add />
          </IconButton>
          <IconButton>
              <Forum />
          </IconButton>
          <IconButton>
              <NotificationsActive />
          </IconButton>
          <IconButton>
              <ExpandMore />
          </IconButton>
      </div>

  </div>;
}

export default Header;
