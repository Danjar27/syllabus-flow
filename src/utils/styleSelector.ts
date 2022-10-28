import {get} from "lodash";
import {
  defaultConnectorStyle,
  defaultSubjectStyle,
  defaultCreditStyle,
  defaultLabelStyle,
} from "../components/styles/defaultStyles";
import {subjectStyle} from "../interface/subject.interface";

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
