import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https:github.com/Gabriel-J3sus.png" alt="Gabriel Jesus"/>
      <div>
        <strong> Gabriel Araújo de Jesus </strong>
        <p> 
          <img src="icons/level.svg" alt="Level"/>
          Level 1 
        </p>
      </div>
    </div>
  );
}