import React from "react";
import { Link } from "wouter";

const colorType = {
  primary: "blue",
  secondary: "gray",
  warning: "yellow",
  error: "red",
} as const;

export type colorType = keyof typeof colorType;

interface Props {
  text: string;
  to: string;
  color?: colorType;
}

export const LinkButton: React.FC<Props> = ({
  to,
  text,
  color = "primary",
}) => {
  return (
    <Link to={to}>
      <button
        style={{
          backgroundColor: colorType[color],
          color: "#fff",
          padding: 8,
          borderRadius: 5,
        }}
      >
        {text}
      </button>
    </Link>
  );
};
