import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { DynamicFormComponent } from 'src/app/shared/components/dynamic-form/dynamic-form.component';
import { DynamicForm } from 'src/app/shared/components/dynamic-form/schema/dynamic-form';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  @ViewChild('dynamicForm') dynamicForm: DynamicFormComponent;
  formData: DynamicForm;
  constructor(private http: HttpClient) {
    this.http.get('https://localhost:44314/form').subscribe((resp: any) => {
      this.formData = resp.data as DynamicForm;
      this.dynamicForm.loadData(this.formData);
    });
  }
  ngOnInit(): void {}
}
