import React from 'react'
import profile from '../accets/profile.jpeg'
import { FaComment, FaExternalLinkAlt, FaHeart, FaRegChartBar, FaRegCheckCircle } from 'react-icons/fa'

const Posts = ({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar,
    timestamp
}) => {
    return (
        <div className='postsjs'>
            <div className='postsjs__first'>
                <div className='postsjs__first__img'>
                    <img src={profile} alt='loading' />
                </div>
                <div className='postsjs__first__name'>
                    <strong>{displayName}</strong><FaRegCheckCircle className='verify' />
                </div>
                <div className='postsjs__first__username'>
                    {userName} <span>{timestamp}</span>
                </div>
            </div>
            <div className='postjs__details'>
                <div className='postjs__details__msg'>{text}</div>
                <div className='postjs__details__img'>
                    <img src={image} alt='' />
                </div>
                <div className='reactions'>
                    <span>
                        <FaComment className='re' />5
                    </span>
                    <span>
                        <FaRegChartBar className='re' />10
                    </span>
                    <span>
                        <FaHeart className='re' />200
                    </span>
                    <span>
                        <FaExternalLinkAlt className='re' />6
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Posts
