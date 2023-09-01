import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TrendsKeyword = () => {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        const getAllTrendingData = () => {
            try {
                axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=56582f70c63d458db036c3ae486d74c7&q=india")
                    .then((responce) => {
                        console.log("axios new data", responce);
                        setTrending(responce)
                    })
            }
            catch (err) {
                console.log(err);
            }
        }
        getAllTrendingData()
    }, []);

    return (
        <div className='keywords'>
            <div className='key'>
                <div className='keyword__heading'>
                    <h4>Trends for you</h4>
                </div>
                <div className='keyword__heading'>
                    <p>India on Moon</p>
                </div>
                <div className='country'>Future of world is India</div>
                <div className='keyword__heading'>
                    <p>Gold Medel</p>
                </div>
                <div className='country'>Niraj Chopra is first ...</div>
            </div>
        </div>
    )
}

export default TrendsKeyword
