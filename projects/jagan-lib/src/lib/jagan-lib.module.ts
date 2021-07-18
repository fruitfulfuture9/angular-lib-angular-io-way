import { NgModule } from '@angular/core';
import { JaganLibComponent } from './jagan-lib.component';
import { ReddyComponent } from './reddy/reddy.component';



@NgModule({
  declarations: [JaganLibComponent, ReddyComponent],
  imports: [
  ],
  exports: [JaganLibComponent, ReddyComponent]
})
export class JaganLibModule { }
