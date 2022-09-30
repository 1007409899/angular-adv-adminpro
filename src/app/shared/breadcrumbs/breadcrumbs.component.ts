import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  tituloSubs$: any;
//para leer argumentos en la ruta utilizamos Router
  constructor(private router: Router, rutasData:ActivatedRoute) {
    console.log(rutasData.snapshot)
 this.tituloSubs$=   this.getArgumentosRutas().subscribe(({titulo}) => {
      console.log(titulo);
    });;
   }
  ngOnDestroy() {
   this.tituloSubs$.unsubscribe();
  }

  ngOnInit(): void {

  }

  getArgumentosRutas() {
   return this.router.events
      .pipe(
        filter((event): event is NavigationEnd | any => event instanceof NavigationEnd),
        filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
        map((evento: ActivationEnd) => evento.snapshot.data)
      )

  }
}
