import { IPeople } from './IPeople';

export interface IChatRoom {
  name: string;
  peoples: IPeople[];
  addPeople: (people: IPeople) => void;
  subPeople: (people: IPeople) => void;
}
