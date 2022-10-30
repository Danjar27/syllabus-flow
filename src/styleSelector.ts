import {get} from "lodash";
import {
  defaultConnectorStyle,
  defaultSubjectStyle,
  defaultCreditStyle,
  defaultLabelStyle,
} from "./defaultStyles";
import {subjectStyle} from "./interfaces";

export const styleSelector = (styles?: subjectStyle) => {
  const lineStyle = {
    ...defaultConnectorStyle,
    ...get(styles, "lineStyle", {}),
  };

  const subjectStyle = {
    ...defaultSubjectStyle,
    ...get(styles, "subjectStyle", {}),
  };

  const creditsStyle = {
    ...defaultCreditStyle,
    ...get(styles, "creditsStyle", {}),
  };

  const labelStyle = {
    ...defaultLabelStyle,
    ...get(styles, "labelStyle", {}),
  };

  return {
    labelStyle,
    lineStyle,
    creditsStyle,
    subjectStyle,
  };
};
