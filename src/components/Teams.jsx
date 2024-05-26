import styles from './Teams.module.css';

import ListLastTeams from './parts/ListLastTeams';

const Teams = () => {
  return (
    <div className='container'>

      <div className={styles.teams_container}>
        <ListLastTeams />
      </div>

    </div>

  )
}

export default Teams; 