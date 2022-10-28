import { SubjectPosition } from "./subject.interface";

export interface Data {
  name: string;
  credits: number;
  test?: string;

  [k: string]: string | number | undefined;
}

export interface Connection {
  to: string;
  animation: boolean;
}

export interface PreNode<T> {
  id: string;
  type: T;
  column: number;
  row: number;
  data: Data;
  connects?: Connection[];
}

export interface Node<T> {
  id: string;
  type: T;
  position: SubjectPosition;
  data: Data;
}
