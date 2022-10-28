# Syllabus flow

Syllabus flow uses [react flow v10](https://reactflow.dev/)
to render a flow diagram of a syllabus. It could be used for developers
or students that wants to get a more visual representation of a syllabus.

## How to use

### Install

```npm install syllabus-flow```

### Use

Currently, only v10 of react flow is supported, so make sure to have the
correct version installed.

In order to create a syllabus diagram, you need to create whether an
object or a json file that describes the syllabus. This Object needs to
implement PreNode interface, which is declared as:

```typescript
  interface PreNode<T> {
  id: string,
  type: T,
  data: {
    name: string,
    credits: number,
    [key: string]: any
  },
  column: number,
  row: number,
  connects: [
    {
      // this must be the id of the node that this node connects to
      to: string,
      animation: boolean
    }
  ]
}
```

Remember that column and row are used to position the node in the diagram.

In order to exploit the full potential of using typescript, you must
define a type with all the possible types of nodes|subjects that you want
to use in your syllabus. For example:

```typescript
type Sections = 'basics' | 'headers' | 'Professionals' | 'Electives'
```

Once you have defined the type, you can use it to create the syllabus.
use createNodes function. This last function takes as parameters the
syllabus object that needs to be casted to PreNode and a Position
class, which will be used to compute the position of the nodes in the
diagram. You also need to use typesMaker function. This function implements
the types you already defined and returns and wraps the components so
it will prevent type errors. Even tho you can use the components you
want, I recommend using Subject component defined in the package.

```typescript
// import your data and define your types

const information = data as PreNode<Sections>[]
const positionMaker = Position()

const types = TypesMaker({
  basics: <Basics/>,
  headers: <Headers/>,
  Professionals: <Professionals/>,
  Electives: <Electives/>
})

const {nodes, edges} = createNodes(information, positionMaker)

```

Finally, it returns an object with the nodes and the edges of
the diagram, which needs to be passed to the react flow component.

# Notes

- The id of each node|subject should be unique. If not, the diagram will
  not be rendered correctly. 
- The `connects` property is used to define the edges between subjects.