import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../shared/services/token-storage.service';
import {ClubsService} from '../../shared/services/clubs.service';


@Component({
  selector: 'app-updateclubs',
  templateUrl: './updateclubs.component.html',
  styleUrls: ['./updateclubs.component.css']
})
export class UpdateclubsComponent implements OnInit {







  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  iduser: any;
  errorMessage = '';
  idsalle = '';
  user: any;
  resps: any;


  constructor(private router: Router, private  route: ActivatedRoute, private tokenStorage: TokenStorageService,  private clubsService: ClubsService) {
    this.idsalle = this.route['params']['value']['id'];
    this.getById();
    this.getallResp();
  }

  getById() {
    this.clubsService.findById(this.idsalle).subscribe(data => {
      this.form = data;
      console.log(this.form);
    });
  }
  getallResp(): void {
    this.clubsService.getallresp().subscribe(data => {
      this.resps = data;
      console.log(this.resps);
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
    this.clubsService.update(this.idsalle , this.form).subscribe(
      data => {
        this.router.navigate(['/gestion-clubs']);
      },
      err => {
        this.router.navigate(['/gestion-clubs']);

      }
    );
  }


}



