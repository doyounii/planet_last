import React from "react";
import "./Dropbox.module.css";
import { BsChevronDown } from "react-icons/bs";

// const OPTIONS = [
//   { value: "all", name: "전체" },
//   { value: "income", name: "수입" },
//   { value: "expend", name: "지출" },
// ];

const DropBox = (props) => {
  const handleChange = (e) => {
    // event handler
    console.log(e.target.value);
  };

  return (
    <div className="SelectBoxWrapper">
      <select onChange={handleChange}>
        {props.options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            defaultValue={props.defaultValue === option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropBox;
