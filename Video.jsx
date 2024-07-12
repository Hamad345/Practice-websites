import React from 'react'
import video from '../images/Malik.mp4'

export default function Video() {
  return (
    <div>
      <video controls>
        <source src={video} type='video/mp4'/>
      </video>
    </div>
  )
}
