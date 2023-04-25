import React from "react";

interface Props {
  children: string;
}

function Title({ children }: Props) {
  return <h1>{children}</h1>;
}

export default Title;
