import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertTimestampPipe } from './convert-timestamp.pipe';

@NgModule({
  declarations: [
    ConvertTimestampPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConvertTimestampPipe
  ]
})
export class PipesModule { }
