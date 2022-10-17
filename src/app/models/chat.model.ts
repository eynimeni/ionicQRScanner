import {UserBuildConditionals} from "ionicons/dist/types/stencil-public-runtime";

export interface Chat {
  id : string;
  messages : Array<Message>;
}

export interface Message {
  text : string;
  timestamp : Date;
  user : User;
}

export interface User {
  id : string;
  name: string;
}
