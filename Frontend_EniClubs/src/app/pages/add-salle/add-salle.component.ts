import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../shared/services/token-storage.service';
import {SalleService} from '../../shared/services/salle.service';

@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrls: ['./add-salle.component.css']
})
export class AddSalleComponent implements OnInit {


  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  chauffeurs: any;
  errorMessage = '';
  error: any = {isError: false, errorMessage: ''};
  user: any;
  constructor(private router: Router, private  route: ActivatedRoute, private tokenStorage: TokenStorageService, private salleService: SalleService) {}
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
    }
  }
  onSubmit(): void {
    console.log(this.form);
    this.salleService.add(this.form).subscribe(
      data => {
        this.router.navigate(['/gestion-salle']);
      },
      err => {
        this.router.navigate(['/gestion-salle']);

      }
    );
  }
}



