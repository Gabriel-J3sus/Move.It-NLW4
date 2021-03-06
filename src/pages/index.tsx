import Head from 'next/head';
import Link from 'next/link';
import { signIn, providers, useSession } from 'next-auth/client';
import { AiFillGithub, AiOutlineArrowRight } from 'react-icons/ai';

import styles from '../styles/pages/Login.module.css';

interface Providersprops {
  providers: object;
}

export default function SignIn({ providers }: Providersprops) {
  const [ session, loading ] = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | move.it</title>
      </Head>

      <div className={styles.formContainer}>
        <img src="logo-full-white.svg" alt="move.it"/>

        <h2>Bem-vindo</h2>

        {!session ? (
          <>
            <div className={styles.githubAuthContainer}>
              <AiFillGithub size={40} color="var(--text-highlight)" style={{ transform: "matrix(-1, 0, 0, 1, 0, 0)" }}/>
              <p>Faça login com seu Github para começar</p>
            </div>

            {Object.values(providers).map(provider => (
              <button key={provider.name} className={styles.buttonContainer} onClick={() => signIn(provider.id)}>
                Logar com o Github
                <span>
                  <AiOutlineArrowRight size={24} />
                </span>
              </button>

            ))}
          </>

        ) : (
          <Link href={'/home'}>
            <button className={styles.buttonContainer}>
              Entrar

              <span>
                <AiOutlineArrowRight size={24} />
              </span>
            </button>
          </Link>
        )}

      </div>
    </div>
  )
}

SignIn.getInitialProps = async () => {
  return {
    providers: await providers()
  }
}
