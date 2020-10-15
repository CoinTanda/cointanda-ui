import React, { FC } from 'react';

interface PropsResponsiveContainer {
  className?: string;
  hideIn?: number;
  showIn?: number;
}

export const QueriedContainer: FC<PropsResponsiveContainer> = props => {
  return <div className={props.className}>{props.children}</div>;
};
