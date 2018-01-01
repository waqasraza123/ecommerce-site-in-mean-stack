import { Component, OnInit } from '@angular/core';
import { DashboardFooterComponent } from '../dashboard-footer/dashboard-footer.component';
import { DashboardInboxComponent } from '../dashboard-inbox/dashboard-inbox.component';
import { DashboardLatestProjectsComponent } from '../dashboard-latest-projects/dashboard-latest-projects.component';
import { DashboardLeftSideMenuComponent } from '../dashboard-left-side-menu/dashboard-left-side-menu.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
