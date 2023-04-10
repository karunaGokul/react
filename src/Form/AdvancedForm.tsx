import * as React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../Schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";

interface MyFormValues {
  firstName: string;
}

const AdvancedForm: React.FC<{}> = () => {

    const onSubmit = async (values: any, actions: any) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
      };

  const initialValues: MyFormValues = { firstName: "" };
  return (
    <div>
      <Formik
        initialValues={{ username: "", jobType: "", acceptedTos: false }}
        validationSchema={advancedSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
            <CustomInput
              label="Username"
              name="username"
              type="text"
              placeholder="Enter your username"
            />

            <CustomSelect
              label="Job Type"
              name="jobType"
              placeholder="Please select a job"
            >
              <option value="">Please select a job type</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              <option value="other">Other</option>
            </CustomSelect>

            <CustomCheckbox type="chechbox" name="acceptedTos" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdvancedForm;
