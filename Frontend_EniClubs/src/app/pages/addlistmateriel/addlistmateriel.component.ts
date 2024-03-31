
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../shared/services/token-storage.service';
import {MaterielService} from '../../shared/services/materiel.service';
import {EventsmatService} from '../../shared/services/eventsmat.service';
@Component({
  selector: 'app-addlistmateriel',
  templateUrl: './addlistmateriel.component.html',
  styleUrls: ['./addlistmateriel.component.css']
})
export class AddlistmaterielComponent implements OnInit {







  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  chauffeurs: any;
  errorMessage = '';
  error: any = {isError: false, errorMessage: ''};
  user: any;
  materiels: any;

  idevent: any;
  constructor(private router: Router, private  route: ActivatedRoute, private tokenStorage: TokenStorageService, private matService: EventsmatService , private materielService: MaterielService) {
    this.idevent = this.route['params']['value']['id'];
this.getallMateriel();
  }
  getallMateriel() {
    this.materielService.getall().subscribe(data => {
      this.materiels = data;
    });
  }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
    }
  }
  onSubmit(): void {
    this.form.idevent = this.idevent;
      console.log(this.form);
   /* this.matService.add(this.form).subscribe(
      data => {
        this.router.navigate(['/addeventmateriel', this.idevent]);
      },
      err => {
        this.router.navigate(['/addeventmateriel', this.idevent]);

      }
    );*/
  }
}




