import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

interface ProfileProps {
  userName: string
}

export function Profile({ userName }: ProfileProps) {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https:github.com/Gabriel-J3sus.png" alt="Gabriel Jesus"/>
      <div>
        <strong> {userName} </strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}
