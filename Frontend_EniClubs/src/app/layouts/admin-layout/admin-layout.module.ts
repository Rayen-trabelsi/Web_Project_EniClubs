import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {GestionMaterielComponent} from '../../pages/gestion-materiel/gestion-materiel.component';
import {GestionSalleComponent} from '../../pages/gestion-salle/gestion-salle.component';
import {AddSalleComponent} from '../../pages/add-salle/add-salle.component';
import {AddmaterielComponent} from '../../pages/addmateriel/addmateriel.component';
import {UpdatematerielComponent} from '../../pages/updatemateriel/updatemateriel.component';
import {UpdateSalleComponent} from '../../pages/update-salle/update-salle.component';
import {GestionClubsComponent} from '../../pages/gestion-clubs/gestion-clubs.component';
import {AddclubsComponent} from '../../pages/addclubs/addclubs.component';
import {UpdateclubsComponent} from '../../pages/updateclubs/updateclubs.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        HttpClientModule,
        NgbModule,
        ClipboardModule,
        Ng2SmartTableModule
    ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    GestionMaterielComponent,
    GestionSalleComponent,
    AddSalleComponent,
    AddmaterielComponent,
    UpdatematerielComponent,
    UpdateSalleComponent,
    GestionClubsComponent,
    AddclubsComponent,
    UpdateclubsComponent
  ]
})

export class AdminLayoutModule {}
