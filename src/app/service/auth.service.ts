import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  usuarios = [
    { email: 'matheus@gmail.com', password: '123', role: 'admin' },
    { email: 'taina@gmail.com', password: '1234', role: 'user' }
  ];
  
  mostrarMenuEmitter = new EventEmitter<boolean>(true);
  admEmitter = new EventEmitter<boolean>();

  adm = false;

  constructor(private router: Router) { }


  start() {
    sessionStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

  login(form) {
    let itens = JSON.parse(sessionStorage.getItem('usuarios'));
    let user = itens.filter(usuario => usuario.email == form.value.email && usuario.password == form.value.password);
    if (user.length == 0) {
      alert('Usuário ou senha incorreto');
    } else {
      if(user[0].role == 'admin') {
        sessionStorage['adm'] = true;
      } else {
        sessionStorage['adm'] = false;
      }
      sessionStorage['token'] = 'xptoh26410x5=50';
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['home']);
    }
  }

  register(form) {
    this.usuarios.push(form.value);
    sessionStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    this.router.navigate(['usuarios']);
  }

  logout() {
    sessionStorage.removeItem('token');
    this.mostrarMenuEmitter.emit(false);
    sessionStorage['adm'] = false;
    this.router.navigate(['']);
  }
  
}

export class PizzaPartyComponent { }