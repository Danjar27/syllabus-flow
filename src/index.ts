import Node from "./components/atoms/Node";
import Subject from "./components/molecules/Subject";
import {
  defaultConnectorStyle,
  defaultCreditStyle,
  defaultLabelStyle,
  defaultSubjectStyle,
  defaultLineStyle
} from "./components/styles/defaultStyles";
import {Data, Node as INode, PreNode, Connection} from "./interface/data.interface";
import {subjectStyle, SubjectPosition} from "./interface/subject.interface";
import {connectNodes, createNode, createNodes} from "./utils/ElementsCreator";
import Position from "./utils/Position";
import {styleSelector} from "./utils/styleSelector";
import TypesMaker from "./utils/TypeMaker";

export {
  Node,
  Subject,
  defaultConnectorStyle,
  defaultCreditStyle,
  defaultLabelStyle,
  defaultSubjectStyle,
  defaultLineStyle,
  connectNodes,
  createNode,
  createNodes,
  Position,
  styleSelector,
  TypesMaker
};

export type {
  Data,
  INode,
  PreNode,
  Connection,
  subjectStyle,
  SubjectPosition,
}
