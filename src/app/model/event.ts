import { Location } from "./location";

export class Event {
  id: number = 0;
  name: string = '';
  date: string = '';
  time: string = '';
  location: Location = {
    address: "Alma utca",
    city: "Debrecen",
    country: "Magyarország"
  };
}
