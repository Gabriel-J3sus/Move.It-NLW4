import Head from 'next/head';
import { useSession } from 'next-auth/client';

import { SideBar } from '../components/SideBar';
import { LeaderboardCard } from '../components/LeaderboardCard';

import styles from '../styles/pages/Leaderboard.module.css';

export default function leaderboard() {
  const [session, loading] = useSession();

  if (loading) {
    return <h1>Carregando...</h1>
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>

      <header>
        <h2>Leaderboard</h2>
      </header>

      <main>
        <div className={styles.leaderboardTableTitle}>
          <p>Posição</p>
          <p>Usuário</p>
          <p>Desafios</p>
          <p>Experiência</p>
        </div>

        <LeaderboardCard />
        <LeaderboardCard />
        <LeaderboardCard />
        <LeaderboardCard />

      </main>

      <SideBar page='leaderboard' />
    </div>
  )
}
