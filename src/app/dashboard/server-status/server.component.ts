import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  constructor() {
    setInterval(() => {
      const rnd = Math.random(); // 0 -> 0.99999999999
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    },5000)
  }
}
