import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {
  // connect to mongo in nodejs


  constructor() { }

  ngOnInit(): void {
    this.getUsuarios()
    const promesas = new Promise((resolve) => {
      resolve('hola mundo ')
    });
    promesas.then(() => {
      console.log("hey termine")
    });
    console.log('fin  del init ')
  }

  getUsuarios() {
    fetch('https:/regres.in/api/users')
    .then(rest => console.log(rest.json()))

  }

}
