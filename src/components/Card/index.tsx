import styles from './styles.module.scss';
import { ArrowDownLeft, ArrowUpRight, DollarSign } from 'react-feather';

export function Card() {
  return (
    <div className={styles.cardList}>
      <div id={styles.paidInCard} className={styles.cardItem}>
        <div className={styles.cardTitle}>
          Entradas 
          < ArrowDownLeft size={24} className={styles.cardPaidInIcon}/>
        </div>
        <div className={styles.cardContent}>R$1.529.289,52</div>
      </div>
      <div id={styles.paidOutCard} className={styles.cardItem}>
        <div className={styles.cardTitle}>
          Saidas 
          < ArrowUpRight size={24} className={styles.cardPaidOutIcon}/>
        </div>
        <div className={styles.cardContent}>R$1.529.289,52</div>
      </div>
      <div id={styles.balanceCard} className={styles.cardItem}>
        <div className={styles.cardTitle}>
          Saldo Total 
          < DollarSign size={24} className={styles.cardBalanceIcon}/>
        </div>
        <div className={styles.cardContent}>R$50,00</div>
      </div>
    </div>
  )
}