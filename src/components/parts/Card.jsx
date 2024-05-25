import img2 from '../../images/cardsEvents/2.png';

import ListReviews from './ListReviews';
import ListLastTeams from './ListLastTeams';

import Rating from '../UI/Rating';

import styles from './Card.module.css'; 

const Card = () => {
  return (
    <div className={styles.card_container}>

        <div className={styles.card_container_description}>

            <div className={styles.card_img}>
                <img src={img2} alt="card about event" />
            </div>

            <div className={styles.card_main}>

                <Rating />

                <div className={styles.card_header}>
                    <h2>Smart Social</h2>
                </div>

                <div className={styles.card_format}>
                    <p>РЕГИСТРАЦИЯ ОТКРЫТА · ONLINE · OFFLINE · DS/ML/AI · МОСКВА</p>
                </div>

                <div className={styles.card_text}>
                    <p>
                    Smart Social — это командное соревнование для программистов, дизайнеров, менеджеров, аналитиков и других IT-специалистов, которые в сжатые сроки решают технологическую задачу: разрабатывают прототип, содержащий основной функционал.
                    </p>
                    <br/>

                    <span>Описание хакатона:</span>
                    <p>
                    Участники будут работать над решениями для внедрения в работу НКО, а после смогут представить свой проект на питч-сессии крупнейшей конференции по теме социальной ответственности технологических и IT-компаний.
                    </p>
                    <br/>

                    <span>Минимальные требования:</span>
                    <p>
                    В команде должно быть от 2 до 5 человек.
                    Участником может быть любой гражданин Российской Федерации старше 18 лет.
                    </p>
                    <br/>

                    <span>Что даёт участие?</span>
                        <ul>
                            <li>
                            Новые кейсы в портфолио <br/> Участникам Smart Social: Хакатон представлены 10 реальных кейсов для регистрации на выбор, каждый из которых является уникальной задачей, потенциально решающей проблему, связанную с деятельностью НКО.
                            </li>
                            <li>
                            Полезные знакомства <br/> Питч-сессия Smart Social: Хакатон в гибридном формате в кластере «Ломоносов» в рамках конференции Smart Social, поэтому у участников есть уникальная возможность обрести полезные знакомства на площадке.
                            </li>
                            <li>
                            Экспертная поддержка <br/> На протяжении Smart Social: Хакатон направлять, поддерживать и оценивать команды будет экспертное жюри, состоящее из топовых ИТ-специалистов.
                            </li>
                            <li>
                            Возможность реализовать свой проект <br/> Каждый из кейсов хакатона — это реальная практическая задача, закрывающая проблему НКО. По результатам хакатона лучшие решения будут внедрены в работу НКО.Кейсы хакатона:
                            </li>
                        </ul>
                    <br/>

                    <span>Кейсы хакатона:</span>
                        <ul>
                            <li>Сервис для онлайн-записи на музейные мероприятия</li>
                            <li>Инструмент для анонимизации документов пользователей сервиса «Просто спросить»</li>
                            <li>Телеграм-бот для быстрого сбора, передачи и выгрузки информации для участников проекта «Накорми»</li>
                            <li>Приложение-путеводитель по музею</li>
                            <li>Алгоритм для систематизации архивных материалов</li>
                            <li>Приложение для туристических маршрутов</li>
                            <li>Сервис сбора информации для профилактики социально значимых заболеваний</li>
                            <li>Онлайн-игра для повышения информированности населения о профилактике ВИЧ</li>
                        </ul>
                    <br/>

                    <span>Таймлайн:</span>
                    <p>До 6 июня, 23:59 мск - Регистрация на хакатон;</p>
                    <p>10 июня - Торжественное онлайн-открытие и презентация кейса;</p>
                    <p>17 июня - Защита решений;</p>
                    <p>18 июня - Торжественное закрытие и объявление победителей.</p>
                    <br/>

                    <span>Организаторы:</span>
                    <p>«Акселератор Возможностей»- крупный оператор и организатор хакатонов и инвестиционных мероприятий, куратор инновационного блока </p>

                </div> 
            </div> 
        </div> 

        <div className={styles.card_container_part}>
            <div className={styles.card_container_header}>
                <h2>Отзывы о хакатоне</h2>
            </div>
        
            <div className={styles.card_container_reviews_handlers}>
                <form>
                    <div className={styles.reviews_selects}> 
                        <span>Сортировать по:</span>

                        <select name="hackathons_select_date" id="hackathon-select_date">
                            <option value=""> ДАТА РАЗМЕЩЕНИЯ</option>
                        </select>

                        <select name="hackathons_select_rating" id="hackathon-select_rating">
                            <option value="">РЕЙТИНГ</option>
                        </select>
                    </div>
                </form>

                <div className={styles.reviews_btns}>
                    <button type='button' className={styles.reviews_btn}>Оставить отзыв</button>
                </div>
            </div>
            <ListReviews />
        </div>

        <div className={styles.card_container_part}>
            <div className={styles.card_container_header}>
                <h2>Команды-победители прошлых лет</h2>
            </div>
        
            <ListLastTeams />
        </div>

    </div> 
  
  )
}

export default Card; 