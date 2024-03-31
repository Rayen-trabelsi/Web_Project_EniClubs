import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {TokenStorageService} from '../../shared/services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
user: any;
  constructor(private router: Router, private authService: AuthService, private tokenStorage: TokenStorageService, private authservice: AuthService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.authservice.findByUsername(this.tokenStorage.getUser().username).subscribe(data => {
        this.user = data;
      });
      if (this.roles[0] === 'ROLE_RESPONSABLE_CLUB') {
        this.router.navigate(['/gestion-events']);

      } else {
        this.router.navigate(['/dashboard']);
      }

    }
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        if (this.roles[0] === 'ROLE_RESPONSABLE_CLUB') {
          this.router.navigate(['/gestion-events']);

        } else {
          this.router.navigate(['/dashboard']);
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }



  ngOnDestroy(): void {
  }

}
