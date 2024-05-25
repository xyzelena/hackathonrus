import img1 from '../../images/teams/1.png';
import img2 from '../../images/teams/2.png';
import img3 from '../../images/teams/3.png';
import img4 from '../../images/teams/4.png';

import styles from './ListLastTeams.module.css'; 

const ListLastTeams = () => {
  return (
    <div className={styles.listLastTeams_cards}>

        <div className={styles.listLastTeams_card}>
            <div className={styles.listLastTeams_card_header}>
              <h2>2023</h2>
              <h3>1 место</h3>
            </div>
                <img src={img1} alt="team 1" />

                <p className='gray_descr_text'>5 хакатонов · 2 первых места · с 2022 года · МОСКВА</p>

                <h3 className={styles.listLastTeams_card_nameTeam}>Джедаи кода</h3>

                <p>
                Наша команда - креативные и целеустремленные специалисты, 
                готовые воплотить инновационные идеи в жизнь. Мы объединены общей целью - 
                создать уникальное и полезное решение 
                на хакатоне и покорить жюри своими навыками и креативностью
                </p>
        </div>

        <div className={styles.listLastTeams_card}>
            <div className={styles.listLastTeams_card_header}>
              <h2>2023</h2>
              <h3>2 место</h3>
            </div>
                <img src={img2} alt="team 2" />

                <p className='gray_descr_text'>5 хакатонов · 2 первых места · с 2022 года · МОСКВА</p>

                <h3 className={styles.listLastTeams_card_nameTeam}>Джедаи кода</h3>

                <p>
                Наша команда - креативные и целеустремленные специалисты, 
                готовые воплотить инновационные идеи в жизнь. Мы объединены общей целью - 
                создать уникальное и полезное решение 
                на хакатоне и покорить жюри своими навыками и креативностью
                </p>
        </div>

        <div className={styles.listLastTeams_card}>
            <div className={styles.listLastTeams_card_header}>
              <h2>2023</h2>
              <h3>3 место</h3>
            </div>
                <img src={img3} alt="team 3" />

                <p className='gray_descr_text'>5 хакатонов · 2 первых места · с 2022 года · МОСКВА</p>

                <h3 className={styles.listLastTeams_card_nameTeam}>Джедаи кода</h3>

                <p>
                Наша команда - креативные и целеустремленные специалисты, 
                готовые воплотить инновационные идеи в жизнь. Мы объединены общей целью - 
                создать уникальное и полезное решение 
                на хакатоне и покорить жюри своими навыками и креативностью
                </p>
        </div>

        <div className={styles.listLastTeams_card}>
            <div className={styles.listLastTeams_card_header}>
              <h2>2022</h2>
              <h3>1 место</h3>
            </div>
                <img src={img4} alt="team 4" />

                <p className='gray_descr_text'>5 хакатонов · 2 первых места · с 2022 года · МОСКВА</p>

                <h3 className={styles.listLastTeams_card_nameTeam}>Джедаи кода</h3>

                <p>
                Наша команда - креативные и целеустремленные специалисты, 
                готовые воплотить инновационные идеи в жизнь. Мы объединены общей целью - 
                создать уникальное и полезное решение 
                на хакатоне и покорить жюри своими навыками и креативностью
                </p>
        </div>

    </div>
  )
}

export default ListLastTeams; 