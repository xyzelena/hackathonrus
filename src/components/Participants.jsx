import { useState } from 'react';
import Modal from 'react-modal';

import ModalFilters from './ModalFilters';
import ListEvents from './parts/ListEvents';

import styles from './Participants.module.css'; 

const Participants = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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

              <button type='button' className={styles.mainSearch_filters_btn} onClick={openModal}>Фильтры</button>

              <Modal 
                isOpen={modalIsOpen} 
                onRequestClose={closeModal} 
                className={styles.ModalFilters}
                appElement={document.getElementById('app')}
              >
              <ModalFilters closeModal={closeModal}/>
              </Modal>
          </div>

      </div>

      <div className={styles.mainContent}>
        <ListEvents />
      </div>      

    </div>
    
  )
}

export default Participants;