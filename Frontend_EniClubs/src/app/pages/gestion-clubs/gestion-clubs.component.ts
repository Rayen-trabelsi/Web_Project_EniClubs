import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../shared/services/token-storage.service';
import {ClubsService} from '../../shared/services/clubs.service';

@Component({
  selector: 'app-gestion-clubs',
  templateUrl: './gestion-clubs.component.html',
  styleUrls: ['./gestion-clubs.component.css']
})
export class GestionClubsComponent implements OnInit {
  clubs: any;
  settings = {
    columns: {
      name: {
        title: 'name'
      },
      nbmembers: {
        title: 'local'
      },
      nameresp: {
        title: 'Nom de Responsable'
      },
    },
    attr: {
      class: 'table table-responsive'
    },
    actions: {
      columnTitle: '',
      custom: [
        {
          name: 'delete',
          title: '<a  href=""  ><i class="fa fa-trash px-1" aria-hidden="true"></i></a>'
        },
        {
          name: 'show',
          title: '<a  href="" ><i class="fa fa-eye px-1" aria-hidden="true" ></i></a>'
        },
        {
          name: 'update',
          title: '<a  href=""  ><i class="fa fa-wrench px-1" aria-hidden="true"></i></a>'
        },
      ],
      add: false,
      delete: false,
      edit: false,
      position: 'right'
    }
  };
  settingsUser = {
    columns: {
        name: {
          title: 'name'
        },
        nbmembers: {
          title: 'local'
        },
    },
    attr: {
      class: 'table table-responsive'
    },
    actions: {
      columnTitle: '',
      custom: [
        {
          name: 'show',
          title: '<a  href="" ><i class="fa fa-eye px-1" aria-hidden="true" ></i></a>'
        },
      ],
      add: false,
      delete: false,
      edit: false,
      position: 'right'
    }
  };
  user: any;


  constructor(private router: Router, private tokenStorage: TokenStorageService, private clubService: ClubsService) {
    this.getall();
  }

  getall() {
    this.clubService.getall().subscribe(data => {
      console.log(data);
      this.clubs = data;
      console.log(this.clubs);
    });

  }

  delete($id) {
    this.clubService.delete($id).subscribe(data => {
      window.location.reload();
    });
  }



  onclicktable($event) {
    if ($event.action === 'update') {
      this.router.navigate(['updateclubs', $event['data']['id'] ]);
    } else if ($event.action === 'show') {
      this.router.navigate(['show-clubs', $event['data']['id']]);
    } else if ($event.action === 'delete') {
      if (window.confirm('Voulez vous vraiment supprimer ce club?')) {
        this.delete($event['data']['id']);
        window.location.reload();

      } else {
        $event.confirm.reject();
      }
    } else {
      this.router.navigate(['gestion-clubs']);

    }

  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
    }
  }


}

