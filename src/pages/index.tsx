import type { NextPage } from 'next'
import { Card } from "../components/Card";
import { Datatable } from "../components/Table";

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Card />
      <Datatable />
    </div>
  )
}

export default Home
