import ButtonGradient from "./assets/svg/ButtonGradient";
import Buttons from "./components/Buttons";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Buttons className="mt-10" href="#login">
          Something
        </Buttons>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
