import styles from './CardPerson.module.css'; 
import face from '../../images/person/face.png'; 
import prize from '../../images/person/prize.png'; 
import achievement from '../../images/person/achievement.png'; 

import event1 from '../../images/person/event1.png'; 
import event2 from '../../images/person/event2.png'; 
import event3 from '../../images/person/event3.png'; 
import event4 from '../../images/person/event4.png'; 

const CardPerson = () => {
  return (
    <div className='container'>
        <div className={styles.cardPerson_container}>

            <div className={styles.cardPerson_main}>

              <img src={face} alt="face" />

              <img src={prize} alt="prize" />

              <img src={achievement} alt="achievement" />

              <button type="button" className={styles.contacts_btn}>Email</button>
              <button type="button" className={styles.contacts_btn}>Telegram</button>

              <button type="button" className={styles.fixProfile_btn}>Редактировать профиль</button>

            </div>

            <div className={styles.cardPerson_content}>
              
                <div className={styles.handlers_pages_btns}>
                  <button type="button" className={styles.handlers_pages_btn} id='commands_btn'>Команды</button>
                  <button type="button" className={styles.handlers_pages_btn}>Проекты</button>
                  <button type="button" className={styles.handlers_pages_btn}>Хакатоны</button>
                </div>

                <form>
                <div className='mainSearch_filters_selects'> 
                  <span>Сортировать по:</span>

                  <select name="hackathons_select_date" id="hackathon-select_date">
                    <option value=""> Давность</option>
                  </select>

                  <select name="hackathons_select_rating" id="hackathon-select_rating">
                    <option value="">Время в команде</option>
                  </select>

                  <select name="hackathons_select_prize" id="hackathon-select_prize">
                    <option value="">Количество побед</option>
                  </select>

                </div>
              </form>

              <div className={styles.cardPerson_cards}>
                  <div className={styles.cardPerson_card}>
                        <h2>2020-2021</h2>
                        <img src={event1} alt="events" />
                        <p className={styles.cardPerson_card_stat}>5 хакатонов · 2 первых места · с 2022 года · МОСКВА</p>
                        <h3>Джедаи кода</h3>
                        <p>
                        Наша команда - креативные и целеустремленные специалисты, готовые воплотить инновационные идеи в жизнь. 
                        Мы объединены общей целью - 
                        создать уникальное и полезное решение на хакатоне и покорить жюри своими навыками и креативностью
                        </p>
                  </div>

                  <div className={styles.cardPerson_card}>
                        <h2>2020-2023</h2>
                        <img src={event2} alt="events" />
                        <p className={styles.cardPerson_card_stat}>5 хакатонов · 2 первых места · с 2022 года · МОСКВА</p>
                        <h3>Джедаи кода</h3>
                        <p>
                        Наша команда - креативные и целеустремленные специалисты, готовые воплотить инновационные идеи в жизнь. 
                        Мы объединены общей целью - 
                        создать уникальное и полезное решение на хакатоне и покорить жюри своими навыками и креативностью
                        </p>
                  </div>

                  <div className={styles.cardPerson_card}>
                        <h2>2020-2023</h2>
                        <img src={event3} alt="events" />
                        <p className={styles.cardPerson_card_stat}>5 хакатонов · 2 первых места · с 2022 года · МОСКВА</p>
                        <h3>InnovateIQ</h3>
                        <p>
                        Наша команда - креативные и целеустремленные специалисты, готовые воплотить инновационные идеи в жизнь. 
                        Мы объединены общей целью - 
                        создать уникальное и полезное решение на хакатоне и покорить жюри своими навыками и креативностью
                        </p>
                  </div>

                  <div className={styles.cardPerson_card}>
                        <h2>2020-2023</h2>
                        <img src={event4} alt="events" />
                        <p className={styles.cardPerson_card_stat}>5 хакатонов · 2 первых места · с 2022 года · МОСКВА</p>
                        <h3>ByteBusters</h3>
                        <p>
                        Наша команда - креативные и целеустремленные специалисты, готовые воплотить инновационные идеи в жизнь. 
                        Мы объединены общей целью - 
                        создать уникальное и полезное решение на хакатоне и покорить жюри своими навыками и креативностью
                        </p>
                  </div>
              </div>

            </div>

        </div>
    </div>
  
  )
}

export default CardPerson; 