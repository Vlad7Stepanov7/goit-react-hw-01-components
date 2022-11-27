import PropTypes from 'prop-types';
import { Table, Th, Td, } from './TransactionHistory.styled';
const TransactionHistory = ({items}) => {
    return (
       <Table className="transaction-history">
  <thead>
    <tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </tr>
  </thead>

  <tbody>
    {items.map(({ type, amount, currency, id }) => (
    <tr key={id}>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </tr>
    ))}
  </tbody>
</Table>
    );
}

TransactionHistory.propsType = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })),
}

export default TransactionHistory;