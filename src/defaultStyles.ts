import React from "react";

export const defaultConnectorStyle: React.CSSProperties = {
  borderRadius: "50%",
  backgroundColor: "transparent",
  border: "none",
};

export const defaultLineStyle: React.CSSProperties = {
  stroke: "#555",
  strokeWidth: 2.25,
  shapeRendering: "geometricPrecision",
};

export const defaultSubjectStyle: React.CSSProperties = {
  display: "flex",
  overflow: "hidden",
  borderRadius: "5px",
  border: "2px solid",
  borderColor: "rgb(47,47,47)",
  backgroundColor: "white",
  height: "3em",
  width: "12em",
};

export const defaultLabelStyle: React.CSSProperties = {
  height: "100%",
  minWidth: "75%",
  maxWidth: "100%",
  width: "100%",
  border: "none",
  fontWeight: "bold",
  fontSize: "14px",
  background: "#ededed",
};

export const defaultCreditStyle: React.CSSProperties = {
  height: " 100%",
  width: " 25%",
  fontSize: " 16px",
  alignSelf: " center",
  border: " none",
  fontWeight: "bold",
  cursor: " pointer",
  background: "rgb(255, 255, 255)",
};
