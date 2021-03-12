import { session } from 'next-auth/client';
import styles from '../styles/components/LeaderboardCard.module.css';

interface CardProps {
  username?: string;
  image?: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export function LeaderboardCard({ username, image, level, challengesCompleted, currentExperience }: CardProps) {
  return (
    <div className={styles.leaderboardCardContainer}>
      <aside className={styles.position}>
        <h2>1</h2>
      </aside>

      <main className={styles.mainContainer}>
        <div className={styles.user}>
          <img src={image} alt={username}/>

          <h3>
            <p>{username}</p>
            <span>
              <img src="icons/level.svg" alt="Level"/>
              Level {level}
            </span>
          </h3>
        </div>


        <div className={styles.challenges}>
        <p>{challengesCompleted}</p>
        <h3>completados</h3>
        </div>

        <div className={styles.experience}>
          <p>{currentExperience}</p>
          <h3>xp</h3>
        </div>


      </main>
    </div>
  )
}
