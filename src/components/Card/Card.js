import React from 'react'
import styles from './card.module.css'
import { useNavigate } from "react-router-dom";
import About from '../About/About';

function Card() {

  let fotoNow = 'https://img.hhcdn.ru/photo/639413678.jpeg?t=1694467671&h=oKMRUoJpNZzSZKFm6deXrA'
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
          <img alt="моя аватарка сейчас" className={styles.foto} src={fotoNow} />
        </div>
        <div className={styles.wrapAbout}>
          <img alt="моё фото когда-то" className={styles.foto} src={fotoYong} />
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