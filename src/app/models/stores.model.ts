import {Address} from './address.model'

export class Store {
  address = new Address();
  seller: String;
  uuid: String;
  createdAt: Date;
  updatedAt: Date;
  id: String
}