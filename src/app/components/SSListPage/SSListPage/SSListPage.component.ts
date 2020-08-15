import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-SSListPage',
  templateUrl: './SSListPage.component.html',
  styleUrls: ['./SSListPage.component.scss']
})
export class SSListPageComponent implements OnInit {

  public newSSList:string[] = ['新着SS01', '新着SS02', '新着SS03', '新着SS04', '新着SS05', '新着SS06', '新着SS07', '新着SS08', '新着SS09', '新着SS10',];
  public weekRankingSSList:string[] = ['週間SS01', '週間SS02', '週間SS03', '週間SS04', '週間SS05', '週間SS06', '週間SS07', '週間SS08', '週間SS09', '月間SS10',];
  public monthRankingSSList:string[] = ['月間SS01', '月間SS02', '月間SS03', '月間SS04', '月間SS05', '月間SS06', '月間SS07', '月間SS08', '月間SS09', '月間SS10',];
  public allRankingSSList:string[] = ['累計SS01', '累計SS02', '累計SS03', '累計SS04', '累計SS05', '累計SS06', '累計SS07', '累計SS08', '累計SS09', '累計SS10',];



  constructor() { }

  ngOnInit() {
  }

}
