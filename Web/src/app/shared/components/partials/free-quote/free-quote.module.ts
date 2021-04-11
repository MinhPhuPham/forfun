import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreeQuoteComponent } from './free-quote.component';

@NgModule({
  declarations: [FreeQuoteComponent],
  imports: [
    CommonModule
  ],
  exports: [FreeQuoteComponent]
})
export class FreeQuoteModule { }
