import React, { CSSProperties, FC, HTMLProps } from "react";
import { Handle, Position } from "react-flow-renderer";

interface Props extends HTMLProps<HTMLDivElement> {
  lineStyle: CSSProperties;
  children: React.ReactNode | React.ReactNode[];
}

export const Node: FC<Props> = ({ lineStyle, children, ...props }) => {
  return (
    <div {...props}>
      <Handle type="target" position={Position.Left} style={lineStyle} />
      {children}
      <Handle type="source" position={Position.Right} style={lineStyle} />
    </div>
  );
};

export default Node;
