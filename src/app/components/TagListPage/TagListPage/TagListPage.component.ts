import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-TagListPage',
  templateUrl: './TagListPage.component.html',
  styleUrls: ['./TagListPage.component.scss'],
})
export class TagListPageComponent implements OnInit {
  public tagSearch: FormControl = new FormControl();
  public tags: string[] = [
    'タグ1',
    'タグ2',
    'タグ3',
    'タグ4',
    'タグ5',
    'タグ6',
    'タグ7',
    'タグ8',
  ];
  public states: string[] = [
    'タグ1',
    'タグ2',
    'タグ3',
    'タグ4',
    'タグ5',
    'タグ6',
    'タグ7',
    'タグ8',
  ];
  public filteredStates: Observable<string[]>;

  constructor() {}

  ngOnInit() {
    this.filteredStates = this.tagSearch.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.states.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
