import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Destroyable } from './shared/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends Destroyable implements AfterViewInit {
  title = 'Clockwork';

  ngAfterViewInit(): void {
    // fromEvent(window, 'resize')
    //   .pipe(
    //     takeUntil(this.$destroyed),
    //     debounceTime(500),
    //   ).subscribe((evt: any) => {
        
    //   });
  }
}
