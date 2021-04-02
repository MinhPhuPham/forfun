import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-intro-business',
  templateUrl: './intro-business.component.html',
  styleUrls: ['./intro-business.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroBusinessComponent implements OnInit {
  backgroundImage: string = 'https://i3.ytimg.com/vi/Semi7ws9SfI/maxresdefault.jpg';
  videoThumbnail = true;
  url!: SafeResourceUrl;

  constructor (public sanitizer:DomSanitizer) {
  }

  ngOnInit(): void {
  }

  propertyButton = {
    text: 'explore our guarantees',
    link: '',
    class: 'yellow text-white'
  }

  AutoPlay() : void {
    this.videoThumbnail = false;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/Semi7ws9SfI?rel=0;&autoplay=1");
  }
}
