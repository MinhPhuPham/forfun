import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
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
  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {}
  loadData(data: DynamicForm) {
    this.data = { ...data };
    this.ref.markForCheck();
  }
}
