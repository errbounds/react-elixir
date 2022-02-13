import { createGlobalStyle } from "styled-components";
import Template from "./components/Template";
import Head from "./components/Head";
import List from "./components/List";
import Calculate from "./components/Calculate";
import Dialog from "./components/Dialog";
import { useReducer, useState } from "react";
import calculate from "./components/calculator";

const GlobalStyle = createGlobalStyle`
 body {
    background-color: #f0f0f0;
  }
`;

function App() {
  const [dialog, setDialog] = useState(false);
  const [inputs, setInputs] = useState({
    level: 0,
    percent: 0,
    elixir1: 0,
    elixir2: 0,
    elixir3: 0,
    elixir4: 0,
    elixir5: 0,
  });
  const [result, setResult] = useState({
    level: 0,
    percenet: 0,
  });
  const onSubmit = () => {
    const { userLevel, userPercent } = calculate({
      userLevel: Number(inputs.level),
      userPercent: Number(inputs.percent),
      elixirs: [
        inputs.elixir1,
        inputs.elixir2,
        inputs.elixir3,
        inputs.elixir4,
        inputs.elixir5,
      ].map((elixir) => Number(elixir)),
    });
    setResult({
      level: userLevel,
      percent: `${(userPercent * 100).toFixed(3)}%`,
    });
    setDialog(true);
  };
  const onConfirm = () => {
    setDialog(false);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <>
      <GlobalStyle />
      <Template>
        <Head />
        <List onChange={onChange} inputs={inputs} />
        <Calculate onClick={onSubmit} />
      </Template>
      <Dialog
        onConfirm={onConfirm}
        title="결과"
        visible={dialog}
        result={result}
      >
        안녕하세요
      </Dialog>
    </>
  );
}

export default App;
