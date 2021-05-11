import React, { useState } from "react";

interface IAdd {
  handleAdd: (newTask: string) => void;
}

const AddTask = ({ handleAdd }: IAdd) => {
  const [text, setText] = useState<string>("");
  const add = () => {
    if (text) {
      handleAdd(text);
    } else alert("Enter new Task");
  };
  return (
    <div className="add">
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />
      <button onClick={add}>Add</button>
    </div>
  );
};

export default AddTask;
