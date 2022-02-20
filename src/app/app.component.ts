import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  usuarioForm: FormGroup;
  usuarioModel: Usuario;

  countMudancaValor: number = 0;
  ultimaMudancaValor: any;

  countMudancaStatus: number = 0;
  ultimaMudancaStatus: any;

  ngOnInit(){
      this.usuarioForm = new FormGroup({
        "name": new FormControl(null, [Validators.required]),
        "adress": new FormControl(),
        "acesso": new FormGroup({
          "email": new FormControl(null, [Validators.required, Validators.email]),
          "password": new FormControl(null, [Validators.required, Validators.minLength(3)])
        }),
        "genero": new FormControl(null, [Validators.required]),
      });
  }

  get emailInvalido() {
    return !this.usuarioForm.get('acesso.email').valid
      && this.usuarioForm.get('acesso.email').touched;
  }
  
  get passwordInvalida() {
    return !this.usuarioForm.get('acesso.password').valid
      && this.usuarioForm.get('acesso.password').touched;
  }
  
  get acessoInvalidos() {
    return !this.usuarioForm.get('acesso').valid
      && this.usuarioForm.get('acesso').touched;
  }

  preencherComPatchValue() {
    this.usuarioForm.patchValue({
      "name": "Silas Rafael Barreto Prado",
      "acesso": {
        "email": "silas.prado98@gmail.com"
      }
    });
  }
  
  preencherComSetValue() {
    this.usuarioForm.setValue({
      "name": "Silas Rafael Barreto Prado",
      "adress": "Rua Um",
      "acesso": {
        "email": "silas.prado98@gmail.com",
        "password": "password"
      }
    });
  }

  limpar() {
    this.usuarioForm.reset();
  }

  enviar(){
  
  }
}


