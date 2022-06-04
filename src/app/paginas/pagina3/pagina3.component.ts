import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ServiciosService } from 'src/app/componentes/servicios.service';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component implements OnInit {

  public formGroupRestaurante!: FormGroup;

  public dataFormulario: Array<any> = [];

  private id: number = 1;

  private idEditar: number = 0;

  public textoBoton: string = 'Guardar';


  constructor(
    private _builder: FormBuilder,
    private _serviciosService: ServiciosService
  ) {
  }

  ngOnInit(): void {
    this.inicializacionFormulario();
  }

  private inicializacionFormulario(): void {
    this.formGroupRestaurante = this._builder.group({
      nombrePlato: ['', [Validators.required]],
      nombreIngrediente: ['']
    }); 
  }

  public guardarData(data: any): void {
    const save = {
      idPlato: this.id,
      nombrePlato: data.nombrePlato,
    };

    if (this.idEditar !== 0) {
      save.idPlato = this.idEditar;
      const indexEditar = this.dataFormulario.findIndex(data => data.idPlato === this.idEditar);
      this.dataFormulario[indexEditar] = save;
      this.textoBoton = 'Guardar';
      this.idEditar = 0;
    } else {
      this.dataFormulario.push(save);
      this.id++;
      // this._serviciosService.guardarPlato(save).subscribe(res => console.log(res));
    }
    this.formGroupRestaurante.reset();
  }

  public editar(id: number): void {
    this.textoBoton = 'Editar';
    this.idEditar = id;
    const editarForm = this.dataFormulario.find(data => data.idPlato === id);
    this.formGroupRestaurante.patchValue(editarForm);
  }

  public eliminar(id: number): void {
    this.dataFormulario = this.dataFormulario.filter(data => data.idPlato !== id);
  }

}
