import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  showRegister: boolean = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.start();
    this.showRegister = JSON.parse(sessionStorage.getItem('adm'));
  }

  displayedColumns: string[] = ['email', 'role'];
  dataSource = JSON.parse(sessionStorage.getItem('usuarios'));

}
