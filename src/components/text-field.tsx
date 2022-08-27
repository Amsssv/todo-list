import React, { FC, SyntheticEvent } from "react";

interface Props {
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
}

const TextField: FC<Props> = ({ name, value, placeholder, onChange }) => {
  return (
    <div className="input-group">
      <input
        type="text"
        name={name}
        required
        value={value}
        onChange={(e) => onChange(e)}
        autoComplete="off"
        className="input-group__input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
