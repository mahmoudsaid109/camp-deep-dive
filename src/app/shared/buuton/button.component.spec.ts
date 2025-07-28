/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BuutonComponent } from './buuton.component';

describe('BuutonComponent', () => {
  let component: BuutonComponent;
  let fixture: ComponentFixture<BuutonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuutonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuutonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
