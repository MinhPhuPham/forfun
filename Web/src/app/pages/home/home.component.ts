import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  constructor(private readonly metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.resetMeta();
  }

}
