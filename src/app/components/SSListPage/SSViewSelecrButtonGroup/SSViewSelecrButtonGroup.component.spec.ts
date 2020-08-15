/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SSViewSelecrButtonGroupComponent } from './SSViewSelecrButtonGroup.component';

describe('SSViewSelecrButtonGroupComponent', () => {
  let component: SSViewSelecrButtonGroupComponent;
  let fixture: ComponentFixture<SSViewSelecrButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SSViewSelecrButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SSViewSelecrButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
