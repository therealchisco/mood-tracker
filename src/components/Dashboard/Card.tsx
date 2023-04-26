import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
  footer?: string;
}

function Card({ title, description, children, footer }: Props) {
  return (
    <div className="card text-center">
      <div className="card-header "></div>
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {description && <p className="card-text">{description}</p>}
        {children}
      </div>
      {footer && <div className="card-footer text-muted">{footer}</div>}
    </div>
  );
}

export default Card;
