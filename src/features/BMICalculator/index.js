import { useState } from "react";
import Result from "./Result";
import { Button, Form, Input, Paragraph } from "./styled";

const BmiCalculator = () => {
  const [result, setResult] = useState();

  const calculateResult = (weight, height) => {
    const bmi = weight / (height / 100) ** 2;

    setResult({
      bmi,
    });
  };

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(weight, height);
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Paragraph>
        {" "}
        WZROST:
        <Input
          placeholder="wpisz swój wzrost"
          onChange={({ target }) => setHeight(target.value)}
        ></Input>
      </Paragraph>
      <Paragraph>
        {" "}
        WAGA:
        <Input
          placeholder="wpisz swoją wagę"
          onChange={({ target }) => setWeight(target.value)}
        ></Input>
      </Paragraph>
      <Paragraph>
        <Button>Przelicz</Button>
      </Paragraph>
      <Result result={result} />
    </Form>
  );
};

export default BmiCalculator;