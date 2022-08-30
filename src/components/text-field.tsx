import React, { FC, SyntheticEvent, useState } from "react";

interface Props {
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
}

const TextField: FC<Props> = ({ name, value, placeholder, onChange }) => {
  const [valid, isValid] = useState(true);
  return (
    <div className="input-group">
      <input
        type="text"
        name={name}
        required
        value={value}
        onChange={(e) => onChange(e)}
        onBlur={() => isValid(false)}
        onFocus={() => isValid(true)}
        autoComplete="off"
        className="input-group__input"
        placeholder={placeholder}
      />
      {name == "title" && value != "" && value.length < 5 && !valid && (
        <p className="input-group__error">Title is too short </p>
      )}
    </div>
  );
};

export default TextField;
