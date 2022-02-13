import styled from "styled-components";
import Button from "./Button";

const CalculateBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem auto;
`;

function Calculate({ onClick }) {
  return (
    <CalculateBlock>
      <Button onClick={onClick}>submit</Button>
    </CalculateBlock>
  );
}

export default Calculate;
