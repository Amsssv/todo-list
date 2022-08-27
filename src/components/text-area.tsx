import React, { FC, SyntheticEvent } from "react";

interface Props {
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: SyntheticEvent) => void;
}

const TextArea: FC<Props> = ({ name, value, placeholder, onChange }) => {
  return (
    <div className="text-aria__line">
      <textarea
        className="text-aria"
        name={name}
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default TextArea;
