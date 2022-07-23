
import styles from './styles.module.scss';
import { Logo } from '../Logo';
import { useState } from 'react';

interface HeaderProps {
  show: boolean
}

export function Header() {
  const [show, setShow] = useState(false);  
  const  handleShow = () => {setShow(true)};

  return (
    <header className={styles.headerContainer}>
      <Logo />
      <a className={styles.button} onClick={handleShow}>NOVA TRANSAÇÃO</a>
    </header>
  )
}