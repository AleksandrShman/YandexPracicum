import React from 'react'
import video from './video.mp4'
import styles from './video.module.css'

function Video() {
  return (
   <video className={styles.video} width="750" height="500" controls >
    <source src={video} type="video/mp4" />
   </video>
  )
}

export default Video