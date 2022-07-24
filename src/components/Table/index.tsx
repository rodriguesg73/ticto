import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.scss';
import { useTable } from 'react-table'
import Table from 'react-bootstrap/Table'
import { columns, data, } from '../../data';
import { Trash, Trash2 } from 'react-feather';

export function Datatable() {
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data})
  return(
    <div className={styles.tableContainer}>
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className={styles.tableHeader}>
              {headerGroup
                .headers
                .map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className={styles.tableRow}>
                {row
                  .cells
                  .map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                  <td><Trash2 className={styles.iconTransactionDelete}/></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

/*

*/


