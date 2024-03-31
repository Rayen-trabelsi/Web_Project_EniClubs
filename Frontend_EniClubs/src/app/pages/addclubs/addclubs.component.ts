import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../shared/services/token-storage.service';
import {ClubsService} from '../../shared/services/clubs.service';

@Component({
  selector: 'app-addclubs',
  templateUrl: './addclubs.component.html',
  styleUrls: ['./addclubs.component.css']
})
export class AddclubsComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  chauffeurs: any;
  errorMessage = '';
  error: any = {isError: false, errorMessage: ''};
  resps: any;
  user: any;

  constructor(private router: Router, private  route: ActivatedRoute, private tokenStorage: TokenStorageService, private clubsService: ClubsService) {
    this.getallResp();
  }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
    }
  }
  getallResp(): void {
    this.clubsService.getallresp().subscribe(data => {
      this.resps = data;
      console.log(this.resps);
    });
  }
  onSubmit(): void {
    console.log(this.form);
    this.clubsService.add(this.form).subscribe(
      data => {
        this.router.navigate(['/gestion-clubs']);
      },
      err => {
        this.router.navigate(['/gestion-clubs']);

      }
    );
  }
}



