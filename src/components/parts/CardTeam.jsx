import styles from './CardTeam.module.css';

import img from '../../images/team/img.png';
import img1 from '../../images/team/1.svg';
import person1 from '../../images/team/img1.png';
import person2 from '../../images/team/img2.png';
import person3 from '../../images/team/img3.png';
import person4 from '../../images/team/img4.png';
import person5 from '../../images/team/img5.png';

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
                    
                </div>

            </div>

        </div>

    )
}

export default CardTeam; 