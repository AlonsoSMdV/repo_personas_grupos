import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [ButtonsComponent]
})
export class SharedModule { }
