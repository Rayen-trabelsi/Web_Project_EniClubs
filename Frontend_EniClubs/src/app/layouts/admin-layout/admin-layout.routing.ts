import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {RegisterComponent} from '../../pages/register/register.component';
import {GestionSalleComponent} from '../../pages/gestion-salle/gestion-salle.component';
import {GestionMaterielComponent} from '../../pages/gestion-materiel/gestion-materiel.component';
import {AddSalleComponent} from '../../pages/add-salle/add-salle.component';
import {AddmaterielComponent} from '../../pages/addmateriel/addmateriel.component';
import {UpdatematerielComponent} from '../../pages/updatemateriel/updatemateriel.component';
import {UpdateSalleComponent} from '../../pages/update-salle/update-salle.component';
import {GestionClubsComponent} from '../../pages/gestion-clubs/gestion-clubs.component';
import {AddclubsComponent} from '../../pages/addclubs/addclubs.component';
import {UpdateclubsComponent} from '../../pages/updateclubs/updateclubs.component';
import {GestionEventsComponent} from '../../pages/gestion-events/gestion-events.component';
import {AddeventComponent} from '../../pages/addevent/addevent.component';
import {AddmaterieleventComponent} from '../../pages/addmaterielevent/addmaterielevent.component';
import {AddlistmaterielComponent} from '../../pages/addlistmateriel/addlistmateriel.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'gestion-salle',   component: GestionSalleComponent },
  { path: 'addsalle',   component: AddSalleComponent },
  { path: 'updatesalle/:id',         component: UpdateSalleComponent },
  { path: 'gestion-clubs',   component: GestionClubsComponent },
  { path: 'gestion-events',   component: GestionEventsComponent },
  { path: 'addevents',   component: AddeventComponent },
  { path: 'addeventmateriel/:id',   component: AddmaterieleventComponent },
  { path: 'addlistmateriel/:id',   component: AddlistmaterielComponent },





  { path: 'addclubs',         component: AddclubsComponent },
  { path: 'updateclubs/:id',         component: UpdateclubsComponent },

  { path: 'gestion-materiel',         component: GestionMaterielComponent },
  { path: 'addmateriel',         component: AddmaterielComponent },
  { path: 'updatemateriel/:id',         component: UpdatematerielComponent },


  { path: 'icons',          component: IconsComponent },
  { path: 'register',   component: RegisterComponent},
];
