import React from 'react';
import './Feed.css'
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
function Feed() {
  return <div className='feed'>
      {/* StoreReel */}
        <StoryReel />
      {/* MessageSender */}
        <MessageSender />
      {/* Posts */}
        <Post 
            profilePic='https://image.shutterstock.com/image-vector/bearded-men-face-hipster-character-260nw-634089671.jpg'
            message=" this is a simple post"
            timestamp="3:33"
            username="Shahbaz Sialvi"
            image="https://image.shutterstock.com/image-vector/bearded-men-face-hipster-character-260nw-634089671.jpg"
        />
        <Post />
        <Post />
        <Post />
  </div>;
}

export default Feed;
