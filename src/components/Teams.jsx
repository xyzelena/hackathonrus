import styles from './Teams.module.css';

import img from '../images/team/img.png';
import img1 from '../images/team/1.svg';

const Teams = () => {
  return (
    <div className='container'>

      <div className={styles.teams_container}>

        <div className={styles.teams_main}>
          <div className={styles.teams_img}>
            <img src={img} alt="team" />
          </div>

          <div className={styles.teams_desc}>
            <h2>Джедаи кода</h2>

            <div className={styles.teams_descr_img}>
              <img src={img1} alt="team" />
            </div>

            <p>
              Мы группа креативных и талантливых участников, которые постоянно стремятся к
              новым технологическим открытиям и инновационным решениям. Мы активно участвуем в хакатонах, где наши навыки программирования, дизайна и инженерии объединяются для создания уникальных и перспективных проектов. Наша цель - не просто участвовать, но и побеждать, внося свой вклад в развитие современных технологий и индустрии IT.
              Посетите наш сайт, чтобы узнать больше о нашей команде, наших проектах и наших достижениях на хакатонах.
            </p>

            <div className={styles.teams_descr_contacts}>
              <button type="button" className={styles.contacts_btn}>Наш сайт</button>
              <button type="button" className={styles.contacts_btn}>Telegram-канал</button>
            </div>

            <button type="button" className={styles.invite_btn}>ПРИГЛАСИТЬ НА ХАКАТОН</button>
          </div>
        </div>

        <div className={styles.teams_people}>
          <h2>Наша команда</h2>

          <div className={styles.teams_people_cards}>

            <div className={styles.teams_people_card}>
                
            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Teams; 