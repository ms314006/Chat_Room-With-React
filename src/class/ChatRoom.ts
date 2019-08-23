import { IChatRoom } from '../interface/IChatRoom';
import { IPeople } from '../interface/IPeople';

class ChatRoom implements IChatRoom {

  name: string;

  peoples: IPeople[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addPeople = (people: IPeople): void => {
    this.peoples.push(people);
  };

  subPeople = (people: IPeople): void => {
    this.peoples.splice(this.peoples.indexOf(people), 1);
  };

}

export default ChatRoom;
