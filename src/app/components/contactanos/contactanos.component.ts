import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
  contactoForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: [''],
      email: [''],
      telefono: [''],
      mensaje: ['']
  })
   }

  ngOnInit(): void {
  }

}
