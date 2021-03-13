import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

import { SideBar } from '../components/SideBar';
import { LeaderboardCard } from '../components/LeaderboardCard';

import styles from '../styles/pages/Leaderboard.module.css';

interface LeaderboardProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function leaderboard({ level, currentExperience, challengesCompleted }: LeaderboardProps) {
  const [session, loading] = useSession()
  console.log('leaderboard: ', session)
  const router = useRouter()

  useEffect(() => {
    if (!session && !loading ) {
      router.push('/signin');
    } else {
      return;
    }
  }, [session])

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

        <LeaderboardCard 
          username={session?.user.name} 
          image={session?.user.image} 
          level={level}
          currentExperience={currentExperience}
          challengesCompleted={challengesCompleted}
        />
      </main>

      <SideBar page='leaderboard' />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}