import { FormEvent } from 'react';
import Head from 'next/head';
import { signIn, getSession, Session } from 'next-auth/client';
import { AiFillGithub, AiOutlineArrowRight } from 'react-icons/ai';

import styles from '../styles/pages/Login.module.css';

interface AuthProps {
  session: Session;
}

export default function SignIn({ session }: AuthProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login | move.it</title>
      </Head>

      <div className={styles.formContainer}>
        <img src="logo-full-white.svg" alt="move.it"/>

        <h2>Bem-vindo</h2>
          
        <div className={styles.githubAuthContainer}>
          <AiFillGithub size={40} color="var(--text-highlight)" style={{ transform: "matrix(-1, 0, 0, 1, 0, 0)" }}/>
          <p>Faça login com seu Github para começar</p>
        </div>

        <button className={styles.buttonContainer} onClick={() => signIn('github')}>
          Logar com o Github
          <span>
            <AiOutlineArrowRight size={24} />
          </span>
        </button>
      </div>
    </div>
  )
}

SignIn.getInitialProps = async (context) => {
  const { req, res } =  context;
  const session = await getSession({ req });

  if  (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/",
    });

    res.end()
    return;
  }

  return {
    session: session,
  }
}
