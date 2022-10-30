import {Node, PreNode} from "./interfaces";
import Position from "./Position";
import {v4 as uuid} from "uuid";
import {Edge, MarkerType} from "react-flow-renderer";
import {CSSProperties} from "react";
import {defaultLineStyle} from "./defaultStyles";

export const connectNodes = <T>(
  allNodes: PreNode<T>[],
  styles: CSSProperties
): Edge<T>[] => {
  const connections = [] as Edge<T>[];
  allNodes.forEach((node) => {
    if (!node.connects) {
      return;
    }
    node.connects.forEach((connection) => {
      connections.push({
        id: uuid(),
        target: connection.to,
        source: node.id,
        style: styles,
        type: "smoothstep",
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: styles.stroke,
        },
        animated: connection.animation || false,
      });
    });
  });
  return connections;
};

export const createNode = <T>(
  node: PreNode<T>,
  positionCreator: Position
): Node<T> => {
  const position = positionCreator.calculatePosition(node.column, node.row);
  const {column, row, ...rest} = node;
  return {
    ...rest,
    position,
  };
};

export const createNodes = <T>(
  allNodes: PreNode<T>[],
  positionCreator: Position,
  styles: CSSProperties = defaultLineStyle
): { nodes: Node<T>[], edges: Edge<T>[] } => {
  const nodes = allNodes.map((node) => createNode(node, positionCreator));
  const edges = connectNodes(allNodes, styles);
  return {
    nodes,
    edges
  }
};
