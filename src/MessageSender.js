import { InsertEmoticon, PhotoLibrary, Videocam } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, {useState} from 'react';
import './MessageSender.css'
function MessageSender() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const handlesubmit = (e) => {
        e.preventDefault();

        //some clever

        setInput("");
        setImageUrl("")
    }
  return <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar />
        <form>
        <input type='text' onChange={e => setInput(e.target.value)} value={input} placeholder='What is on you mind' />
        <input type='text' onChange={e => setImageUrl(e.target.value)} value={imageUrl} placeholder='image URL (Optional'/>
        <button onClick={handlesubmit} type='submit'>
            hidden button

        </button>

        </form>
      </div>
      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
            <Videocam style={{color:'red'}} />
            <h3>Live Video</h3>
        </div>
        <div className='messageSender__option'>
            <PhotoLibrary style={{color:'green'}} />
            <h3>Photo/Video</h3>
        </div>
        <div className='messageSender__option'>
            <InsertEmoticon style={{color:"orange"}} />
            <h3>Feeling/Activity</h3>
        </div>

      </div>
  </div>;
}

export default MessageSender;
