On parent component:

### .ts

import DynamicFormModule to module which use dynamic form


```typescript
    formData$: Observable<DynamicForm>;
    constructor(private http: HttpClient, private ref: ChangeDetectorRef) {
        let url = `...`;
        this.formData$ = this.http
        .get<DynamicForm>(url)
        .pipe(map((resp: any) => resp.data));
    }
```

### .html

```html
<dynamic-form
  [data]="formData$ | async"
  (onSubmit)="onSubmit($event)"
></dynamic-form>
```
