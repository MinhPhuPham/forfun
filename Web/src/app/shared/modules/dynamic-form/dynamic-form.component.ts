import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DynamicForm, FormControlType, FormStyle } from './schema/dynamic-form';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent implements OnInit {
  @Input() data: DynamicForm = new DynamicForm();
  @Output() onSubmit = new EventEmitter<any>();
  controlType = FormControlType;
  formStyle = FormStyle;
  rf: FormGroup;
  subTitle: SafeHtml;
  showErrors: boolean = false;
  constructor(
    private ref: ChangeDetectorRef,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer
  ) {
    setInterval(() => {
      this.ref.detectChanges();
    }, 1000);
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    console.log('data', this.data);
    this.loadData();
  }
  loadData() {
    if (!this.data) return;
    this.loadFormSettings();
    this.generateForm();
    console.log(`form`, this.data);
    this.subTitle = this.sanitizer.bypassSecurityTrustHtml(this.data.subtitle);
  }
  loadFormSettings() {
    const formSettings = [
      { name: '--dynamic-form-color', value: this.data.settings.color },
      {
        name: '--dynamic-form-background-color',
        value: this.data.settings.backgroundColor,
      },
      {
        name: '--dynamic-form-title-color',
        value: this.data.settings.titleColor,
      },
      {
        name: '--dynamic-form-subtitle-color',
        value: this.data.settings.subtitleColor,
      },
      {
        name: '--dynamic-form-link-color',
        value: this.data.settings.linkColor,
      },
    ];
    formSettings.forEach((data) => {
      document.documentElement.style.setProperty(`${data.name}`, data.value);
    });
  }
  generateForm() {
    this.rf = new FormGroup({});
    this.rf.addControl('token', new FormControl(this.data.token));
    this.data.controls.forEach((controls) => {
      controls.forEach((control) => {
        switch (control.type) {
          case 'email':
            this.rf.addControl(
              control.key,
              new FormControl(
                control.value ? control.value : '',
                Validators.compose([Validators.required, Validators.email])
              )
            );
            break;
          case 'password':
            this.rf.addControl(
              control.key,
              new FormControl(
                control.value ? control.value : '',
                Validators.compose([
                  Validators.required,
                  Validators.minLength(8),
                ])
              )
            );
            break;
          default:
            if (control.required) {
              this.rf.addControl(
                control.key,
                new FormControl(
                  control.value ? control.value : '',
                  Validators.required
                )
              );
            } else {
              this.rf.addControl(
                control.key,
                new FormControl(control.value ? control.value : '')
              );
            }
        }
      });
    });
    console.log('rf', this.rf.value);
  }
  submit() {
    this.showErrors = true;
    console.log(this.rf.value);
    if (this.rf.valid) {
      this.onSubmit.emit(this.rf.value);
    }
  }
}
