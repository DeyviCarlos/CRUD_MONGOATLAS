import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
    private _authService: AuthService) { 
    this.usuarioForm = this.fb.group({
      nombre: ['',Validators.required],
      email: ['',Validators.required],
      password: ['', Validators.required],
      repassword: ['', Validators.required]
    })
    
  }
  ngOnInit(): void {
  }

  registrarUsuario(){
    //obtener en consola los elementos
    //console.log(this.usuarioForm.get('nombre')?.value);
    //console.log(this.usuarioForm.get('apellido_paterno')?.value);
    const repass = this.usuarioForm.get('repassword')?.value;
    const USUARIO: Usuario = {
      nombre: this.usuarioForm.get('nombre')?.value,
      email: this.usuarioForm.get('email')?.value,
      password: this.usuarioForm.get('password')?.value,
      rol: ""
    }

    this._authService.register(USUARIO).subscribe(data =>{
      console.log(data);
      localStorage.setItem('token',data.jwtToken);
      this.router.navigate(['/tienda/perfil']);
    }, error =>{
      console.log(error);
      this.usuarioForm.reset();
    })
  }
  focoInput(event: any){
    //parentNode o parentElement
    let parent = <HTMLElement>event.target.parentElement.parentElement;
    parent.classList.add("focus");
  }
  nofocoInput(event: any){
    let parent = <HTMLElement>event.target.parentElement.parentElement;
    if(event.target.value == ""){
      parent.classList.remove("focus");
    }
  }

}
