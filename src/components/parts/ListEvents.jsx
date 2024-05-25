import { NavLink } from 'react-router-dom';
import img1 from '../../images/cardsEvents/1.png';
import img2 from '../../images/cardsEvents/2.png';
import img3 from '../../images/cardsEvents/3.png';
import img4 from '../../images/cardsEvents/4.png';

import styles from './ListEvents.module.css'; 


const ListEvents = () => {
  return (
    <div className={styles.ListEvents_container}>
        <NavLink to='./card'>
        <div className={styles.ListEvents_card} >
            <div className={styles.ListEvents_card_main}>
                <div className={styles.ListEvents_card_rating}>

                </div>

                <div className={styles.ListEvents_card_img}>
                    <img src={img1} alt="1 even" />
                </div>
            </div>

            <div className={styles.ListEvents_card_format}>
                <p>ONLINE</p>
            </div>

            <div className={styles.ListEvents_card_title}>
                <h2>Реши кейс от MST STARTUP HUB и FUTURE CREW</h2>
            </div>

            <div className={styles.ListEvents_card_description}>
                <p>Призовой фонд 300 000 рублей!</p>
            </div>
        </div>
        </NavLink>

        <div className={styles.ListEvents_card} >
            <div className={styles.ListEvents_card_main}>
                <div className={styles.ListEvents_card_rating}>

                </div>

                <div className={styles.ListEvents_card_img}>
                    <img src={img2} alt="2 even" />
                </div>
            </div>

            <div className={styles.ListEvents_card_format}>
                <p>РЕГИСТРАЦИЯ ОТКРЫТА · ONLINE · OFFLINE · DS/ML/AI · МОСКВА</p>
            </div>

            <div className={styles.ListEvents_card_title}>
                <h2>Smart Social</h2>
            </div>

            <div className={styles.ListEvents_card_description}>
                <p>
                Участники будут работать над решениями для внедрения в работу НКО, а после смогут представить свой проект 
                на питч-сессии крупнейшей конференции по теме социальной ответственности технологических и IT-компаний.
                </p>
            </div>
        </div>

        <div className={styles.ListEvents_card} >
            <div className={styles.ListEvents_card_main}>
                <div className={styles.ListEvents_card_rating}>

                </div>

                <div className={styles.ListEvents_card_img}>
                    <img src={img3} alt="3 even" />
                </div>
            </div>

            <div className={styles.ListEvents_card_format}>
                <p>РЕГИСТРАЦИЯ ОТКРЫТА · ONLINE · DS/ML/AI</p>
            </div>

            <div className={styles.ListEvents_card_title}>
                <h2>PRACTICE & SCALE AI</h2>
            </div>

            <div className={styles.ListEvents_card_description}>
                <p>
                    Прикладные решения, которые подходят для масштабирования бизнеса.Призовой фонд — 500 000 рублей!
                </p>
            </div>
        </div>

        <div className={styles.ListEvents_card} >
            <div className={styles.ListEvents_card_main}>
                <div className={styles.ListEvents_card_rating}>

                </div>

                <div className={styles.ListEvents_card_img}>
                    <img src={img4} alt="4 even" />
                </div>
            </div>

            <div className={styles.ListEvents_card_format}>
                <p>
                    РЕГИСТРАЦИЯ ОТКРЫТА · ONLINE
                </p>
            </div>

            <div className={styles.ListEvents_card_title}>
                <h2>Баттл Вузов: Кубок Y&&Y</h2>
            </div>

            <div className={styles.ListEvents_card_description}>
                <p>
                    Турнир, где каждый студент — игрок команды!Призовой фонд — 1 000 000 рублей.
                </p>
            </div>
        </div>

        <div className={styles.ListEvents_card} >
            <div className={styles.ListEvents_card_main}>
                <div className={styles.ListEvents_card_rating}>

                </div>

                <div className={styles.ListEvents_card_img}>
                    <img src={img4} alt="4 even" />
                </div>
            </div>

            <div className={styles.ListEvents_card_format}>
                <p>
                    РЕГИСТРАЦИЯ ОТКРЫТА · ONLINE
                </p>
            </div>

            <div className={styles.ListEvents_card_title}>
                <h2>Баттл Вузов: Кубок Y&&Y</h2>
            </div>

            <div className={styles.ListEvents_card_description}>
                <p>
                    Турнир, где каждый студент — игрок команды!Призовой фонд — 1 000 000 рублей.
                </p>
            </div>
        </div>

        <div className={styles.ListEvents_card} >
            <div className={styles.ListEvents_card_main}>
                <div className={styles.ListEvents_card_rating}>

                </div>

                <div className={styles.ListEvents_card_img}>
                    <img src={img3} alt="3 even" />
                </div>
            </div>

            <div className={styles.ListEvents_card_format}>
                <p>РЕГИСТРАЦИЯ ОТКРЫТА · ONLINE · DS/ML/AI</p>
            </div>

            <div className={styles.ListEvents_card_title}>
                <h2>PRACTICE & SCALE AI</h2>
            </div>

            <div className={styles.ListEvents_card_description}>
                <p>
                    Прикладные решения, которые подходят для масштабирования бизнеса.Призовой фонд — 500 000 рублей!
                </p>
            </div>
        </div>

        <div className={styles.ListEvents_card} >
            <div className={styles.ListEvents_card_main}>
                <div className={styles.ListEvents_card_rating}>

                </div>

                <div className={styles.ListEvents_card_img}>
                    <img src={img2} alt="2 even" />
                </div>
            </div>

            <div className={styles.ListEvents_card_format}>
                <p>РЕГИСТРАЦИЯ ОТКРЫТА · ONLINE · OFFLINE · DS/ML/AI · МОСКВА</p>
            </div>

            <div className={styles.ListEvents_card_title}>
                <h2>Smart Social</h2>
            </div>

            <div className={styles.ListEvents_card_description}>
                <p>
                Участники будут работать над решениями для внедрения в работу НКО, а после смогут представить свой проект 
                на питч-сессии крупнейшей конференции по теме социальной ответственности технологических и IT-компаний.
                </p>
            </div>
        </div>

        <div className={styles.ListEvents_card} >
            <div className={styles.ListEvents_card_main}>
                <div className={styles.ListEvents_card_rating}>

                </div>

                <div className={styles.ListEvents_card_img}>
                    <img src={img1} alt="1 even" />
                </div>
            </div>

            <div className={styles.ListEvents_card_format}>
                <p>ONLINE</p>
            </div>

            <div className={styles.ListEvents_card_title}>
                <h2>Реши кейс от MST STARTUP HUB и FUTURE CREW</h2>
            </div>

            <div className={styles.ListEvents_card_description}>
                <p>Призовой фонд 300 000 рублей!</p>
            </div>
        </div>

    </div>
  )
}

export default ListEvents; 