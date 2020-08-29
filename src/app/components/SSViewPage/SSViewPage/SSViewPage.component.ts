import { Component, OnInit } from '@angular/core';
import { SS } from 'src/app/models/SS.model';

@Component({
  selector: 'app-SSViewPage',
  templateUrl: './SSViewPage.component.html',
  styleUrls: ['./SSViewPage.component.scss'],
})
export class SSViewPageComponent implements OnInit {
  public ss: SS = {
    id: 1,
    title: 'SSタイトル',
    content:
      'テスト本文です。テスト本文です。テスト本文です。テスト本文です。テスト本文です。テスト本文です。',
    tags: [
      'タグ1',
      'タグ2',
      'タグ3',
      'タグ4',
      'タグ5',
      'タグ6',
      'タグ7',
      'タグ8',
    ],
    pvcount: 1,
    createdAt: new Date(),
  };

  constructor() {}

  ngOnInit() {}
}
