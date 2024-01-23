import React from "react";
import BlockDetails from "./BlockDetails";

const TransactionsDisplay = ({ transactions }) => {
  return (
    <div className="flex flex-col gap-4 px-2">
      {transactions.map((transaction, index) => (
        <div
          key={index}
          className={`w-full bg-tertiary p-2 flex flex-col  justify-between items-center rounded-md shadow-md ${
            index % 2 === 0 ? "bg-odd" : "bg-even"
          }`}
        >
          <BlockDetails label="TxID" value={transaction.TxID} />

          <BlockDetails
            label="Input Address"
            value={transaction.InputAddress}
          />
          <BlockDetails
            label="Output Address"
            value={transaction.OutputAddress}
          />
          <BlockDetails label="Amount Transferred" value={transaction.Amount} />
          <BlockDetails label="Timestamp" value={transaction.Timestamp} />
        </div>
      ))}
    </div>
  );
};

export default TransactionsDisplay;
