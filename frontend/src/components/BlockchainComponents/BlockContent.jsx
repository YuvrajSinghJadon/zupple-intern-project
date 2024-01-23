import React from "react";
import BlockDetails from "./BlockDetails.jsx";
import TransactionsDisplay from "./TransactionsDisplay";

export const BlockContent = ({ block }) => {
  return (
    <div className="w-full lg:w-11/12 mx-auto text-white m-4 lg:m-8 border-t-4 px-4 lg:px-14">
      <h1 className="text-2xl lg:text-3xl mt-4 lg:mt-5 mb-4 lg:mb-5">
        Block{" "}
        <span className="font-bold text-cyan-500 text-xl lg:text-3xl">
          {block.BlockNumber}
        </span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center max-h-96  overflow-y-scroll   md:w-full bg- py-4 lg:py-5 bg-tertiary">
        <div className="lg:w-1/2 w-full">
          <BlockDetails label="Hash" value={block.Hash} index={1} />
          <BlockDetails label="TimeStamp" value={block.Timestamp} index={2} />
          <BlockDetails label="Size" value={block.Size} index={3} />
        </div>

        <div className="lg:w-1/2 w-full">
          <BlockDetails label="Total Fees" value={block.TotalFees} index={5} />
          <BlockDetails
            label="Subsidy + Fees"
            value={block.SubsidyAndFees}
            index={6}
          />
          <BlockDetails label="Weight" value={block.Weight} index={7} />
        </div>
      </div>

      <h1 className="text-2xl lg:text-3xl mt-4 lg:mt-5 mb-4 lg:mb-5">
        <span className="white text-xl lg:text-2xl font-semibold">
          {block.TotalTransactions}
        </span>{" "}
        transactions
      </h1>

      <div className="flex flex-col gap-4">
        <TransactionsDisplay transactions={block.Transactions} />
      </div>
    </div>
  );
};
