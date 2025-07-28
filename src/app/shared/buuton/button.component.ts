import { Component, OnInit } from '@angular/core';

@Component({
  // angular will replace it in the button that has this attribute[app-buuton]
  selector: 'button[appButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {}
