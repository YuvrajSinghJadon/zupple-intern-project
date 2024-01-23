import { useState } from "react";
import Box from "../components/BlockchainComponents/Box";
import { data } from "../data/data.js";
import { useDispatch, useSelector } from "react-redux";
import { updateDataArray, updateId } from "../redux/slices/blockchainSlice.js";
import { BlockContent } from "../components/BlockchainComponents/BlockContent.jsx";
function Blockchain() {
  const [block, setBlock] = useState({});
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  console.log("hello");
  const handleOnClick = (e) => {
    setClick(true);
    console.log(e);
    console.log(e.target.innerText);
    const val = e.target.innerText;

    const dataObject = data.find((item) => item.BlockNumber == val);

    if (dataObject) {
      setBlock(dataObject);
      console.log("block of data is: ", block);
      const value = e.target.innerText;
      dispatch(updateId(value));
      dispatch(updateDataArray(dataObject));
    }
  };

  const serialNumbers = [
    657310, 657320, 657330, 657340, 657350, 657360, 657370, 657380,
  ];

  return (
    <>
      <div className="flex justify-around mt-6 mb-3 gap-6 text-center overflow-scroll sm:overflow-hidden">
        {serialNumbers.map((num, index) => (
          <span
            onClick={handleOnClick}
            className="cursor-pointer bg-gradient-to-r from-cyan-100  to-cyan-300 inline-block text-transparent bg-clip-text text-xl font-bold blinking-text border-b mb-2"
          >
            {num}
          </span>
        ))}
      </div>
      <div className="flex gap-6 justify-evenly overflow-hidden lg:overflow-visible">
        {data.map((item, index) => (
          <Box
            key={index}
            blockNumber={item.BlockNumber}
            speed={item.speed}
            size={item.Size}
            transactions={item.Transactions}
            weight={item.Weight}
          />
        ))}
      </div>

      {click && <BlockContent block={block} />}
    </>
  );
}

export default Blockchain;
