import { useState } from 'react';
import Modal from 'react-modal';

import ModalFilters from './ModalFilters';
import ListEvents from './parts/ListEvents';
import ListLastTeams from './parts/ListLastTeams';

import styles from './PastHackathons.module.css';

const PastHackathons = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [contentPage, setContentPage] = useState('pasthckathons');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handlerPage = (e) => {
      setContentPage(e.target.id); 
  }

  return (
    <div className='container'>

      <div className='mainHeader'>
        <h1 className='mainHeader_header'>История побед!</h1>
      </div>

      <div className='mainSearch'>

        <div className={styles.pastHackathons_handlerPages}>
            <button type='button' id='pasthckathons' className={styles.pastHackathons_handlerPages_btn} onClick={handlerPage}>Прошедшие хакатоны</button>
            <button type='button' id='pastteams' className={styles.pastHackathons_handlerPages_btn} onClick={handlerPage}>Команды-победители</button>
        </div>

        
          <form>
            <div className='mainSearch_search'>
              <input type="search" name="search" className='mainSearch_search_input' placeholder='Поиск по Хакатонам' />
              <input type="submit" value="" className='mainSearch_search_submit' />
            </div>
          </form>
       

        <div className='mainSearch_filters'>
          <form>
            <div className='mainSearch_filters_selects'>
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

          <button type='button' className='mainSearch_filters_btn' onClick={openModal}>Фильтры</button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className='modalFilters'
            appElement={document.getElementById('app')}
          >
            <ModalFilters closeModal={closeModal} />
          </Modal>
        </div>

      </div>

      <div className='mainContent'>
        {
          contentPage === 'pasthckathons'? <ListEvents /> : <ListLastTeams />
        }

      </div>  

    </div>
  )
}

export default PastHackathons; 