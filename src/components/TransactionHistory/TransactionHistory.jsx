import css from "./TransactionHistory.module.css"

const TransactionHistory = ({items}) => {
    const transaction = items.map((item) => (
    <tr key={item.id}>
      <td>{item.type }</td>
      <td>{item.amount }</td>
      <td>{item.currency }</td>
    </tr>
    ))
    return (
        <table className={css.transactionHistory}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {transaction}
        </tbody>
    </table>
    )
}

export default TransactionHistory