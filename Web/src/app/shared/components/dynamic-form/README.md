On parent component:

# Solotion 2

### .ts
```typescript
    formData$: Observable<DynamicForm>;
    constructor(private http: HttpClient, private ref: ChangeDetectorRef) {
        this.formData$ = this.http
        .get<DynamicForm>('https://localhost:44314/form')
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

# Solotion 1

### .ts

```typescript
    formData: DynamicForm;
    constructor(private ref: ChangeDetectorRef) {
        let url =`...`;
        this.http.get(url).subscribe((resp: any) => {
        this.formData = resp.data as DynamicForm;
        ref.markForCheck();
    });
    onSubmit(postData:any) {
        // do sth.
    }
  }
```

### .html

```html
<dynamic-form [data]="formData" (onSubmit)="onSubmit($event)"></dynamic-form>
```
