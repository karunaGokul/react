export interface Props {
  firstName: string;
  lastName: string;
}
const FormOutput: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>{props.firstName}</h2>
      <h3>{props.lastName}</h3>
    </div>
  );
};

export default FormOutput;
