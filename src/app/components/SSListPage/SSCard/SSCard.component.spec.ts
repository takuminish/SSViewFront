/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SSCardComponent } from './SSCard.component';

describe('SSCardComponent', () => {
  let component: SSCardComponent;
  let fixture: ComponentFixture<SSCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SSCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SSCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
