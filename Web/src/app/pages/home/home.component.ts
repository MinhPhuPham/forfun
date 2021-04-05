import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Frontmatter, MetaService } from 'src/app/shared';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  data;
  constructor(
    private readonly metaService: MetaService,
    private http: HttpClient
  ) {
    this.http.get('https://localhost:44314/metadata').subscribe((resp: any) => {
      if (resp && resp.success) {
        this.data = { ...resp.data };
        //console.log(this.data);
        let metadata: Frontmatter = {
          route: resp.url,
          description: this.data.description,
          title: this.data.title,
        };
        // metadata.title = this.data.title;
        // metadata = this.data.description;
        //console.log(metadata);
        this.metaService.update(metadata);
      } else {
        this.metaService.resetMeta();
      }
    });
  }

  ngOnInit(): void {}
}
