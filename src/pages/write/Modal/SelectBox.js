import './SelectBox.css';
const Options = [
  { id: 0, value: '선택' },
  { id: 1, value: '교수님' },
  { id: 2, value: '동기' },
  { id: 3, value: '선배' },
  { id: 4, value: '후배' },
  { id: 5, value: '친구' },
];

function SelectBox({ onChange, name }) {
  const options = Options;
  return (
    <select className="select-box" name={name} onChange={onChange}>
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
}

export default SelectBox;
