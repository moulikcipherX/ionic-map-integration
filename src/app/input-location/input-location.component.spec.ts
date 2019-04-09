import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLocationPage } from './input-location.page';

describe('InputLocationPage', () => {
  let component: InputLocationPage;
  let fixture: ComponentFixture<InputLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputLocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
