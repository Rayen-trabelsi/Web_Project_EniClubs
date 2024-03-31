import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../shared/services/token-storage.service';
import {SalleService} from '../../shared/services/salle.service';

@Component({
  selector: 'app-gestion-salle',
  templateUrl: './gestion-salle.component.html',
  styleUrls: ['./gestion-salle.component.css']
})
export class GestionSalleComponent implements OnInit {


  salle: any;
  settings = {
    columns: {
      name: {
        title: 'name'
      },
      local: {
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
      local: {
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


  constructor(private router: Router, private tokenStorage: TokenStorageService, private salleService: SalleService) {
    this.getall();
  }

  getall() {
    this.salleService.getall().subscribe(data => {
      console.log(data);
      this.salle = data;
    });

  }

  delete($id) {
    this.salleService.delete($id).subscribe(data => {
      window.location.reload();
    });
  }



  onclicktable($event) {
    if ($event.action === 'update') {
      this.router.navigate(['updatesalle', $event['data']['id'] ]);
    } else if ($event.action === 'show') {
      this.router.navigate(['show-vehicule', $event['data']['id']]);
    } else if ($event.action === 'delete') {
      if (window.confirm('Voulez vous vraiment supprimer cette salle?')) {
        this.delete($event['data']['id']);
        window.location.reload();

      } else {
        $event.confirm.reject();
      }
    } else {
      this.router.navigate(['gestion-salle']);

    }

  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
    }
  }


}

