import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../shared/services/token-storage.service';
import {MaterielService} from '../../shared/services/materiel.service';

@Component({
  selector: 'app-addmateriel',
  templateUrl: './addmateriel.component.html',
  styleUrls: ['./addmateriel.component.css']
})
export class AddmaterielComponent implements OnInit {




  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  chauffeurs: any;
  errorMessage = '';
  error: any = {isError: false, errorMessage: ''};
  user: any;
  constructor(private router: Router, private  route: ActivatedRoute, private tokenStorage: TokenStorageService, private materielService: MaterielService) {}
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
    }
  }
  onSubmit(): void {
    console.log(this.form);
    this.materielService.add(this.form).subscribe(
      data => {
        this.router.navigate(['/gestion-materiel']);
      },
      err => {
        this.router.navigate(['/gestion-materiel']);

      }
    );
  }
}



