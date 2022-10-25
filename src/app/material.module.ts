import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
