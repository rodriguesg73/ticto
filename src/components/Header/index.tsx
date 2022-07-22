
import styles from './styles.module.scss';
import Logo from '../Logo';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <Logo />
      <a className={styles.button} onClick={() => (alert('teste'))}>NOVA TRANSAÇÃO</a>
    </header>
  )
}