import { Injectable } from '@angular/core';
import { Event } from '../model/event';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventList: Event[] =
  [
    {
      id: 1,
      name: "Bridie Elsom",
      date: "7/3/2021",
      time: "11:06 PM",
      location: {
        address: "099 Dixon Terrace",
        city: "Juradó",
        country: "Colombia"
      }
    },
    {
      id: 2,
      name: "Kane Kleinmintz",
      date: "5/24/2021",
      time: "10:41 AM",
      location: {
        address: "99 Vidon Park",
        city: "Slavuta",
        country: "Ukraine"
      }
    },
    {
      id: 3,
      name: "Gerik Kenwell",
      date: "12/25/2021",
      time: "1:12 AM",
      location: {
        address: "81643 Bluestem Crossing",
        city: "Rio Branco do Sul",
        country: "Brazil"
      }
    }
  ];

  getAll(): Event[] {
    return this.eventList;
  }

  constructor() { }

}
