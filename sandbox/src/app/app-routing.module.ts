import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiceRollerComponent } from './table-top/dice-roller/dice-roller.component';
import { TableTopModule } from './table-top/table-top.module';

const routes: Routes = [{
  path: 'dice-rollers', component: DiceRollerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
