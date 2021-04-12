import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  NgModule,
} from '@angular/core';
import { BlockContent, HeaderBlockContent } from 'src/app/shared/models/block-content';
import { AnimateOnScrollModule } from 'src/app/shared/modules';

@Component({
  selector: 'app-block-content',
  templateUrl: './block-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockContentComponent implements OnInit {
  @Input() blockContent: BlockContent[] = [];
  @Input() headerBlock: HeaderBlockContent;

  constructor() { }

  ngOnInit(): void { }
}

@NgModule({
  declarations: [BlockContentComponent],
  imports: [CommonModule, AnimateOnScrollModule.forRoot()],
  exports: [BlockContentComponent],
})
export class BlockContentModule { }
