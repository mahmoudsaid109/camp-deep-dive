import { Component, ElementRef, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/buuton/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css'],
})
export class NewTicketComponent {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  onSubmit(title: string, ticketText: string) {
    console.log(title, ticketText);
    //native element is an object of elementRef allow to access value from form
    // this.form?.nativeElement.reset(); => @ViewChild.
    this.form().nativeElement.reset();
  }

}
