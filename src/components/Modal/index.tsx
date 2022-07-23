import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { ArrowUpCircle, ArrowDownCircle } from 'react-feather'

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.scss';

interface ModalProps {
  showModal: boolean,
}

export function ModalTransaction(props: ModalProps) {
  const [show, setShow] = useState(false);  
  const handleClose = () => setShow(false);

  const handleSaveTransaction = () => {
    return;
  }
  return (
    <Modal
        show={true}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Transação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTransaction.ControlInput" className={styles.formGroupTransactionInput}>
              <Form.Control type="text" placeholder='Nome'className={styles.inputForm}/>
              <Form.Control type="number" placeholder='Valor'className={styles.inputForm}/>
            </Form.Group>
            <Form.Group controlId="formTransaction.ControlButton" className={styles.formGroupTransactionButton}>
              <Button className={styles.buttonTransactionType} variant='light'><ArrowUpCircle size={16} className={styles.iconTransactionIn}/><span>Entrada</span></Button>
              <Button className={styles.buttonTransactionType} variant='light'><ArrowDownCircle size={16} className={styles.iconTransactionOut}/><span>Saída</span></Button>
            </Form.Group>
            <Form.Group controlId="formTransaction.ControlButton" className={styles.formGroupTransactionSelect}>
            <Form.Select className={styles.selectTransactionCatagory}>
                <option>Selecione uma categoria</option>
                <option value="1">Receita Fixa</option>
                <option value="2">Educação</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSaveTransaction} className={styles.buttonSaveTransaction}>
            CADASTRAR
          </Button>
        </Modal.Footer>
      </Modal>
  )
}