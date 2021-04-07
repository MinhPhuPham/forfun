import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Frontmatter, MetaService } from 'src/app/shared';
import { HttpClient } from '@angular/common/http';
import { Banner, PageId } from 'src/app/shared/models/banner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  banner : Banner = {
    pageID : PageId.Home,
    mainTitle : "Clockwork Property Management",
    subTitle : `PROPERTY MANAGEMENT FOR LOS ANGELES, ORANGE COUNTY,<br>RIVERSIDE,
    AND SAN BERNARDINO COUNTIES`,
    backgroundImage : "/assets/images/home/cpm_banner_home.webp"
  }

  constructor(
    private readonly metaService: MetaService,
    private http: HttpClient
  ) {
    // this.http.get('https://localhost:44314/metadata').subscribe((resp: any) => {
    //   if (resp && resp.success) {
    //     this.data = { ...resp.data };
    //     //console.log(this.data);
    //     let metadata: Frontmatter = {
    //       route: resp.url,
    //       description: this.data.description,
    //       title: this.data.title,
    //     };
    //     // metadata.title = this.data.title;
    //     // metadata = this.data.description;
    //     //console.log(metadata);
    //     this.metaService.update(metadata);
    //   } else {
    //   }
    // });
    this.metaService.resetMeta();
  }

  ngOnInit(): void {}
}
