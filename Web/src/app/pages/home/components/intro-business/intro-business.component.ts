import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ButtonConfigs } from 'src/app/shared/models';
@Component({
  selector: 'app-intro-business',
  templateUrl: './intro-business.component.html',
  styleUrls: ['./intro-business.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroBusinessComponent implements OnInit {
  videoUrl="https://www.youtube.com/embed/Semi7ws9SfI?rel=0;&autoplay=1"
  backgroundImage: string = 'https://i3.ytimg.com/vi/Semi7ws9SfI/maxresdefault.jpg';
  videoThumbnail = true;
  url!: SafeResourceUrl;
  propertyButton : ButtonConfigs={}

  constructor (public sanitizer:DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("");
    this.propertyButton= {
      text: 'explore our guarantees',
      link: '',
      class: 'yellow text-white'
    }
  }

  ngOnInit(): void {
  }

  AutoPlay() : void {
    this.videoThumbnail = false;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }
}
