import {SubjectPosition} from "../interface/subject.interface";

export default class Position {
  private readonly NodeWith: number;
  private readonly nodeHeight: number;

  constructor(NodeWith: number = 275, nodeHeight: number = 70) {
    this.NodeWith = NodeWith;
    this.nodeHeight = nodeHeight;
  }

  private calculateHorizontalPosition(column: number): number {
    return column * this.NodeWith;
  }

  private calculateVerticalPosition(row: number): number {
    return row * this.nodeHeight;
  }

  public calculatePosition(column: number, row: number): SubjectPosition {
    return {
      x: this.calculateHorizontalPosition(column),
      y: this.calculateVerticalPosition(row),
    };
  }
}
