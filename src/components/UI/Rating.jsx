import icon_star from '../../images/icon_star.svg';

import styles from './Rating.module.css'; 

const Rating = () => {
  return (
    <div className={styles.card_rating}>
        <img src={icon_star} alt="stars" />
        <img src={icon_star} alt="stars" />
        <img src={icon_star} alt="stars" />
        <img src={icon_star} alt="stars" />
        <img src={icon_star} alt="stars" />
    </div>
  )
}

export default Rating; 