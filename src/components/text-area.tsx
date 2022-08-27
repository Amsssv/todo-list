import React, { FC, SyntheticEvent } from "react";

interface Props {
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: SyntheticEvent) => void;
}

const TextArea: FC<Props> = ({ name, value, placeholder, onChange }) => {
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
      />
    </div>
  );
};

export default TextArea;
