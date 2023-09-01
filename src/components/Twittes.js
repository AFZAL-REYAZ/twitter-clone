import { useEffect, useState } from 'react'
import CreateTweet from './CreateTweet'
import Posts from './Posts'
import firebase from 'firebase/compat/app';
import Drawers from './Drawers';

const Twittes = () => {
  const [post,setPost]=useState([]);

  useEffect(()=>{
    const db=firebase.firestore();
    db.collection('posts')
    .get()
    .then((snapshot)=>{
      if(snapshot.docs.length>0){
        snapshot.docs.forEach((doc)=>{
          setPost((prev)=>{
            return[...prev,doc.data()];
          });
        });
      }
    });
  },[]);

  return (
    <div className='posts'>
      <div className='posts__home'>
        <Drawers/>
        <h2>Home</h2>
      </div>
      <CreateTweet/>
      {
        post.map((post) =>{
          return(
          <Posts
            key={post.key}
            displayName={post.displayName}
            userName={post.userName}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
          )
        })
      }
    </div>
  )
}

export default Twittes
