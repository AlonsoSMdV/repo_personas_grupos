import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PersonModalComponent } from './components/person-modal/person-modal.component';



@NgModule({
  declarations: [ButtonsComponent, PersonModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [ButtonsComponent, PersonModalComponent]
})
export class SharedModule { }
