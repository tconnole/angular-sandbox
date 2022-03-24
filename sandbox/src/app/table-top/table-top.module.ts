import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { DiceComponent } from './dice/dice.component';



@NgModule({
  declarations: [
    DiceRollerComponent,
    DiceComponent
  ],
  exports: [DiceRollerComponent],
  imports: [
    CommonModule
  ]
})
export class TableTopModule { }
