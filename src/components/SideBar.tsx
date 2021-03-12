import Link from 'next/link';
import { signOut } from 'next-auth/client';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { FiHome, FiAward } from 'react-icons/fi';

import styles from '../styles/components/SideBar.module.css';

interface BarProps {
  page: "home" | "leaderboard";
}

export function SideBar({ page }: BarProps) {
  const homeButtonColors = page === 'home' ? { color: "var(--blue)", borderLeftColor: "var(--blue)" } : {color: "var(--text)"};
  const leaderboardButtonColors = page === 'leaderboard' ? { color: "var(--blue)", borderLeftColor: "var(--blue)" } : {color: "var(--text)"};

  return (
    <div className={styles.sideBarContainer}>
      <img src="logo.svg" alt="Logo"/>

      <main>
        <Link href="/">
          <div className={styles.homeButton} style={homeButtonColors}>
            <FiHome size={32} style={{marginLeft: "36px"}} />
          </div>
        </Link>

        <Link href="/leaderboard">
          <div className={styles.rankButton} style={leaderboardButtonColors}>
            <FiAward size={32} style={{marginLeft: "36px"}} />
          </div>
        </Link>
      </main>


      <button className={styles.logoutButton} onClick={() => signOut({callbackUrl: '/signin', redirect: true})}>
        <AiOutlinePoweroff size={32}/>
      </button>
    </div>
  );
}
