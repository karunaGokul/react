import { useField } from "formik";
import * as React from "react";

const CustomCheckbox = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  console.log("field", field);
  console.log("meta", meta);

  return (
    <>
      <input
        {...field}
        {...props}
        className={
          meta.error && meta.touched
            ? "appearance-none checked:bg-gray-900 checked:border-transparent"
            : "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        }
      />
      <span>I accept the terms of service</span>
      { meta.touched && meta.error && <div className="text-red-600">{meta.error}</div> }
    </>
  );
};

export default CustomCheckbox;
