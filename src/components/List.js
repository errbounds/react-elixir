import styled from "styled-components";
import Item from "./Item";
import classNames from "classnames";

const ListBlock = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  flex: 1;
  padding: 1.25rem 1.25rem 2rem 1.25rem;
  .half {
    width: 50%;
  }
  .fullWidth {
    width: 100%;
  }
`;

const itemList = [
  {
    title: "레벨",
    min: 200,
    max: 299,
    step: 1,
    label: "레벨",
    width: "fullWidth",
    id: "level",
  },
  {
    title: "퍼센트",
    min: 0,
    max: 100,
    step: 0.001,
    label: "%",
    width: "fullWidth",
    id: "percent",
  },
  {
    title: "성장의 비약 1",
    min: 0,
    max: 10,
    step: 1,
    label: "개",
    width: "half",
    id: "elixir1",
  },
  {
    title: "성장의 비약 2",
    min: 0,
    max: 10,
    step: 1,
    label: "개",
    width: "half",
    id: "elixir2",
  },
  {
    title: "성장의 비약 3",
    min: 0,
    max: 10,
    step: 1,
    label: "개",
    width: "half",
    id: "elixir3",
  },
  {
    title: "태풍 성장의 비약",
    min: 0,
    max: 10,
    step: 1,
    label: "개",
    width: "half",
    id: "elixir4",
  },
  {
    title: "극한 성장의 비약",
    min: 0,
    max: 10,
    step: 1,
    label: "개",
    width: "half",
    id: "elixir5",
  },
];

function List({ onChange, inputs }) {
  return (
    <ListBlock>
      {itemList.map(({ title, min, max, step, label, width, id }) => (
        <Item
          key={id}
          title={title}
          width={width}
          label={label}
          min={min}
          max={max}
          step={step}
          value={inputs[id]}
          onChange={onChange}
          name={id}
        />
      ))}
    </ListBlock>
  );
}

export default List;
