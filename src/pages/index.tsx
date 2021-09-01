import Img from 'next/image'
import type { NextPage } from 'next'
import { Copyright } from '../components/copyrigth';
import styles from '../styles/Home.module.scss';
import InputLabel from '../components/inputLabel';
import { FormEvent, useState } from 'react';
import Button from '../components/button';


const Home: NextPage = () => {
  const [handleEmailLogin, setHandleEmailLogin] = useState('');
  const [handlePasswordLogin, setHandlePasswordLogin] = useState('');

  return (
    <div className={styles.landingPageLoginOne} >
      <div className={styles.image}>
        <Img
          src="/assets/img/logo.svg"
          width={200}
          height={200}
          alt="Logo"
        />
      </div>

      <div className={styles.textApresentation}>
        <p>Seja bem vindo a plataforma digital da Livraria Galvão!</p>
        <span>para continuar sua experiência, faça login abaixo:</span>
      </div>

      <div className={styles.formLogin}>

        <InputLabel
          name="email"
          id="email"
          pattern=".+"
          aria-label="Insira seu email"
          value={handleEmailLogin}
          onChange={e=>setHandleEmailLogin(e.target.value)}
          required
        >Email</InputLabel>

        <InputLabel
          name="password"
          type='password'
          pattern=".+"
          value={handlePasswordLogin}
          onChange={e=>setHandlePasswordLogin(e.target.value)}
          required
        >Password</InputLabel>

      </div>
      <Button
        disabled={!handlePasswordLogin || !handleEmailLogin}
        style={{paddingTop:0}} 
        type="submit">Avançar</Button> 
      <span>Não tem uma conta? <strong>Inscreva-se aqui!</strong></span>
      <div className={styles.separator}>ou</div>
        <button  className={styles.loginWithGoogle}>Login com Google
          <Img
            className={styles.Img}
            src="/assets/img/logo-google.png"
            alt="Logo google"
            width={25}
            height={25}
          />
        </button>
      <Copyright />
    </div>
  )
}

export default Home
