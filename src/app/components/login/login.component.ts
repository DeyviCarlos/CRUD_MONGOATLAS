import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb:FormBuilder, private router: Router,
    private _authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  
  logearUsuario(){
    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;

    this._authService.logear(email,password).subscribe(data =>{  
      console.log(data);
      localStorage.setItem('token',data.jwtToken);
      this.router.navigate(['/tienda/perfil']);
    }, error =>{
      console.log(error);
      this.loginForm.reset();
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
