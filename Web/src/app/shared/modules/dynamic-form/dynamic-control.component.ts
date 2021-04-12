import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormControl, FormControlType } from './schema/dynamic-form';

@Component({
  selector: 'app-dynamic-control',
  templateUrl: './dynamic-control.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
}) //implements OnChanges
export class DynamicControlComponent implements OnChanges {
  @Input() control: DynamicFormControl;
  @Input() rf: FormGroup;
  controlType = FormControlType;
  showErrors: boolean = false;
  constructor(private cd: ChangeDetectorRef) {}
  onMouseLeave() {
    this.showErrors = true;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`control rf`, this.rf);
    console.log(`control control`, this.control);
  }
}
