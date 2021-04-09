import { OptionInfo } from 'src/app/data/schema/option-info';

export class DynamicForm {
  token: string;
  title: string;
  subtitle: string;
  settings: FormSettings;
  controls: DynamicFormControl[];
}
export class FormSettings {
  style: FormStyle;
  color: string;
  backgroundColor: string;
  titleColor: string;
  subtitleColor: string;
  linkColor: string;
}
export class DynamicFormControl {
  key: string;
  label: string;
  type: FormControlType;
  order: number;
  required: boolean;
  validations: string[];
  value: string;
  options: OptionInfo[];
}

export enum FormStyle {
  Stack,
  Inline,
  Floating,
}
export enum FormControlType {
  Text = 1,
  Email = 2,
  Url = 3,
  Code = 4,
  Password = 5,
  Number = 6,
  Date = 7,
  Time = 8,
  Radio = 9,
  Checkbox = 10,
  Select = 11,
  TextArea = 12,
}
