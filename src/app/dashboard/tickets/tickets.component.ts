import { Component, OnInit } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
  imports: [NewTicketComponent]
})
export class TicketsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
