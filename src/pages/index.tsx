import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import { getSession, Session, useSession } from 'next-auth/client';
import Head from 'next/head';

import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { SideBar } from "../components/SideBar";

import styles from '../styles/pages/Home.module.css';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({level, currentExperience, challengesCompleted }: HomeProps) {
  const [session, loading] = useSession()
  console.log('home: ', session)
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
      <ChallengesProvider
        level={level}
        currentExperience={currentExperience}
        challengesCompleted={challengesCompleted}
      >
        <div className={styles.container}>
          <Head>
            <title>Inicio | move.it</title>
          </Head>

          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div className={styles.userAndCounterContainer}>
                <Profile userName={session?.user.name} image={session?.user.image}/>
                <CompletedChallenges />
                <Countdown />
              </div>
              <div className={styles.challengeContainer}>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>

        <SideBar page='home'/>
      </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  const session = await getSession(ctx)

  return {
    props: {
      session,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
