import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-inclusive-leasing',
  templateUrl: './inclusive-leasing.component.html',
  styleUrls: ['./inclusive-leasing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InclusiveLeasingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inclusives = [
    '<p>1</p>Price<br>Analysis',
    '<p>2</p>Leasing<br>Pro',
    '<p>3</p>Pre-leasing<br>Inspection',
    '<p>4</p>Photos &amp;<br>Tours',
    '<p>5</p>Marketing<br>Your Home',
    '<p>6</p>Owner<br>Updates',
    '<p>7</p>Screening<br>Process',
    '<p>8</p>Move In &amp;<br>Inspection'
  ]

}
