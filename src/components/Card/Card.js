import React from 'react'
import styles from './card.module.css'
import { useNavigate } from "react-router-dom";
import About from '../About/About';
import fotoNow from './ShmanAleksandr.jpg'

function Card() {

  // let fotoNow = 'https://downloader.disk.yandex.ru/preview/a0cd2ba25ae5f21f4427f9b6b76050246f68ebc07651530bab51d855bbe58dc0/6500a6bc/zLmISv9jNFlE3Dg3THNOEpSxFnBI7yTz3VJIH2nZqNtvE4-En-k_PVvpqPClBb_kUzL6BorgwHlLhazeCC8Pcw%3D%3D?uid=0&filename=git817.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=359x480'
  const fotoYong = 'https://sun9-53.userapi.com/impf/c21/v21341/8de/j7rNhtCK570.jpg?size=359x480&quality=96&sign=91b0672f454f12a7ac245c1aad862b18&type=album'
  const navigate = useNavigate();

  const buttonChange = () => {
    navigate(`/`);
  };
  const buttonChangeStars = () => {
    navigate(`/star`);
  };
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.wrapAbout}>
          <img width={300} height={400} alt="моя аватарка сейчас" className={styles.foto} src={fotoNow} />
        </div>
        <div className={styles.wrapAbout}>
          <img width={300} height={400} alt="моё фото когда-то" className={styles.foto} src={fotoYong} />
        </div>
      </div>
      <div>
        <a href="https://github.com/AleksandrShman/YandexPracicum" target="_blank" rel="noopener noreferrer">
          <button className={styles.btn}>Github</button>
        </a>
      </div>
      <About />
      <div className={styles.btnWrap}>
        <button className={styles.btn} onClick={buttonChange}>
          Задание 1
        </button>
        <button className={styles.btn} onClick={buttonChangeStars}>
          Задание *
        </button>
      </div>
    </>
  )
}

export default Card