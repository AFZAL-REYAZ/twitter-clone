import React, { useState } from 'react'
import profile from '../accets/profile.jpeg'
import { FaCalendarCheck, FaRegImage, FaRegListAlt, FaRegSmile } from "react-icons/fa";
import db from './firebaseCom';
import firebase from 'firebase/compat/app';

const CreateTweet = () => {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      displayName: "reyazafzal",
      userName: "afzal__reyaz",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: { profile }
    })
    setTweetMessage("");
    setTweetImage("");
  }
  return (
    <div className='create'>
      <div className='create__first'>
        <div className='create__img'>
          <img src={profile} alt='loding' />
        </div>
        <div className='create_input'>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type='text'
            className='create_control'
            placeholder='Whats happning' />
        </div>
      </div>
      <div className='create__second'>
        <div className='create__icons' >
          <div className='create_input'>
            <FaRegImage className="ic" />
            <input
              onChange={(e) => setTweetImage(e.target.value)}
              value={tweetImage}
              className='create_control'
              placeholder='Enter Only image URL' />
          </div>
        </div>
        <button className='create__btn' onClick={sendTweet}>Tweet</button>
      </div>
    </div>
  )
}

export default CreateTweet
