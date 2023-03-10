import { useState } from "react";
import FormOutput from "./FormOutput";

export interface Props {}
const Form: React.FC<Props> = () => {
  const [enteredFirstName, setFirstName] = useState("");
  const [enteredLastName, setLastName] = useState("");

  const firstNameHandler = (event: any) => {
    setFirstName(event.target.value);
    console.log(enteredFirstName);
  };
  const lastNameHandler = (event: any) => {
    setLastName(event.target.value);
    console.log(enteredLastName);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    console.log("submited");
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg py-4 pr-2">
      <form className="w-full max-w-sm" onSubmit={submitHandler}>
        <div className="md:flex md:items-center mb-5">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              value={enteredFirstName}
              onChange={firstNameHandler}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              value={enteredLastName}
              onChange={lastNameHandler}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              placeholder="******************"
            />
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              type="submit"
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Sign Up
            </button>
          </div>
        </div>
        <FormOutput firstName={enteredFirstName} lastName={enteredLastName} />
      </form>
    </div>
  );
};

export default Form;
