import { useState } from "react";
import DropdownComponent from "./DropdownComponent";

const options = [
  { label: "Learn React", value: "react" },
  { label: "Learn Angular", value: "angular" },
  { label: "Learn Vue", value: "vue" },
];

const DropdownPage = () => {
  const [value, setValue] = useState(null);

  const onChange = (optionSelected) => {
    setValue(optionSelected.label);
    console.log(optionSelected.value);
  };

  return (
    <div>
      <DropdownComponent options={options} value={value} onChange={onChange} />
    </div>
  );
};

export default DropdownPage;
