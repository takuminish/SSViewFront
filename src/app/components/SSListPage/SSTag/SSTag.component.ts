import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-SSTag',
  templateUrl: './SSTag.component.html',
  styleUrls: ['./SSTag.component.scss']
})
export class SSTagComponent implements OnInit {

  @Input() tagText: string = '';

  constructor() { }

  ngOnInit() {
  }

}
