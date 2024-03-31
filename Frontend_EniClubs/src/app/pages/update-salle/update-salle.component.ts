import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../shared/services/token-storage.service';
import {SalleService} from '../../shared/services/salle.service';

@Component({
  selector: 'app-update-salle',
  templateUrl: './update-salle.component.html',
  styleUrls: ['./update-salle.component.css']
})
export class UpdateSalleComponent implements OnInit {


  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  iduser: any;
  errorMessage = '';
  idsalle = '';
  user: any;


  constructor(private router: Router, private  route: ActivatedRoute, private tokenStorage: TokenStorageService,  private salleService: SalleService) {
    this.idsalle = this.route['params']['value']['id'];
    this.getById();
  }

  getById() {
    this.salleService.findById(this.idsalle).subscribe(data => {
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
    this.salleService.update(this.idsalle , this.form).subscribe(
      data => {
        this.router.navigate(['/gestion-salle']);
      },
      err => {
        this.router.navigate(['/gestion-salle']);

      }
    );
  }


}

