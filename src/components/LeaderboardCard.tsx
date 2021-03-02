import styles from '../styles/components/LeaderboardCard.module.css';

export function LeaderboardCard() {
  return (
    <div className={styles.leaderboardCardContainer}>
      <aside className={styles.position}>
        <h2>1</h2>
      </aside>

      <main className={styles.mainContainer}>
        <div className={styles.user}>
          <img src="https:github.com/Gabriel-J3sus.png" alt="Gabriel Jesus"/>

          <p>
            <h3>Gabriel Jesus</h3>
            <span>
              <img src="icons/level.svg" alt="Level"/>
              Level 45
            </span>
          </p>
        </div>


        <div className={styles.challenges}>
        <p>127</p>
        <h3>completados</h3>
        </div>

        <div className={styles.experience}>
          <p>154000</p>
          <h3>xp</h3>
        </div>


      </main>
    </div>
  )
}
