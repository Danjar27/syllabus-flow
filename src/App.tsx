import Subject from "./components/molecules/Subject";
import {PreNode} from "./interface/data.interface";
import Position from "./utils/Position";
import {createNodes} from "./utils/ElementsCreator";
import data from "./assets/data.json";
import TypesMaker from "./utils/TypeMaker";
import ReactFlow, {Background, Controls} from "react-flow-renderer";

function App() {

  const Basico = ({data}: any) => {
    return <Subject data={data} showCredits={true}/>;
  };

  const Profesional = ({data}: any) => {
    return <Subject data={data} showCredits={true}/>;
  };

  const Especial = ({data}: any) => {
    return <Subject data={data} style={{
      subjectStyle: {
        backgroundColor: "black",
      },
      labelStyle: {
        backgroundColor: "transparent",
        color: "white",
      }
    }}/>;
  };

  const Titulacion = ({data}: any) => {
    return <Subject data={data} showCredits={true} />;
  };

  const Header = ({data}: any) => {
    return (
      <Subject
        data={data}
        style={{
          subjectStyle: {
            border: "node",
            background: "transparent",
          },
          labelStyle: {
            background: "transparent",
          },
        }}
      />
    );
  };

  type myTypes =
    | "basico"
    | "profesional"
    | "especial"
    | "titulacion"
    | "header";

  const positionMaker = new Position();

  const information = data as PreNode<myTypes>[];

  const {nodes, edges} = createNodes(information, positionMaker);

  const types = TypesMaker({
    basico: Basico,
    profesional: Profesional,
    titulacion: Titulacion,
    header: Header,
    especial: Especial,
  })

  return (
    <div
      style={{
        width: "100vw",
        height: "80vh",
      }}
    >
      <ReactFlow
        nodesConnectable={false}
        defaultNodes={nodes}
        defaultEdges={edges}
        nodeTypes={types}
        fitView={true}
      >
        <Controls showInteractive={false}/>
        <Background color="#000" gap={16}/>
      </ReactFlow>
    </div>
  )
}

export default App
