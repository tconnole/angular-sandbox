import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsciiComponent } from './ascii/ascii.component';
import { LoadingAnimationsComponent } from './loading-animations/loading-animations.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { NeonComponent } from './neon/neon.component';



@NgModule({
  declarations: [
    AsciiComponent,
    LoadingAnimationsComponent,
    NeonComponent,
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatInputModule,
    FormsModule,
  ]
})
export class LoadersModule { }
