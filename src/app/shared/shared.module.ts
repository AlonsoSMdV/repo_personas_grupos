import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PersonModalComponent } from './components/person-modal/person-modal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ButtonsComponent, PersonModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [ButtonsComponent, PersonModalComponent]
})
export class SharedModule { }
