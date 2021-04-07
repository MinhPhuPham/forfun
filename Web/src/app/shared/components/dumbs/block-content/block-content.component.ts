import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { BlockContent } from 'src/app/shared/models/block-content';


@Component({
  selector: 'app-block-content',
  templateUrl: './block-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockContentComponent implements OnInit {
  @Input() blockContent: BlockContent[] = []

  constructor() {}

  ngOnInit(): void {}
}
