import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';


import { authInterceptorProviders } from './shared/_helpers/auth.interceptor';
import {AuthService} from './shared/services/auth.service';
import {AuthGuard} from './shared/_helpers/auth/auth-guard.service';
import { GestionMaterielComponent } from './pages/gestion-materiel/gestion-materiel.component';
import { GestionSalleComponent } from './pages/gestion-salle/gestion-salle.component';
import { AddSalleComponent } from './pages/add-salle/add-salle.component';
import { AddmaterielComponent } from './pages/addmateriel/addmateriel.component';
import { UpdatematerielComponent } from './pages/updatemateriel/updatemateriel.component';
import { UpdateSalleComponent } from './pages/update-salle/update-salle.component';
import { GestionClubsComponent } from './pages/gestion-clubs/gestion-clubs.component';
import { AddclubsComponent } from './pages/addclubs/addclubs.component';
import { UpdateclubsComponent } from './pages/updateclubs/updateclubs.component';
import { GestionEventsComponent } from './pages/gestion-events/gestion-events.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { AddeventComponent } from './pages/addevent/addevent.component';
import { AddlistmaterielComponent } from './pages/addlistmateriel/addlistmateriel.component';
import { AddmaterieleventComponent } from './pages/addmaterielevent/addmaterielevent.component';








@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ComponentsModule,
        NgbModule,
        RouterModule,
        AppRoutingModule,
        Ng2SmartTableModule
    ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    GestionEventsComponent,
    AddeventComponent,
    AddlistmaterielComponent,
    AddmaterieleventComponent,

  ],
  providers: [
    AuthService,
    authInterceptorProviders,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
