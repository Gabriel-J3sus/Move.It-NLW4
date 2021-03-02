import { useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { AiFillGithub, AiOutlineArrowRight } from 'react-icons/ai';

import styles from '../styles/pages/Login.module.css';

export default function Login() {
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

        <div className={styles.inputContainer}>
          <input type="text" placeholder="Digite seu username" name="authInput" />

          <button>
            <AiOutlineArrowRight size={24} color="var(--white)"/>
          </button>
        </div>
      </div>
    </div>
  )
}
