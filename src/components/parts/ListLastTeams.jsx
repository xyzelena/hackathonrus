import img1 from '../../images/teams/1.png';
import img2 from '../../images/teams/2.png';
import img3 from '../../images/teams/3.png';
import img4 from '../../images/teams/4.png';

import styles from './ListLastTeams.module.css'; 

const ListLastTeams = () => {
  return (
    <div className={styles.listLastTeams_cards}>
        <div className={styles.listLastTeams_card}>
                <h2>2023</h2>
                <h3>1 место</h3>
                <img src={img1} alt="team 1" />
                <p className='gray_descr_text'>5 хакатонов · 2 первых места · с 2022 года · МОСКВА</p>
                <h4>Джедаи кода</h4>
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