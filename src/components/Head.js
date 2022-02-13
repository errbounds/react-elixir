import styled from "styled-components";

const HeadBlock = styled.div`
  padding: 2.5rem 2.5rem 1.5rem 2.5rem;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 2.25rem;
    color: #343a40;
    text-align: center;
  }
  p {
    margin-top: 1.5rem;
    font-size: 1.25rem;
    text-align: center;
  }
`;

function Head() {
  return (
    <HeadBlock>
      <h1>성장의 비약 계산기</h1>
      <p>
        powered by <a href="https://create-react-app.dev/">create-react-app</a>
      </p>
    </HeadBlock>
  );
}

export default Head;
