import { useState } from 'react';
import Modal from 'react-modal';

import ModalFilters from './ModalFilters';
import ListEvents from './parts/ListEvents';

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

      <div className='mainHeader'>
        <h1 className='mainHeader_header'>Присоединяйся к хакатонам!</h1>
      </div>

      <div className='mainSearch'>

          <div>
            <form>
              <div className='mainSearch_search'>
                <input type="search" name="search" className='mainSearch_search_input' placeholder='Поиск по Хакатонам'/>
                <input type="submit" value="" className='mainSearch_search_submit'/>
              </div>              
            </form>
          </div>

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
              <ModalFilters closeModal={closeModal}/>
              </Modal>
          </div>

      </div>

      <div className='mainContent'>
        <ListEvents />
      </div>      

    </div>
    
  )
}

export default Participants;