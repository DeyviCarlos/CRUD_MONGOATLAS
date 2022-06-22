import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './components/contactanos/contactanos.component';

//componentes
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroComponent } from './components/registro/registro.component';

import { AuthGuard } from './auth.guard';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { RegistrarProductoComponent } from './components/registrar-producto/registrar-producto.component';

const routes: Routes = [
  {path: '', component: InicioComponent },
  {path: 'tienda/inicio', component: InicioComponent },
  {path: 'tienda/catalogo', component: CatalogoComponent },
  {path: 'tienda/nosotros', component: NosotrosComponent },
  {path: 'tienda/contactanos', component: ContactanosComponent },
  {path: 'tienda/registro', component: RegistroComponent },
  {path: 'tienda/perfil', component: PerfilComponent, canActivate:[AuthGuard]},
  {path: 'tienda/login', component: LoginComponent},
  {path: 'tienda/productos', component: ListarProductoComponent, canActivate:[AuthGuard]},
  {path: 'tienda/usuarios', component: ListarUsuarioComponent, canActivate: [AuthGuard]},
  {path: 'tienda/usuarios/create', component: CrearUsuarioComponent},
  {path: 'tienda/usuarios/edit/:id', component: EditarUsuarioComponent},
  {path: 'tienda/productos/create', component: RegistrarProductoComponent,canActivate: [AuthGuard]},
  {path: '**', redirectTo: '', pathMatch: 'full'}

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
