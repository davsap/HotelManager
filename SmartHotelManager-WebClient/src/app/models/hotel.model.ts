export class  Hotel {
  id: number;
  name: string;
  address: string;
  email: string;

  constructor(name: string, address: string, email: string, id?: number) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
  }

}
