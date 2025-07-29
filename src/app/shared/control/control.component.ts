import { Component, input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class ControlComponent {
  label = input.required<string>();
}
