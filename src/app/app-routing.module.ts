import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthGuard } from './service/auth.guard';


@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'usuarios', component: UsuarioComponent, canActivate: [AuthGuard]},
    { path: 'registro', component: RegistroComponent, canActivate: [AuthGuard]}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
