import {
  Component,
  HostBinding,
  HostListener,
  input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  }, 
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  // @HostListener('click')   onClick() {
  //   console.log('Control clicked');
  // }
  label = input.required<string>();
  onClick() {
    console.log('Control clicked');
  }
}
