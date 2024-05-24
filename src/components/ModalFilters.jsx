import styles from './ModalFilters.module.css';

import img1 from '../images/subjects/1.png';
import img2 from '../images/subjects/2.png';
import img3 from '../images/subjects/3.png';
import img4 from '../images/subjects/4.png';
import img5 from '../images/subjects/5.png';
import img6 from '../images/subjects/6.png';
import img7 from '../images/subjects/7.png';
import img8 from '../images/subjects/8.png';
import img9 from '../images/subjects/9.png';
import img10 from '../images/subjects/10.png';

const ModalFilters = ({closeModal}) => {

  console.log(img1); 

  return (
    <div className={styles.ModalFilters_main}>

      <div className={styles.ModalFilters_main_header}>
          <div className={styles.ModalFilters_methodCarrying}>
            <div className={styles.ModalFilters_title}>Способ проведения:</div>

            <div className={styles.ModalFilters_btns}>
              <button type="button" className={styles.ModalFilters_btn}>Онлайн</button>
              <button type="button" className={styles.ModalFilters_btn}>Офлайн</button>
            </div>
          </div>

          <input type="button" value="" className={styles.ModalFilters_closeBtn} onClick={closeModal} />
      </div>

      <div className={styles.ModalFilters_professions}>
        <div className={styles.ModalFilters_title}>Кому подходит:</div>

        <div className={styles.ModalFilters_btns}>
              <div className={styles.professionsBtns}>
                <button type="button" className={styles.ModalFilters_btn}>Frontend-разработчик</button>
                <button type="button" className={styles.ModalFilters_btn}>UX-UI дизайнер</button>
                <button type="button" className={styles.ModalFilters_btn}>Web-дизайнер</button>
                <button type="button" className={styles.ModalFilters_btn}>Backend-разработчик</button>
                <button type="button" className={styles.ModalFilters_btn}>Product manager</button>
                <button type="button" className={styles.ModalFilters_btn}>Mobile-разработчик</button>
                <button type="button" className={styles.ModalFilters_btn}>Аналитик данных</button>
                <button type="button" className={styles.ModalFilters_btn}>Тестировщик</button>
                <button type="button" className={styles.ModalFilters_btn}>Маркетолог</button>
              </div>
        </div>
      </div>

      <div className={styles.ModalFilters_subjects}>
        <div className={styles.ModalFilters_title}>Тематика хакатона:</div>

        <div className={styles.ModalFilters_images}>
              <img src={img1} alt="Intelligence" />
              <img src={img2} alt="Technologies" />
              <img src={img3} alt="Iot" />
              <img src={img4} alt="Machine learning" />
              <img src={img5} alt="Medicine" />
              <img src={img6} alt="Ecology" />
              <img src={img7} alt="Education" />
              <img src={img8} alt="Art" />
              <img src={img9} alt="Cybersecurity" />
              <img src={img10} alt="Travel" />
        </div>
      </div>

      <div className={styles.ModalFilters_periodCarrying}>
        <div className={styles.ModalFilters_title}>Период проведения:</div>

        <div className={styles.ModalFilters_btns}>
          <span>С  </span><button type="button" className={styles.ModalFilters_btn}>00.00.0000</button>
          <span>По  </span><button type="button" className={styles.ModalFilters_btn}>00.00.0000</button>
        </div>
      </div>

      <div className={styles.ModalFilters_durationCarrying}>
        <div className={styles.ModalFilters_title}>Длительность хакатона (количество дней):</div>

        <div className={styles.ModalFilters_btns}>
          <span>От  </span><button type="button" className={styles.ModalFilters_btn}>00.00.0000</button>
          <span>До  </span><button type="button" className={styles.ModalFilters_btn}>00.00.0000</button>
        </div>
      </div>

      <div className={styles.ModalFilters_complexityCarrying}>
        <div className={styles.ModalFilters_title}>Сложность:</div>

        <div className={styles.ModalFilters_btns}>
          <button type="button" className={styles.ModalFilters_btn}>Новичок</button>
          <button type="button" className={styles.ModalFilters_btn}>Опытный</button>
          <button type="button" className={styles.ModalFilters_btn}>Эксперт</button>
        </div>
      </div>

      <div className={styles.ModalFilters_city}>
        <div className={styles.ModalFilters_title}>Город проведения:</div>

        <div className={styles.ModalFilters_btns}>
          <input type="text" className={styles.ModalFilters_btn} placeholder='Поле ввода'/>
        </div>
      </div>

      <div className={styles.ModalFilters_countParticipants}>
        <div className={styles.ModalFilters_title}>Количество человек в команде от:</div>

        <div className={styles.ModalFilters_btns}>
          <input type="range" className={styles.ModalFilters_range} min="1" max="10" step='1'/>
        </div>
      </div>

    </div>
  )
}

export default ModalFilters; 