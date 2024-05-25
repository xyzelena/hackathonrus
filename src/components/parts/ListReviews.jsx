import Rating from '../UI/Rating';

import img1 from '../../images/reviews/1.png';
import img2 from '../../images/reviews/2.png';

import styles from './ListReviews.module.css'; 

const ListReviews = () => {
  return (
    <div className={styles.reviews_cards}>

            <div className={styles.reviews_card}>
                <div className={styles.reviews_card_main}>
                    <div className={styles.reviews_card_image_name}>
                        <img src={img1} alt="Artem" />
                        <h2>Artem</h2>
                        <h4>Участник 2023 года</h4>
                    </div>

                    <div className={styles.reviews_card_descr}>
                        <Rating />

                        <div className={styles.reviews_card_descr_text}>
                            <p>
                            Участие в хакатоне было настоящим вызовом для меня, 
                            но в итоге оказалось одним из самых увлекательных и познавательных опытов. 
                            Работа в команде над проектом, консультации экспертов, несколько безсонных ночей - все это стоило того, 
                            чтобы увидеть результат нашего труда. Я улучшил свои навыки программирования, 
                            научился эффективно решать проблемы и коммуницировать с коллегами. 
                            Хакатон - отличный способ проверить себя, найти новые идеи и быть в курсе последних тенденций в IT. 
                            Рекомендую всем, кто хочет испытать себя в непрерывном режиме творчества и совершенствования!
                            </p>

                            <a href="#">Читать полностью</a>
                        </div>
                    </div>
                </div>

                <div className={styles.reviews_card_btns}>
                    <button className={styles.reviews_card_btn}>Команда «Джедаи кода»</button>
                </div>
            </div>

            <div className={styles.reviews_card}>
                <div className={styles.reviews_card_main}>
                    <div className={styles.reviews_card_image_name}>
                        <img src={img2} alt="Kira" />
                        <h2>Кира</h2>
                        <h4>Победитель 2023 года</h4>
                    </div>

                    <div className={styles.reviews_card_descr}>
                        <Rating />

                        <div className={styles.reviews_card_descr_text}>
                            <p>
                            Участие в хакатоне было невероятно вдохновляющим! Было здорово работать в команде и 
                            применять свои навыки для решения реальных проблем. 
                            Очень интересный и познавательный опыт!
                            </p>

                            <a href="#">Читать полностью</a>
                        </div>
                    </div>
                </div>

                <div className={styles.reviews_card_btns}>
                    <button className={styles.reviews_card_btn}>Команда «Джедаи кода»</button>
                </div>
            </div>

            <div className={styles.reviews_card}>
                <div className={styles.reviews_card_main}>
                    <div className={styles.reviews_card_image_name}>
                        <img src={img1} alt="Artem" />
                        <h2>Artem</h2>
                        <h4>Участник 2023 года</h4>
                    </div>

                    <div className={styles.reviews_card_descr}>
                        <Rating />

                        <div className={styles.reviews_card_descr_text}>
                            <p>
                            Участие в хакатоне было настоящим вызовом для меня, 
                            но в итоге оказалось одним из самых увлекательных и познавательных опытов. 
                            Работа в команде над проектом, консультации экспертов, несколько безсонных ночей - все это стоило того, 
                            чтобы увидеть результат нашего труда. Я улучшил свои навыки программирования, 
                            научился эффективно решать проблемы и коммуницировать с коллегами. 
                            Хакатон - отличный способ проверить себя, найти новые идеи и быть в курсе последних тенденций в IT. 
                            Рекомендую всем, кто хочет испытать себя в непрерывном режиме творчества и совершенствования!
                            </p>

                            <a href="#">Читать полностью</a>
                        </div>
                    </div>
                </div>

                <div className={styles.reviews_card_btns}>
                    <button className={styles.reviews_card_btn}>Команда «Джедаи кода»</button>
                </div>
            </div>

    </div>
  )
}

export default ListReviews; 