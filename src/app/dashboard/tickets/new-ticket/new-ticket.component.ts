import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../shared/buuton/button.component';
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css'],
})
export class NewTicketComponent {
  
}
