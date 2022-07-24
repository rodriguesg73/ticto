import { createContext, useState, ReactNode, useContext } from 'react'

interface Transaction {
  description: string;
  value: number,
  type: boolean;
  category: string;
  date: string;
}

interface TransactionContextData {
  transactionList: Transaction[];
  newTransactionItem: Transaction;
}

export const TransactionContext = createContext({} as TransactionContextData);

interface TransactionContextPropsProvider {
  children: ReactNode;
}

export function TransactionContextProvider({children}: TransactionContextPropsProvider) {
  const [transactionList, setTransactionList] = useState([]);
  const [newTransactionItem, setNewTransactionItem] = useState<Transaction>({} as Transaction)

  return (
    <TransactionContext.Provider value={{transactionList, newTransactionItem}}>
      {children}
    </TransactionContext.Provider>
  )
}
