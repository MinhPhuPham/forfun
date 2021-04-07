import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DynamicForm, FormControlType } from './schema/dynamic-form';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent implements OnInit {
  data: DynamicForm = new DynamicForm();
  controlType = FormControlType;
  rf: FormGroup = new FormGroup({});
  constructor(private ref: ChangeDetectorRef, private fb: FormBuilder) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {}
  loadData(data: DynamicForm) {
    this.data = { ...data };
    this.generateForm();
    console.log(this.rf.value);
    this.ref.markForCheck();
  }
  generateForm() {
    this.rf = new FormGroup({});
    this.data.controls.forEach((control) => {
      this.rf.addControl(control.key, new FormControl(''));
    });
  }
}
