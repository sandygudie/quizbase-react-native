import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useContext } from "react";
import { QuizContext } from "../context";

function Difficulty() {
  const { selectedDifficulty} =useContext(QuizContext);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Easy");
  const [items, setItems] = useState([
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Intermediate" },
    { value: "hard", label: "Expert" },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value === null ? items[0].value : value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      listMode="MODAL"
      placeholder="Select Level"
      onChangeValue={()=> selectedDifficulty(value)}
    />
  );
}

export default Difficulty;
