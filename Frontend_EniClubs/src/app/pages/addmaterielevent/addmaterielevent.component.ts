import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../shared/services/token-storage.service';
import {ClubsService} from '../../shared/services/clubs.service';
import {EventsmatService} from '../../shared/services/eventsmat.service';
@Component({
  selector: 'app-addmaterielevent',
  templateUrl: './addmaterielevent.component.html',
  styleUrls: ['./addmaterielevent.component.css']
})
export class AddmaterieleventComponent implements OnInit {




  eventmat: any;
  settings = {
    columns: {
      namemateriel: {
        title: 'namemateriel'
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
  mats: any;

  idevent: any;


  constructor(private router: Router, private  route: ActivatedRoute, private tokenStorage: TokenStorageService, private eventsmatService: EventsmatService) {
    this.idevent = this.route['params']['value']['id'];
    this.getall();

  }

  getall() {
    this.eventsmatService.getall(this.idevent).subscribe(data => {
      console.log(data);
      this.mats = data;
      console.log(this.mats);
    });

  }

  delete($id) {
    this.eventsmatService.delete($id).subscribe(data => {
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

