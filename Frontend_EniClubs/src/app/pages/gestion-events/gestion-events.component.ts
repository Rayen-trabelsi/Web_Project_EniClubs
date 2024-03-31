import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../shared/services/token-storage.service';
import {EventService} from '../../shared/services/events.service';
@Component({
  selector: 'app-gestion-events',
  templateUrl: './gestion-events.component.html',
  styleUrls: ['./gestion-events.component.css']
})
export class GestionEventsComponent implements OnInit {
  event: any;
  event1: any;
  event2: any;


  settings = {
    columns: {
      name: {
        title: 'name'
      },
      description: {
        title: 'description'
      },
      etat: {
        title: 'etat'
      },
      date: {
        title: 'date'
      },
      heure: {
        title: 'heure'
      },
    },
    attr: {
      class: 'table table-responsive'
    },
    actions: {
      columnTitle: '',
      custom: [
        {
          name: 'accepte',
          title: '<a  href=""  ><i class="fa fa-check-square px-1" aria-hidden="true" ></i></a>'
        },
        {
          name: 'refuse',
          title: '<a  href="" ><i class="fa fa-window-close" aria-hidden="true"></i></a>'
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
      description: {
        title: 'description'
      },
      etat: {
        title: 'etat'
      },
      date: {
        title: 'date'
      },
      heure: {
        title: 'heure'
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
  settingsresp = {
    columns: {
      name: {
        title: 'name'
      },
      description: {
        title: 'description'
      },
      etat: {
        title: 'etat'
      },
      date: {
        title: 'date'
      },
      heure: {
        title: 'heure'
      },
    },
    attr: {
      class: 'table table-responsive'
    },
    actions: {
      columnTitle: '',
      custom: [
        {
        },
      ],
      add: false,
      delete: false,
      edit: false,
      position: 'right'
    }
  };
  user: any;


  constructor(private router: Router, private tokenStorage: TokenStorageService, private eventsService: EventService) {
    this.getallA();
    this.getallR();
    this.getallresp();
  }

  getallA() {
    this.eventsService.getallEnattente().subscribe(data => {
      console.log(data);
      this.event = data;
      console.log(this.event.etat);
    });

  }
  getallR() {
    this.eventsService.getallR().subscribe(data => {
      console.log(data);
      this.event1 = data;
    });
  }
  getallresp() {
    this.eventsService.getallNV(this.tokenStorage.getUser().username).subscribe(data => {
      this.event2 = data;
    });
  }

  delete($id) {
    this.eventsService.delete($id).subscribe(data => {
      window.location.reload();
    });
  }
  sendA($nameuser, $idevent) {
    this.eventsService.sendAcceptation($nameuser, $idevent).subscribe();
  }
  sendR($nameuser, $idevent) {
    this.eventsService.sendRefus($nameuser, $idevent).subscribe();
  }



  onclicktable($event) {
    if ($event.action === 'ajoutmat') {
      this.router.navigate(['addeventmateriel', $event['data']['id'] ]);
    } else if ($event.action === 'refuse') {
      if (window.confirm('Voulez vous vraiment refuser cette evenement?')) {
        this.sendR($event['data']['namerespclubs'][0], $event['data']['id']);
        window.location.reload();
      }
      } else if ($event.action === 'accepte') {
      if (window.confirm('Voulez vous vraiment accepter cette evenement?')) {
        this.sendA($event['data']['namerespclubs'][0], $event['data']['id']);
        window.location.reload();

      } else {
        $event.confirm.reject();
      }
    } else {
      this.router.navigate(['gestion-events']);

    }

  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
    }
  }


}

