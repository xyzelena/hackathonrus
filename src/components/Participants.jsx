import styles from './Participants.module.css'; 

const Participants = () => {
  return (
    <div className='container'>

      <div className={styles.mainHeader}>
        <h1 className={styles.mainHeader_header}>Присоединяйся к хакатонам!</h1>
      </div>

      <div className={styles.mainSearch}>

          <div>
            <form>
              <div className={styles.mainSearch_search}>
                <input type="search" name="search" className={styles.mainSearch_search_input} placeholder='Поиск по Хакатонам'/>
                <input type="submit" value="" className={styles.mainSearch_search_submit} />
              </div>              
            </form>
          </div>

          <div className={styles.mainSearch_filters}>
            <form>
                <div className={styles.mainSearch_filters_selects}> 
                  <span>Сортировать по:</span>

                  <select name="hackathons_select_date" id="hackathon-select_date">
                    <option value=""> ДАТА ПРОВЕДЕНИЯ</option>
                  </select>

                  <select name="hackathons_select_rating" id="hackathon-select_rating">
                    <option value="">РЕЙТИНГ</option>
                  </select>

                  <select name="hackathons_select_prize" id="hackathon-select_prize">
                    <option value="">ПРИЗОВОЙ ФОНД</option>
                  </select>

                  <select name="hackathons_select_complexity" id="hackathon-select_complexity">
                    <option value="">СЛОЖНОСТЬ</option>
                  </select>
                </div>
              </form>

              <button type='button' className={styles.mainSearch_filters_btn}>Фильтры</button>
          </div>

      </div>

    </div>
    
  )
}

export default Participants;