import React, { FC, SyntheticEvent, useState } from "react";

interface Props {
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: SyntheticEvent) => void;
}

const TextArea: FC<Props> = ({ name, value, placeholder, onChange }) => {
  const [valid, isValid] = useState(true);
  return (
    <div className="text-area-group">
      <textarea
        className="text-area-group__textarea"
        name={name}
        required
        rows={5}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        onBlur={() => isValid(false)}
        onFocus={() => isValid(true)}
      />
      {name == "description" && value != "" && value.length < 20 && !valid && (
        <p className="input-group__error">
          Description should be at least 20 characters
        </p>
      )}
    </div>
  );
};

export default TextArea;
