interface Transaction {
  description: string;
  type: boolean;
  value: number;
  category: string;
  date: string;
}
const dia = new Date().toLocaleDateString('pt-BR');
export const data = [
  {
    description: 'Curso de NextJS',
    type: false,
    value: 899,
    category: 'Educação',
    date: dia
  },
  {
    description: 'Salário',
    type: true,
    value: 7350,
    category: 'Receita fixa',
    date: dia
  },
  {
    description: 'Curso de NextJS',
    type: false,
    value: 899,
    category: 'Educação',
    date: dia
  },
  {
    description: 'Curso de NextJS',
    type: false,
    value: 899,
    category: 'Educação',
    date: dia
  },
]

export const columns = [
  {
    Header: 'Descrição',
    accessor: 'description' as keyof Transaction
  }, {
    Header: 'Valor',
    accessor: 'value' as keyof Transaction
  }, {
    Header: 'Categoria',
    accessor: 'category' as keyof Transaction
  }, {
    Header: 'Data',
    accessor: 'date' as keyof Transaction
  }
]