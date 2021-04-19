import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratoComponent } from './contrato/contrato.component';
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { DashboardClienteComponent } from './paginas/dashboard-cliente/dashboard-cliente.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { GaleriaComponent } from './paginas/galeria/galeria.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component'
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { DenunciasComponent } from './paginas/denuncias/denuncias.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { CrearUsuarioComponent } from './paginas/crear-usuario/crear-usuario.component';
import { CrearAdministradorComponent } from './paginas/crear-administrador/crear-administrador.component';
import { LoginUsuarioComponent } from './paginas/login-usuario/login-usuario.component';
import { LoginAdministradorComponent } from './paginas/login-administrador/login-administrador.component';
import { ClienteGuard } from './guardianes/cliente.guard';
import {InicioComponent} from './inicio/inicio.component';

const routes: Routes = [
  //{path: '', component: RegistroUsuariosComponent},
  { path: '', component: InicioComponent},
  { path: 'registro', component: RegistroUsuariosComponent },
  { path: 'contrato', component: ContratoComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'crear-usuario', component: CrearUsuarioComponent },
  { path: 'crear-administrador', component: CrearAdministradorComponent },
  { path: 'login-usuario', component: LoginUsuarioComponent },
  { path: 'login-administrador', component: LoginAdministradorComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [

      { path: 'usuario', component: UsuariosComponent },
      { path: 'categorias', component: CategoriasComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'denuncias', component: DenunciasComponent }


    ]
  },
  {
    path: 'dashboard-cliente', component: DashboardClienteComponent, canActivate:[ClienteGuard], children: [
      {
        path: 'productos', component: ProductosComponent, canActivate:[ClienteGuard]
      },

      {
        path: 'perfil', component: PerfilComponent, canActivate:[ClienteGuard]
      },

      {
        path: 'galeria', component: GaleriaComponent, canActivate:[ClienteGuard]
      }

    ]

  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
