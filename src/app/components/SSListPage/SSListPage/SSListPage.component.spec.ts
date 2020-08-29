/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SSListPageComponent } from './SSListPage.component';

describe('SSListPageComponent', () => {
  let component: SSListPageComponent;
  let fixture: ComponentFixture<SSListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SSListPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SSListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
