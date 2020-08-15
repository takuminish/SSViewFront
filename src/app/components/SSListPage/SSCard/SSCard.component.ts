import { Component, OnInit, Input } from '@angular/core';
import { SS } from 'src/app/models/SS.model';

@Component({
  selector: 'app-SSCard',
  templateUrl: './SSCard.component.html',
  styleUrls: ['./SSCard.component.scss']
})
export class SSCardComponent implements OnInit {

  @Input() ss:SS;

  constructor() { }

  ngOnInit() {
  }

}
