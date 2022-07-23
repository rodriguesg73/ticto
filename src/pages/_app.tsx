import { useState } from "react";
import type { AppProps } from 'next/app'

import { Button, Modal } from "react-bootstrap";
import { Header } from "../components/Header"
import { Card } from "../components/Card";
import { Datatable } from "../components/Table";
import { ModalTransaction } from "../components/Modal";

import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div >
      <main>
        <Header />
        <ModalTransaction showModal={Header().props.show}/>
        <Component {...pageProps} />
      </main>
      <Card />
      <Datatable />
    </div>
  )
}

export default MyApp
