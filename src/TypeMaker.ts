import {NodeTypes} from "react-flow-renderer/dist/esm/types";

type ElementTypes<T extends string> = {
  [name in T]: (props: any) => JSX.Element;
};

const TypesMaker = <T extends string>(
  nodeList?: ElementTypes<T>
): NodeTypes => {
  if (nodeList) {
    return nodeList as unknown as NodeTypes
  }
  return {} as NodeTypes;
};

export default TypesMaker;
