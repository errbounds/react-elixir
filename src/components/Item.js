import styled from "styled-components";

const ItemBlock = styled.div`
  /* padding: 1rem 0; */
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  padding: 0 1rem;
  h2 {
    margin: 0.5rem 0;
  }
  .label {
    align-self: flex-end;
  }
  .label > input {
    margin-top: 0.5em;
    text-align: right;
    outline: none;
    border: none;
    width: 5rem;
    align-self: flex-end;
    font-size: 1.25rem;
  }
  .label > span {
    font-size: 1.25rem;
  }
`;

function Item({ width, title, label, min, max, step, value, onChange, name }) {
  return (
    <ItemBlock className={width}>
      <h2>{title}</h2>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        name={name}
        value={value}
        onChange={onChange}
      />
      <div className="label">
        <input
          type="number"
          min={min}
          max={max}
          name={name}
          value={value}
          onChange={onChange}
        />
        <span>{label}</span>
      </div>
    </ItemBlock>
  );
}

export default Item;
