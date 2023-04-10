import { useField } from "formik";
import * as React from "react";

const CustomSelect = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  console.log("field", field);
  console.log("meta", meta);

  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={
          meta.error && meta.touched
            ? "shadow appearance-none border rounded w-full py-2 px-3 text-red-700 leading-tight focus:outline-none focus:shadow-outline"
            : "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        }
      />
      { meta.touched && meta.error && <div className="text-red-600">{meta.error}</div>
          }
    </>
  );
};

export default CustomSelect;
