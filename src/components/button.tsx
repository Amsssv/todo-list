import React, { FC, ReactNode } from "react";

interface CommonProps {
  children: ReactNode;
  color?: "green" | "blue" | "yellow" | "red";
  disabled?: boolean;
}

type ConditionalProps =
  | {
      submit: true;
      onClick?: () => void;
    }
  | {
      submit?: false;
      onClick: () => void;
    };

type Props = CommonProps & ConditionalProps;

const Button: FC<Props> = ({
  children,
  color = "grey",
  disabled,
  submit,
  onClick,
}) => {
  const classes = `button button--${color}`;
  return (
    <button
      className={classes}
      {...(onClick && { onClick: onClick })}
      {...(submit && { type: "submit" })}
      {...(disabled && { disabled: true })}
    >
      {children}
    </button>
  );
};

export default Button;
