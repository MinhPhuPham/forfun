import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfidenceGuaranteesComponent } from './confidence-guarantees.component';

@NgModule({ 
    declarations: [ ConfidenceGuaranteesComponent ],
    exports: [ ConfidenceGuaranteesComponent ], 
    imports: [CommonModule] 
})
export class ConfidenceGuaranteesModule {
}