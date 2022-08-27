import React, { FC, SyntheticEvent } from "react";

interface Props {
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
}

const TextField: FC<Props> = ({ name, value, placeholder, onChange }) => {
  return (
    <div className="field__line">
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        autoComplete="off"
        className="field__input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
