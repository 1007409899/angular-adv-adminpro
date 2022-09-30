import { Component, OnInit } from '@angular/core';
import { Observable, retry,interval, take, map,filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent  {

  public intervalSubs!: Subscription;
  constructor(){
   /*  this.retornarObservacion().pipe(
      retry()
      )

   .subscribe(
    valor => console.log("subs", valor)
   ) */

   this.retornaIntervalo()
   .subscribe(console.log)
  }

  retornaIntervalo(): Observable<number> {
    return interval(500).pipe(
      take(10),
      map (valor => valor+1),
      filter(valor => (valor % 2 === 0) ? true : false),
    );
  }
  retornarObservacion():Observable<number>{
    let i = -1
    return new Observable<number>( observer =>{

  const interval =  setInterval( ()=> {
          i++;
          observer.next(i)

          if(i==4){
           clearInterval(interval)
           observer.complete()
          }
          if(i==2){
            observer.error("error en el observer")
          }
    },1000)
   });


  }
}
