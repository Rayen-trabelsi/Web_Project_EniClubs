import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../shared/services/token-storage.service';
import {MaterielService} from '../../shared/services/materiel.service';
import {EventService} from '../../shared/services/events.service';
import {SalleService} from '../../shared/services/salle.service';
import {ClubsService} from '../../shared/services/clubs.service';
@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {





  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  chauffeurs: any;
  errorMessage = '';
  error: any = {isError: false, errorMessage: ''};
  user: any;
  salles: any;
  clubs: any;
  materiels: any;



  constructor(private router: Router, private  route: ActivatedRoute, private tokenStorage: TokenStorageService, private eventsService: EventService , private salleService: SalleService , private clubService: ClubsService,  private materielrvice: MaterielService) {
    this.getallSalle();
    this.getallClubs();
    this.getallMateriel();
  }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
    }
  }
  getallSalle() {
    this.salleService.getall().subscribe( data => {
      this.salles = data;
    });
  }
  getallClubs() {
    this.clubService.getall().subscribe( data => {
      this.clubs = data;
    });
  }
  getallMateriel() {
    this.materielrvice.getall().subscribe( data => {
      this.materiels = data;
    });
  }
  onSubmit(): void {
    console.log(this.form);
  this.eventsService.add(this.form).subscribe(
      data => {
        this.router.navigate(['/gestion-events']);
      },
      err => {
        this.router.navigate(['/gestion-events']);

      }
    );
  }
}



