import {NodeTypes} from "react-flow-renderer/dist/esm/types";
import {useMemo} from "react";

type ElementTypes<T extends string> = {
  [name in T]: (props: unknown) => JSX.Element;
};

const TypesMaker = <T extends string>(
  nodeList?: ElementTypes<T>
): NodeTypes => {
  if (nodeList) {
    return useMemo(() => nodeList as unknown as NodeTypes, [nodeList]);

  }
  return {} as NodeTypes;
};

export default TypesMaker;
