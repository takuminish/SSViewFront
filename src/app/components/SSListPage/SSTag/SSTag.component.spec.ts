/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SSTagComponent } from './SSTag.component';

describe('SSTagComponent', () => {
  let component: SSTagComponent;
  let fixture: ComponentFixture<SSTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SSTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SSTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
