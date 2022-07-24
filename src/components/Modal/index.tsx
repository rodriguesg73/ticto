import { Modal, Form, ToggleButton, Button } from "react-bootstrap";
import React, { useState } from "react";
import { ArrowUpCircle, ArrowDownCircle } from 'react-feather'

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.scss';

interface ModalProps {
  showModal: boolean;
  handleClose: () => void
}

export function ModalTransaction(props: ModalProps) {
  const [checked, setChecked] = useState('1');
  const [transactioName, setTransactionName] = useState("");
  const [transactionValue, setTransactionValue] = useState(0);
  const [transactionType, setTransactionType] = useState(false);
  const [transactionCategory, setTransactionCategory] = useState(0);
  
  const handleTransactionName = (event: React.FormEvent<HTMLFormElement>) => {
    setTransactionName(event.currentTarget.value);
  }

  const handleTransactionValue = (event: React.FormEvent<HTMLFormElement>) => {
    setTransactionValue(event.currentTarget.value)
  }
  
  const handleTransactionType = (event: React.MouseEvent<HTMLButtonElement>) => {
  if(event.currentTarget.value === '1')
    setTransactionType(true)
    else
    setTransactionType(false)
  }

  const handleTransactionCategory = (event: React.FormEvent<HTMLSelectElement>) => {
    setTransactionCategory(event.currentTarget.selectedIndex);
  }

  
  const handleSaveTransaction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(transactioName, transactionValue, transactionType, transactionCategory);
  }

  return (
    <Modal
        show={props.showModal}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        className={styles.modalContainer}
      >
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Transação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSaveTransaction}>
            <Form.Group controlId="formTransaction.ControlInput" className={styles.formGroupTransactionInput}>
              <Form.Control type="text" placeholder='Nome'className={styles.inputForm} onChange={(event) => handleTransactionName}/>
              <Form.Control type="number" placeholder='Valor'className={styles.inputForm} onChange={(event) => handleTransactionValue}/>
            </Form.Group>
            <Form.Group controlId="formTransaction.ControlButton" className={styles.formGroupTransactionButton}>
              <ToggleButton className={styles.buttonTransactionType} id="toggleEntrada" variant='light' type="checkbox" onChange={(event) => [handleTransactionType, setChecked(event?.currentTarget.value)]} checked={checked === '1'} value="1" >
                <ArrowUpCircle size={16} className={styles.iconTransactionIn} /><span>Entrada</span>
              </ToggleButton>
              <ToggleButton className={styles.buttonTransactionType} id="toggleSaida" variant='light' type="checkbox" onChange={(event) => [handleTransactionType, setChecked(event?.currentTarget.value)]} checked={checked === '2'} value="2">
                <ArrowDownCircle size={16} className={styles.iconTransactionOut} /><span>Saída</span>
              </ToggleButton>
            </Form.Group>
            <Form.Group controlId="formTransaction.ControlButton" className={styles.formGroupTransactionSelect}>
            <Form.Select className={styles.selectTransactionCatagory} onChange={(event) => handleTransactionCategory}>
                <option>Selecione uma categoria</option>
                <option value="Receita Fixa">Receita Fixa</option>
                <option value="Educação">Educação</option>
              </Form.Select>
            </Form.Group>
            <Button type="submit" className={styles.buttonSaveTransaction}>
            CADASTRAR
          </Button>
          </Form>
        </Modal.Body>
      </Modal>
  )
}