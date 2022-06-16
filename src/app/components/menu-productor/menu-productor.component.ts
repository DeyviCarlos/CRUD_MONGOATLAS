import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-productor',
  templateUrl: './menu-productor.component.html',
  styleUrls: ['./menu-productor.component.css']
})
export class MenuProductorComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  cerrar(){
    
    this._authService.logout();
  }
}
