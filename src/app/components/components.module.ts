import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncremetadorComponent } from './incremetador/incremetador.component';

import { FormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    IncremetadorComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
  ],
  exports: [IncremetadorComponent,DonaComponent]
})
export class ComponentsModule { }
