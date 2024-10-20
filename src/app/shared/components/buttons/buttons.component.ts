import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent  implements OnInit {
  title: string = 'Título Predeterminado';

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateTitle(this.router.url);
  }

  updateTitle(url: string ) {
    switch (url) {
      case '/home':
        this.title = 'Home';
        break;
      case '/personas':
        this.title = 'Personas';
        break;
      case '/grupos':
        this.title = 'Grupos';
        break;
      default:
        this.title = 'Título Predeterminado';
    }
  }
}
