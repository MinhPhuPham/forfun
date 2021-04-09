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
  styleUrls: ['./dynamic-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
}) //implements OnChanges
export class DynamicControlComponent {
  @Input() control: DynamicFormControl;
  @Input('form') rf: FormGroup;
  controlType = FormControlType;
  showErrors: boolean = false;
  constructor(private cd: ChangeDetectorRef) {}
  onMouseLeave() {
    this.showErrors = true;
  }
}
