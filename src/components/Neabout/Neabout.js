import React from 'react'
import styles from './neabout.module.css'


function Neabout() {
 let urlFoto = 'https://habrastorage.org/getpro/moikrug/uploads/user/100/062/302/6/avatar/medium_cfff34e31b282cce5c4306d341730f3c.jpeg'
 return (
  <>
   <div className={styles.wrapNeabout}>
   </div>
   <div>
    <img alt="моя аватарка" src={urlFoto} />
   </div>
  </>
 )
}

export default Neabout