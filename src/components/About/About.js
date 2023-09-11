import React from 'react'
import styles from './about.module.css'
// import g from '../About'
function About() {
  
  let fotoNow = 'https://img.hhcdn.ru/photo/639413678.jpeg?t=1694467671&h=oKMRUoJpNZzSZKFm6deXrA'
  const fotoYong = 'https://sun9-53.userapi.com/impf/c21/v21341/8de/j7rNhtCK570.jpg?size=359x480&quality=96&sign=91b0672f454f12a7ac245c1aad862b18&type=album'
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
      <div className={styles.textarea}>
        <p>Однажды я решил изменить свою жизнь и заняться чем-то новым. Я люблю решать сложные задачи, поэтому решил попробовать себя в программировании. Когда я увидел сколько зарабатывают программисты, я понял, что это то, чем я хочу заниматься. Я начал решать задачи на Codewars и это было правда очень увлекательно. В то время я стал понимать, что разработкой готов заниматься по многу времени.
        </p>
      </ div>
    </>
  )
}

export default About