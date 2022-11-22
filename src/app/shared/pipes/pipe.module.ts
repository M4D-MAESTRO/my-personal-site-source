import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyPipe } from './utils/empty.pipe';
import { ConvertStatusPipe } from './utils/notificacao/convert-status.pipe';
import { TimeSincePipe } from './utils/time-since.pipe';

@NgModule({
  declarations: [EmptyPipe, ConvertStatusPipe, TimeSincePipe],
  imports: [CommonModule,],
  exports: [EmptyPipe, ConvertStatusPipe, TimeSincePipe],
})
export class PipeModule { }
