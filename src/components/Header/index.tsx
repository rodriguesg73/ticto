
import styles from './styles.module.scss';
import { Logo } from '../Logo';
import { useState } from 'react';
import { ModalTransaction } from '../Modal';

export function Header() {
  const [show, setShow] = useState(false);  
  const  handleShow = () => {setShow(true)};
  const handleClose = () => setShow(false);

  return (
    <div>
      <header className={styles.headerContainer}>
        <Logo />
        <a className={styles.button} onClick={handleShow}>NOVA TRANSAÇÃO</a>
      </header>
      <ModalTransaction showModal={show} handleClose={handleClose}/>
    </div>
  )
}