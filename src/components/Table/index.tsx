import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.scss';
import { useTable } from 'react-table'
import Table from 'react-bootstrap/Table'
import { columns, data, } from '../../data';

export function Datatable() {
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data})
  return(
    <div className={styles.tableContainer}>
      <Table striped  {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup
                .headers
                .map(column => (
                  <th {...column.getHeaderProps()} className={styles.tableHeader}>{column.render('Header')}</th>
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


