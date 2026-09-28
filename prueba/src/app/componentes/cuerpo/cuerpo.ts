import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cuerpo',
  styleUrl: './cuerpo.css',
  templateUrl: './cuerpo.html',
})
export class Cuerpo {

  nombre= '+';
  laboratorio = 'Laboratorio 515';
  capacidad = 30;
  estudiantes = 0;
  menos= '-';
  advertencia='';
 

  ingresarEstudiante() {
    if(this.estudiantes<this.capacidad){
      this.estudiantes++;
      this.advertencia = 'Numero de estudiantes: ' + this.estudiantes;
    }
    else{
      this.estudiantes=this.capacidad;
      this.advertencia = 'El laboratorio esta lleno';
    }
  }
  quitarestudiante(){
    if (this.estudiantes<=0){    
    this.advertencia = 'El laboratorio esta vacio';
    this.estudiantes=0;
  }
  else{
    this.estudiantes--;
     this.advertencia = 'Numero de estudiantes: ' + this.estudiantes;
  }
  }
  porcentajeOcupacion() {
    if (this.capacidad <= 0) {
      return 0;
    }

    return Math.round((this.estudiantes / this.capacidad) * 100);
  }
}
