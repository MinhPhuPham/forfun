import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-intro-business',
  templateUrl: './intro-business.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroBusinessComponent implements OnInit {
  videoUrl="https://www.youtube.com/embed/Semi7ws9SfI?rel=0;&autoplay=1"
  backgroundImage: string = 'https://i3.ytimg.com/vi/Semi7ws9SfI/maxresdefault.jpg';
  videoThumbnail = true;
  url!: SafeResourceUrl;

  constructor (public sanitizer:DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("");
  }

  ngOnInit(): void {
  }

  AutoPlay() : void {
    this.videoThumbnail = false;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }
}
