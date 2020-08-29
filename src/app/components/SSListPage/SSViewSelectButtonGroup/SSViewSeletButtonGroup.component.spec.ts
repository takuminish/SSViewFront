/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SSViewSelectButtonGroupComponent } from './SSViewSelectButtonGroup.component';

describe('SSViewSelectButtonGroupComponent', () => {
  let component: SSViewSelectButtonGroupComponent;
  let fixture: ComponentFixture<SSViewSelectButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SSViewSelectButtonGroupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SSViewSelectButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
