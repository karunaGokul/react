import * as React from "react";
import useCounter from "./useCounter";

const CustomHook = () => {
  // const [value, setValue] = useState(0);

  const [ value, increment, decrement, reset] = useCounter(0);

  return (
    <div>
      <h2 className="mb-3">Custom Hooks</h2>
      { value }
      <div className="mt-3">
      <button onClick={increment} className="mr-3 bg-blue-500 text-white py-2 px-4 rounded">
        Increment
      </button>
      <button onClick={decrement} className="mr-3 bg-blue-500 text-white py-2 px-4 rounded">
        Decrement
      </button>
      <button onClick={reset} className="bg-blue-500 text-white py-2 px-4 rounded">
        Reset
      </button>
      </div>
     
    </div>
  );
};

export default CustomHook;
