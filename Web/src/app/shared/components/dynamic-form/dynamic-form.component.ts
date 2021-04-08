import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DynamicForm, FormControlType } from './schema/dynamic-form';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent implements OnInit {
  @Input() data: DynamicForm = new DynamicForm();
  @Output() onSubmit = new EventEmitter<any>();
  controlType = FormControlType;
  rf: FormGroup = new FormGroup({});
  subTitle: SafeHtml;
  showErrors: boolean = false;
  constructor(
    private ref: ChangeDetectorRef,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    console.log('data', this.data);
    this.loadData();
  }
  loadData() {
    if (!this.data) return;
    // this.data = { ...data };
    this.generateForm();
    console.log(this.rf.value);
    this.subTitle = this.sanitizer.bypassSecurityTrustHtml(this.data.subtitle);
    this.ref.markForCheck();
  }
  generateForm() {
    this.rf = new FormGroup({});
    this.rf.addControl('token', new FormControl(this.data.token));
    this.data.controls.forEach((control) => {
      switch (control.type) {
        case this.controlType.Email:
          this.rf.addControl(
            control.key,
            new FormControl(
              '',
              Validators.compose([Validators.required, Validators.email])
            )
          );
          break;
        case this.controlType.Password:
          this.rf.addControl(
            control.key,
            new FormControl(
              '',
              Validators.compose([Validators.required, Validators.minLength(8)])
            )
          );
          break;
        default:
          if (control.required) {
            this.rf.addControl(
              control.key,
              new FormControl('', Validators.required)
            );
          } else {
            this.rf.addControl(control.key, new FormControl(''));
          }
      }
    });
  }
  submit() {
    this.showErrors = true;
    //console.log(this.rf.value);
    if (this.rf.valid) {
      this.onSubmit.emit(this.rf.value);
    }
  }
}
