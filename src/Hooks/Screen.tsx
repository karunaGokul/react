import useScreen from "./useScreen";

const Screen = () => {
  const screenSize = useScreen();
  return (
    <div>
      <h2>Screen Component</h2>
      <h4>We have {screenSize} screen</h4>
    </div>
  );
};

export default Screen;
