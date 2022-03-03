import { Chat, EmojiFlags, ExpandMoreOutlined, People, Storefront, VideoLibrary } from '@mui/icons-material';
import React from 'react';
import './Sidebar.css'
import SidebarRow from './SidebarRow';

function Sidebar() {
  return <div className='sidebar'>
      <SidebarRow src='./images/download.jpeg' title='Shahbaz Sialvi'/>
      <SidebarRow Icon={EmojiFlags} title='Pages'/>
      <SidebarRow Icon={People} title='friends'/>
      <SidebarRow Icon={Chat} title='Messenger'/>
      <SidebarRow Icon={Storefront} title='Marketplace'/>
      <SidebarRow Icon={VideoLibrary} title='Videos'/>
      <SidebarRow Icon={ExpandMoreOutlined} title='See More'/>

  </div>;
}


export default Sidebar;
