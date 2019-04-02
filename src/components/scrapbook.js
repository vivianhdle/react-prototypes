import React from 'react';
import './scrapbook.css';
import Image from './scrapbook_images'
import imageData from './image_data'

export default props => {
    const images = imageData.map((img,index)=>{
        return (
            <Image key={index} about={img}/>
        )
    })
    return (
        <div className="scrapbook-container">
            {images}
        </div>
    )
}