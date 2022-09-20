import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incremetador',
  templateUrl: './incremetador.component.html',
  styles: [
  ]
})
export class IncremetadorComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }

  @Input() progress: number = 15;
  @Input() btnClass: string = 'btn btn-primary';
  @Output() valorsalidas: EventEmitter<number> = new EventEmitter<number>();


  cambiarValor(valor: number) {

    if (this.progress >= 100 && valor >= 0) {
      this.valorsalidas.emit(100)
      this.progress = 100;
      return;
    }
    if (this.progress <= 0 && valor < 0) {
      this.valorsalidas.emit(0)

      this.progress = 0;
      return;
    }
    this.progress += valor;

    this.valorsalidas.emit(this.progress);

  }
  onChange(num: number) {
    if(num >=100){
    this.valorsalidas.emit(100);

    }
    this.valorsalidas.emit(num);
  }
}
