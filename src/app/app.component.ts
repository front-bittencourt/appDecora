import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appLogin';
  showMenu: boolean = false;


  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.mostrarMenuEmitter.subscribe(
      mostrar => this.showMenu = mostrar
    );
  }

  logout() {
    this.auth.logout();
  }
}
