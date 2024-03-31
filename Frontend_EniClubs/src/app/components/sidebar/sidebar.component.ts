import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TokenStorageService} from '../../shared/services/token-storage.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/gestion-salle', title: 'gestion-salle',  icon:'ni-planet text-blue', class: '' },
    { path: '/gestion-materiel', title: 'gestion-materiel',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/gestion-clubs', title: 'gestion-clubs',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/gestion-events', title: 'Gsetion des Evenements',  icon:'ni-bullet-list-67 text-red', class: '' }
];
export const ROUTESS: RouteInfo[] = [
  { path: '/gestion-events', title: 'Gestion des Evenements',  icon:'ni-bullet-list-67 text-red', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  role: any;
  user: any;
  constructor(private router: Router, private tokenservice: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenservice.getToken()) {
      this.user = this.tokenservice.getUser();
    }

    if (this.user.roles[0] === 'ROLE_ADMIN') {  this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
      });
    } else {
      this.menuItems = ROUTESS.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
      });
    }
  }
}
