import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../shared/services/token-storage.service';
import {MaterielService} from '../../shared/services/materiel.service';

@Component({
  selector: 'app-gestion-materiel',
  templateUrl: './gestion-materiel.component.html',
  styleUrls: ['./gestion-materiel.component.css']
})
export class GestionMaterielComponent implements OnInit {
  materiel: any;
  settings = {
    columns: {
      name: {
        title: 'name'
      },
      quantite: {
        title: 'quantite'
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
      quantite: {
        title: 'quantite'
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


  constructor(private router: Router, private tokenStorage: TokenStorageService, private materielService: MaterielService) {
    this.getall();
  }

  getall() {
    this.materielService.getall().subscribe(data => {
      console.log(data);
      this.materiel = data;
    });

  }

  delete($id) {
    this.materielService.delete($id).subscribe(data => {
      window.location.reload();
    });
  }



  onclicktable($event) {
    if ($event.action === 'update') {
      this.router.navigate(['updatemateriel', $event['data']['id'] ]);
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

