import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-SSViewSelectButtonGroup',
  templateUrl: './SSViewSelectButtonGroup.component.html',
  styleUrls: ['./SSViewSelectButtonGroup.component.scss'],
})
export class SSViewSelectButtonGroupComponent implements OnInit {
  @Output() changeSSSelect: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selectSS(value: string) {
    console.log(value);
    this.changeSSSelect.emit(value);
  }
}
