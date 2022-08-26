import React, { FC } from "react";
import "./text-field-styles.css";

interface Props {
  id: string;
  name: string;
  type: "text";
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const TextField: FC<Props> = ({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="field__line">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
        autoComplete="off"
        className="field__input"
        placeholder={placeholder}
      />
      {/*<label htmlFor={id} className="field__label">*/}
      {/*  {placeholder}*/}
      {/*</label>*/}
    </div>
  );
};

export default TextField;
