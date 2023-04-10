import { useFormik } from "formik";
import { useState } from "react";
import FormOutput from "./FormOutput";
import { basicSchema } from "../Schemas";

export interface Props {}
const Form: React.FC<Props> = () => {
  /* const [enteredFirstName, setFirstName] = useState("");
  const [enteredLastName, setLastName] = useState("");

  const firstNameHandler = (event: any) => {
    console.log(event);
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
  }; */

  const onSubmit = async (values: any, actions: any) => {
    console.log(values);
    console.log(actions);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      age: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });


  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg py-4 pr-2">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              htmlFor="email"
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            >
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="email"
              placeholder="Eneter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? "bg-gray-200 appearance-none border-2 border-red-200 rounded w-full py-2 px-4 text-red-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  : "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              }
              id="email"
            />
          </div>
          {errors.email && touched.email && (
            <p className="text-red-600">{errors.email}</p>
          )}
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              htmlFor="age"
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            >
              Age
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.age && touched.age
                  ? "bg-gray-200 appearance-none border-2 border-red-200 rounded w-full py-2 px-4 text-red-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  : "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              }
              id="age"
              type="number"
              placeholder="Enter your Age"
              required
            />
          </div>
          {errors.age && touched.age && (
            <p className="text-red-600">{errors.age}</p>
          )}
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              htmlFor="password"
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.password && touched.password
                  ? "bg-gray-200 appearance-none border-2 border-red-200 rounded w-full py-2 px-4 text-red-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  : "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              }
              id="password"
              type="password"
              placeholder="Enter your Password"
              required
            />
          </div>
          {errors.password && touched.password && (
            <p className="text-red-600">{errors.password}</p>
          )}
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            >
              Confirm Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? "bg-gray-200 appearance-none border-2 border-red-200 rounded w-full py-2 px-4 text-red-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  : "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              }
              id="confirmPassword"
              type="password"
              placeholder="Enter Confirm Password"
              required
            />
          </div>
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="text-red-600">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              type="submit"
              disabled={isSubmitting}
              className={
                isSubmitting
                  ? "shadow bg-purple-500 hover:bg-purple-400 opacity-25 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "
                  : "shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              }
            >
              Submit
            </button>
          </div>
        </div>
        {/* <FormOutput firstName={enteredFirstName} lastName={enteredLastName} /> */}
      </form>
    </div>
  );
};

export default Form;
