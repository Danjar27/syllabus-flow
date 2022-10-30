import React, {FC} from "react";
import {Data, subjectStyle} from "./interfaces";
import {styleSelector} from "./styleSelector";
import Node from "./Node";

interface Props {
  data: Data;
  showCredits?: boolean;
  color?: string;
  onClick?: () => void;
  style?: subjectStyle;
  children?: React.ReactNode;
}

const Subject: FC<Props> = ({data, showCredits = false, style, onClick}) => {
  const {lineStyle, labelStyle, subjectStyle, creditsStyle} =
    styleSelector(style);

  return (
    <Node lineStyle={lineStyle} style={subjectStyle}>
      <button style={labelStyle}>{data.name}</button>
      {showCredits && (
        <button style={creditsStyle} onClick={onClick}>
          {data.credits}
        </button>
      )}
    </Node>
  );
};

export default Subject;
