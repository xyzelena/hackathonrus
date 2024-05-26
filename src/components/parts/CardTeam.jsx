import { NavLink } from 'react-router-dom';

import Rating from '../UI/Rating';

import styles from './CardTeam.module.css';

import img from '../../images/team/img.png';
import img1 from '../../images/team/1.svg';
import person1 from '../../images/team/img1.png';
import person2 from '../../images/team/img2.png';
import person3 from '../../images/team/img3.png';
import person4 from '../../images/team/img4.png';
import person5 from '../../images/team/img5.png';
import event1 from '../../images/cardsEvents/1.png';
import event2 from '../../images/cardsEvents/2.png';
import event3 from '../../images/cardsEvents/3.png';
import event4 from '../../images/cardsEvents/4.png';

const CardTeam = () => {
    return (
        <div className='container'>

            <div className={styles.team_container}>

                <div className={styles.team_main}>
                    <div className={styles.team_img}>
                        <img src={img} alt="team" />
                    </div>

                    <div className={styles.team_desc}>
                        <h2>Джедаи кода</h2>

                        <div className={styles.team_descr_img}>
                            <img src={img1} alt="team" />
                        </div>

                        <p>
                            Мы группа креативных и талантливых участников, которые постоянно стремятся к
                            новым технологическим открытиям и инновационным решениям. Мы активно участвуем в хакатонах, где наши навыки программирования, дизайна и инженерии объединяются для создания уникальных и перспективных проектов. Наша цель - не просто участвовать, но и побеждать, внося свой вклад в развитие современных технологий и индустрии IT.
                            Посетите наш сайт, чтобы узнать больше о нашей команде, наших проектах и наших достижениях на хакатонах.
                        </p>

                        <div className={styles.team_descr_contacts}>
                            <button type="button" className={styles.contacts_btn}>Наш сайт</button>
                            <button type="button" className={styles.contacts_btn}>Telegram-канал</button>
                        </div>

                        <button type="button" className={styles.invite_btn}>ПРИГЛАСИТЬ НА ХАКАТОН</button>
                    </div>
                </div>

                <div className={styles.team_people}>
                    <h2>Наша команда</h2>

                    <div className={styles.team_people_cards}>

                        <div className={styles.team_people_card}>
                            <div className={styles.team_people_card_img}>
                                <img src={person1} alt="person" />
                            </div>
                            <h3>Артём Ковальчук</h3>
                            <h4>UX-UI дизайнер</h4>
                            <p>В команде с 2022 года</p>
                            <button type="button" className={styles.contacts_btn}>Написать на почту</button>
                        </div>

                        <div className={styles.team_people_card}>
                            <div className={styles.team_people_card_img}>
                                <img src={person2} alt="person" />
                            </div>
                            <h3>Максим Федотов</h3>
                            <h4>Frontend-разработчик</h4>
                            <p>В команде с 2022 года</p>
                            <button type="button" className={styles.contacts_btn}>Написать на почту</button>
                        </div>

                        <div className={styles.team_people_card}>
                            <div className={styles.team_people_card_img}>
                                <img src={person3} alt="person" />
                            </div>
                            <h3>Юлия Салтыкова</h3>
                            <h4>Backend-разработчик</h4>
                            <p>В команде с 2022 года</p>
                            <button type="button" className={styles.contacts_btn}>Написать на почту</button>
                        </div>

                        <div className={styles.team_people_card}>
                            <div className={styles.team_people_card_img}>
                                <img src={person4} alt="person" />
                            </div>
                            <h3>Леонид Акимов</h3>
                            <h4>Аналитик</h4>
                            <p>В команде с 2022 года</p>
                            <button type="button" className={styles.contacts_btn}>Написать на почту</button>
                        </div>

                        <div className={styles.team_people_card}>
                            <div className={styles.team_people_card_img}>
                                <img src={person5} alt="person" />
                            </div>
                            <h3>Елизавета Смирнова</h3>
                            <h4>Project manager</h4>
                            <p>В команде с 2022 года</p>
                            <button type="button" className={styles.contacts_btn}>Написать на почту</button>
                        </div>

                    </div>
                </div>

                <div className={styles.team_people_events}>
                    <h2>Хакатоны, в которых мы участвовали</h2>

                    <div className={styles.team_events_cards}>

                        <div className={styles.team_event_card}>
                            <div className={styles.team_event_card_header}>
                                <h2>2023</h2>
                                <h3>1 место</h3>
                            </div>                            

                            <div className={styles.team_event_card_main}>
                                <div className={styles.card_rating}>
                                    <Rating />
                                </div>

                                <div className={styles.card_img}>
                                    <img src={event2} alt="1 even" />
                                </div>
                            </div>

                            <h3>Smart Social</h3>

                            <div className={styles.team_event_project}>
                                <h2>НАШ ПРОЕКТ</h2>
                                <h3>GreenRoute</h3>
                                <p>
                                "GreenRoute" - платформа для выбора экологичных маршрутов. 
                                Используем данные о дорогах, трафике и загрязнении, 
                                чтобы предложить оптимальные пути с минимальным воздействием на окружающую среду. 
                                Наша цель - стимулировать экологичное передвижение в городах.
                                </p>
                            </div>

                            <button type="button" className={styles.invite_btn}>Посмотреть</button>
                        </div>

                        <div className={styles.team_event_card}>
                            <div className={styles.team_event_card_header}>
                                <h2>2023</h2>
                                <h3>1 место</h3>
                            </div>                            

                            <div className={styles.team_event_card_main}>
                                <div className={styles.card_rating}>
                                    <Rating />
                                </div>

                                <div className={styles.card_img}>
                                    <img src={event4} alt="1 even" />
                                </div>
                            </div>

                            <h3>Smart Social</h3>

                            <div className={styles.team_event_project}>
                                <h2>НАШ ПРОЕКТ</h2>
                                <h3>GreenRoute</h3>
                                <p>
                                "GreenRoute" - платформа для выбора экологичных маршрутов. 
                                Используем данные о дорогах, трафике и загрязнении, 
                                чтобы предложить оптимальные пути с минимальным воздействием на окружающую среду. 
                                Наша цель - стимулировать экологичное передвижение в городах.
                                </p>
                            </div>

                            <button type="button" className={styles.invite_btn}>Посмотреть</button>
                        </div>

                        <div className={styles.team_event_card}>
                            <div className={styles.team_event_card_header}>
                                <h2>2023</h2>
                                <h3>1 место</h3>
                            </div>                            

                            <div className={styles.team_event_card_main}>
                                <div className={styles.card_rating}>
                                    <Rating />
                                </div>

                                <div className={styles.card_img}>
                                    <img src={event1} alt="1 even" />
                                </div>
                            </div>

                            <h3>Smart Social</h3>

                            <div className={styles.team_event_project}>
                                <h2>НАШ ПРОЕКТ</h2>
                                <h3>GreenRoute</h3>
                                <p>
                                "GreenRoute" - платформа для выбора экологичных маршрутов. 
                                Используем данные о дорогах, трафике и загрязнении, 
                                чтобы предложить оптимальные пути с минимальным воздействием на окружающую среду. 
                                Наша цель - стимулировать экологичное передвижение в городах.
                                </p>
                            </div>

                            <button type="button" className={styles.invite_btn}>Посмотреть</button>
                        </div>

                        <div className={styles.team_event_card}>
                            <div className={styles.team_event_card_header}>
                                <h2>2023</h2>
                                <h3>1 место</h3>
                            </div>                            

                            <div className={styles.team_event_card_main}>
                                <div className={styles.card_rating}>
                                    <Rating />
                                </div>

                                <div className={styles.card_img}>
                                    <img src={event3} alt="1 even" />
                                </div>
                            </div>

                            <h3>Smart Social</h3>

                            <div className={styles.team_event_project}>
                                <h2>НАШ ПРОЕКТ</h2>
                                <h3>GreenRoute</h3>
                                <p>
                                "GreenRoute" - платформа для выбора экологичных маршрутов. 
                                Используем данные о дорогах, трафике и загрязнении, 
                                чтобы предложить оптимальные пути с минимальным воздействием на окружающую среду. 
                                Наша цель - стимулировать экологичное передвижение в городах.
                                </p>
                            </div>

                            <button type="button" className={styles.invite_btn}>Посмотреть</button>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default CardTeam; 