import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SidebarModule } from 'ng-sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavComponent } from './components/nav/nav.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { MenuProductorComponent } from './components/menu-productor/menu-productor.component';
import { RegistrarProductoComponent } from './components/registrar-producto/registrar-producto.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CarouselModule } from './carousel/carousel.module';
import { CarouselCategoriaModule } from './components/carousel-categoria/carousel-categoria.module';


@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    ListarUsuarioComponent,
    EditarUsuarioComponent,
    LoginComponent,
    InicioComponent,
    NavComponent,
    RegistroComponent,
    NosotrosComponent,
    ContactanosComponent,
    MenuProductorComponent,
    RegistrarProductoComponent,
    PerfilComponent,
    ListarProductoComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxUsefulSwiperModule,
    CarouselModule,
    CarouselCategoriaModule,
    SidebarModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: JWT_OPTIONS,useValue: JWT_OPTIONS
    },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
