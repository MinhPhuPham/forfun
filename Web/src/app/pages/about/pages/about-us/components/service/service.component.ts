import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-full-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceComponent implements OnInit {
  constructor () { }

  ngOnInit(): void { }
}
