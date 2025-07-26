import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServerComponent } from "./dashboard/server-status/server.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [HeaderComponent, ServerComponent, TrafficComponent, TicketsComponent, DashboardItemComponent],
})
export class App {


}
