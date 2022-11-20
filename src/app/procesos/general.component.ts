import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ServiciosService } from '../componentes/servicios.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  public formGroupLogin!: UntypedFormGroup;

  public dataFormulario: Array<any> = [];

  private id: number = 1;

  private idEditar: number = 0;

  public textoBoton: string = 'Iniciar sesión';


  constructor(
    private _builder: UntypedFormBuilder,
    private _serviciosService: ServiciosService
  ) {
  }

  ngOnInit(): void {
    this.inicializacionFormulario();
  }

  private inicializacionFormulario(): void {
    this.formGroupLogin = this._builder.group({
      usuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],
    });
  }

  public guardarData(data: any): void {
    const save = {
      idPersona: this.id,
      nombrePersona: data.nombrePersona,
    };

    if (this.idEditar !== 0) {
      save.idPersona = this.idEditar;
      const indexEditar = this.dataFormulario.findIndex(data => data.idPersona === this.idEditar);
      this.dataFormulario[indexEditar] = save;
      this.textoBoton = 'Guardar';
      this.idEditar = 0;
    } else {
      this.dataFormulario.push(save);
      this.id++;
      // this._serviciosService.guardarPersona(save).subscribe(res => console.log(res));
    }
    this.formGroupLogin.reset();
  }

  public editar(id: number): void {
    this.textoBoton = 'Editar';
    this.idEditar = id;
    const editarForm = this.dataFormulario.find(data => data.idPersona === id);
    this.formGroupLogin.patchValue(editarForm);
  }

  public eliminar(id: number): void {
    this.dataFormulario = this.dataFormulario.filter(data => data.idPersona !== id);
  }

}
