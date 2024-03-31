import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../shared/services/token-storage.service';
import {SalleService} from '../../shared/services/salle.service';
import {MaterielService} from '../../shared/services/materiel.service';

@Component({
  selector: 'app-updatemateriel',
  templateUrl: './updatemateriel.component.html',
  styleUrls: ['./updatemateriel.component.css']
})
export class UpdatematerielComponent implements OnInit {




  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  iduser: any;
  errorMessage = '';
  idsalle = '';
  user: any;


  constructor(private router: Router, private  route: ActivatedRoute, private tokenStorage: TokenStorageService,  private materielService: MaterielService) {
    this.idsalle = this.route['params']['value']['id'];
    this.getById();
  }

  getById() {
    this.materielService.findById(this.idsalle).subscribe(data => {
      this.form = data;
      console.log(this.form);
    });
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
      this.iduser = this.tokenStorage.getUser().id;
    }
  }

  onSubmit(): void {
    this.form.iduser = this.iduser;
    this.materielService.update(this.idsalle , this.form).subscribe(
      data => {
        this.router.navigate(['/gestion-materiel']);
      },
      err => {
        this.router.navigate(['/gestion-materiel']);

      }
    );
  }


}


